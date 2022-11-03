import { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '@/lib/mongodb'

export default async function countUsers(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = (await clientPromise).db(process.env.MONGODB_DB)

  const users = await db
    .collection('users')
    .find({ foodPreference: { $eq: 'Nut Allergy' } })
    .toArray()
  const oof_nut_allergy_users = Object.keys(users).length

  res.status(200).json({ oof_nut_allergy_users })
}
