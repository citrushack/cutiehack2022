import { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '@/lib/mongodb'
import { sendEmail } from '@/lib/sendgrid'
import { getSession } from 'next-auth/react'
import { sendAcceptanceEmail } from '@/lib/acceptNotification'
import { sendRejectEmail } from '@/lib/rejectNotification'

export default async function autoReviewApplication(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req })
  const db = (await clientPromise).db(process.env.MONGODB_DB)
  if (session && session.user.admin) {
    const { users } = req.body

    // send email notification about user's application status and update current status
    for (let i = 0; i < users.length; i++) {
      if (users[i].criteriaMet) {
        await sendAcceptanceEmail({
          email: users[i].email,
          first_name: users[i].name.first,
        })
        await db
          .collection('users')
          .updateOne({ uid: users[i].uid }, { $set: { qualified: 'yeah' } })
      } else {
        await sendRejectEmail({
          email: users[i].email,
        })
        await db
          .collection('users')
          .updateOne({ uid: users[i].uid }, { $set: { qualified: 'nope' } })
      }
    }

    res.status(200).json({})
  } else {
    res.status(401).json({})
  }
}
