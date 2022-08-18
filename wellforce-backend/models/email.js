const db = require("../db");

var cron = require("node-cron");
class SendEmails {
  static async send_Email(user_id) {
    const result1 = await db.query(
      //point of query is to get user object by the liked user id
      `
          SELECT *
          FROM  favorites
          LEFT JOIN users 
          ON favorites.liked_id = users.id where user_id = $1;    
      `,
      [user_id]
    );
    const matchedUsers = result1.rows;
    console.log("Here are the matched Users",matchedUsers)
    cron.schedule(`* * * * *`, () => {
      const sgMail = require("@sendgrid/mail");
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
        to: "abdirahman.2017792@gmail.com", // Change to your recipient
        from: "wellnessdemo48@gmail.com", // Change to your verified sender
        subject: "Liked Users and Super Liked Users",

        html: `<html>
        <body>
            <p> Hello! </p>
            <p> This is the users that you have liked and also the users that have liked you.
            They are: ${matchedUsers}.
            </p>
            </body>
        </html>`,
      };
      sgMail
        .send(msg)
        .then(() => {
          console.log("Email sent");
        })
        .catch((error) => {
          console.error(error);
        });
    });
  }
}

module.exports = SendEmails;
