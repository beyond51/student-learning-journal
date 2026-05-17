const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "keshav3302@gmail.com",
    pass: "dqjcjmtqggfamxzh",
  },
});
const sendEmailto = async (to, subject, html) => {
  console.log(process.env.USER_EMAIL);
  let options = {
    from: "keshav3302gmail",
    to,
    subject,
    html,
  };
  return await transporter.sendMail(options);
};

module.exports = sendEmailto;
