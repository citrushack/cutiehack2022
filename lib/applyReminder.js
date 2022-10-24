const sendApplyReminderEmail = async ({ email }) => {
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.SENDGRID_REMINDER_API_KEY);
  const escapedEmail = `${email.replace(/\./g, "&#8203;.")}`;
  const email_content = `
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
                       src="https://i.imgur.com/HW5R5QW.png"/>
                       <br/>
                       <br/>
                       <p style="text-align:left">
                          Hello!
                       </p>
                       <p style="text-align:left">
                          It appears as though you have signed into Cutie Hack's website but haven't submitted an application to participate in the Hackathon.
                       </p>
                       <p style="text-align:left">
                          Consider applying for Cutie Hack! You can do so <a href="https://cutiehack.io">at our website</a>
                       </p>
                       <p style="text-align:left">
                          The Cutie Hack Team
                       </p>
                       <br/>
                       <hr/>
                       <br/>
                       <div class="footer">
                          <p>
                             Head back to our website at <a href="https://cutiehack.io">https://cutiehack.io</a>
                         </p>
                          <p>
                             Contact us whenever at <a href="mailto:citrushack@gmail.com">citrushack@gmail.com</a>
                          </p>
                          <a href="https://discord.gg/jduNFuwKuk"><img class="social" src="http://cdn.mcauto-images-production.sendgrid.net/cbb380edd52c8d3a/18518ec5-9e99-4737-8748-aaf321c86d93/24x24.png"/></a>
                          <a href="https://www.facebook.com/cutiehack/"><img class="social" src="http://cdn.mcauto-images-production.sendgrid.net/cbb380edd52c8d3a/6b62002f-f863-4ca1-9f6c-c11ee2cef453/24x24.png" /></a>
                          <a href="https://www.instagram.com/cutiehack_ucr/?hl=en"><img class="social" src="http://cdn.mcauto-images-production.sendgrid.net/cbb380edd52c8d3a/5bc8e9f4-455c-4f40-b6aa-cc552e812c04/24x24.png" /></a>
                          <a href="https://www.linkedin.com/company/citrus-hack"><img class="social" src="http://cdn.mcauto-images-production.sendgrid.net/cbb380edd52c8d3a/0061c602-b7f9-4a2c-a015-66c3aa221f33/24x24.png" /></a>
                       </div>
                    </div>
                 </td>
                 <td align="center">
                 </td>
              </tr>
           </table>
        </body>
      </html>
        `;
  const msg = {
    to: email,
    from: "citrushack@gmail.com",
    subject: "Cutie Hack: Apply Now!",
    html: email_content,
  };

  sgMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);
    })
    .catch((error) => {
      console.error(error);
    });
};

export { sendApplyReminderEmail };
