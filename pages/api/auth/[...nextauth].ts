import nodemailer from 'nodemailer'
import type { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from 'lib/mongodb'

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
          const transport = nodemailer.createTransport(server)
          await transport.sendMail({
            to: email,
            from,
            subject: `Sign in to ${host}`,
            text: text({ url, host }),
            html: html({ url, host, email }),
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

function html({ url, host, email }) {
  const escapedEmail = `${email.replace(/\./g, '&#8203;.')}`
  const escapedHost = `${host.replace(/\./g, '&#8203;.')}`
  return `
  <html>
  <head>
     <style>
        @import url('https://fonts.googleapis.com/css?family=3DRubik');
        .container {
        max-width: 512px;
        }
        .footer {
        text-align: center;
        font-size: 14px;
        }
        .social {
        background: orange;
        width: 24px;
        height: 24px;
        margin: 0 0.2rem;
        padding: 0.5rem;
        border-radius: 10rem;
        }
        p {
        padding: 0 1rem;
        font-family: 'Rubik', sans-serif;
        }
        svg {
        padding: 0.5rem;
        border-radius: 10rem;
        background: orange;
        }
        a {
        color: orange;
        }
     </style>
  </head>
  <body>
     <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
           <td align="center">
              <div class="container">
                 <img
                 style="object-fit: contain; width: 100%;"
                 src="http://cdn.mcauto-images-production.sendgrid.net/cbb380edd52c8d3a/365ccc75-f697-4164-a1d8-c675caf2925d/1600x400.png"/>
                 <br/>
                 <br/>
                 <p style="text-align:left">
                    Hey,
                 </p>
                 <p style="text-align:left">
                    You are receving this email because someone has tried to login to ${host} with your email addresss.
                 </p>
                 <p style="text-align:left">
                   If you are trying to login to ${host}, click <a href="${url}">here</a> to sign in.
                   If you did not attempt to sign-in to this site, you can ignore this email.
                 </p>
                 <p style="text-align:left">
                    The Citrus Hack Team
                 </p>
                 <br/>
                 <hr/>
                 <br/>
                 <div class="footer">
                    <p>
                       Head back to our website at <a href="${host}">${host}</a>
                    </p>
                    <p>
                       Contact us, whenever at <a href="mailto:citrushack@gmail.com">citrushack@gmail.com</a>
                    </p>
                    <a href="http://localhost:3000"><img class="social" src="http://cdn.mcauto-images-production.sendgrid.net/cbb380edd52c8d3a/18518ec5-9e99-4737-8748-aaf321c86d93/24x24.png"/></a>
                    <a href="http://localhost:3000"><img class="social" src="http://cdn.mcauto-images-production.sendgrid.net/cbb380edd52c8d3a/6b62002f-f863-4ca1-9f6c-c11ee2cef453/24x24.png" /></a>
                    <a href="http://locahost:3000"><img class="social" src="http://cdn.mcauto-images-production.sendgrid.net/cbb380edd52c8d3a/5bc8e9f4-455c-4f40-b6aa-cc552e812c04/24x24.png" /></a>
                    <a href="http://localhost:3000"><img class="social" src="http://cdn.mcauto-images-production.sendgrid.net/cbb380edd52c8d3a/0061c602-b7f9-4a2c-a015-66c3aa221f33/24x24.png" /></a>
                 </div>
              </div>
           </td>
           <td align="center">
           </td>
        </tr>
     </table>
  </body>
</html>
  `
}

// Fallback for non-HTML email clients
function text({ url, host }) {
  return `Sign in to ${host}\n${url}\n\n`
}
