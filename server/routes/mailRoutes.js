const Mailer = require("../services/Mailer");
const emailTemplate = require("../services/emailTemplates/thanks");

module.exports = app => {
  app.post("/api/messages", async (req, res) => {
    const { recipients } = req.body;

    const msg = {
      recipients: recipients.split(",").map(email => ({ email: email.trim() })),
      dateSent: Date.now()
    };

    const mailer = new Mailer(msg, emailTemplate(msg));

    try {
      await mailer.send();
      await message.save();
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
