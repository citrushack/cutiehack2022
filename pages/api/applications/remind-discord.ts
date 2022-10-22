import { NextApiRequest, NextApiResponse } from 'next'
import { sendEmail } from '@/lib/sendgrid'
import { sendDiscordReminderEmail } from '@/lib/discordReminder'
import { getSession } from 'next-auth/react'

export default async function remindDiscord(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req })
  if (session && session.user.admin) {
    const { users } = req.body

    // send email notification to remind user to apply
    for (let i = 0; i < users.length; i++) {
      await sendDiscordReminderEmail({
        email: users[i].email,
      })
    }

    res.status(200).json({})
  } else {
    res.status(401).json({})
  }
}
