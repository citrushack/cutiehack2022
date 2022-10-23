import { createTransport } from 'nodemailer'
import type { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from 'lib/mongodb'
import { htmlEmail, textEmail } from 'lib/verificationMailContent'

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, {
    adapter: MongoDBAdapter({
      db: (await clientPromise).db(process.env.MONGODB_DB),
    }),
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
      GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
      EmailProvider({
        server: {
          host: process.env.EMAIL_SERVER_HOST,
          port: process.env.EMAIL_SERVER_PORT,
          auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD,
          },
        },
        from: process.env.EMAIL_FROM,
        async sendVerificationRequest({
          identifier: email,
          url,
          provider: { server, from },
        }) {
          const { host } = new URL(url)
          const transport = createTransport(server)
          await transport.sendMail({
            to: email,
            from,
            subject: `Sign in to ${host}`,
            text: textEmail({ url, host }),
            html: htmlEmail({ url, host, email }),
          })
        },
      }),
    ],
    callbacks: {
      async signIn({ user, account, profile }) {
        if (account.provider === 'google') {
          // first and last name attributes are available for GoogleProfile
          // -- https://github.com/nextauthjs/next-auth/blob/main/packages/next-auth/src/providers/google.ts
          user.name = {
            first: String(profile.given_name),
            last: String(profile.family_name),
          }
        }
        if (account.provider === 'github') {
          user.name = {
            first: null,
            last: null,
          }
        }
        return true
      },
      async session({ session, user }) {
        session.user.uid = user.uid
        session.user.gid = user.gid
        session.user.name = user.name
        session.user.qualified = user.qualified
        session.user.admin = user.admin
        session.user.checkedIn = user.checkedIn
        session.user.participation = user.participation
        session.user.applied_after_limit = user.applied_after_limit
        return session
      },
    },
    pages: {
      verifyRequest: '/verify-signin', // Used for check email page
      newUser: '/', // Redirect new users to apply (replace to '/' when apps close)
    },
    secret: process.env.SECRET,
  })
}
