const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.PASS,
  },
});
const sendEmailto = async (to, subject, html) => {
  let options = {
    from: process.env.USER_EMAIL,
    to,
    subject,
    html,
  };
  return await transporter.sendMail(options);
};

module.exports = sendEmailto;
