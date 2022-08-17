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
    cron.schedule(`* * * * *`, () => {
      const sgMail = require("@sendgrid/mail");
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
        to: "abdirahman.2017792@gmail.com", // Change to your recipient
        from: "abdirahman.2017792@gmail.com", // Change to your verified sender
        subject: "Super liked Users",
        text: "and easy to do anywhere, even with Node.js",
        html: `<strong>${matchedUsers}</strong>`,
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
