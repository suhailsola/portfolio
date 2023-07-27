const nodemailer = require("nodemailer");
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/pages/index.html"));
});

app.get("/thank-you", (req, res) => {
  res.sendFile(path.join(__dirname, "views/pages/thank-you.html"));
});

app.get("/error", (req, res) => {
  res.send("Error");
});

// download resume
app.get("/download", function (req, res) {
  console.log("Download resume");

  // Download function provided by express
  res.download(path.join(__dirname, "/files/resume.pdf"), function (err) {
    if (err) {
      console.log(err);
    }
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

app.post("/contact", (req, res) => {
  // get form data
  const formData = req.body;
  // create new transport
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "2f2932c8cfd469",
      pass: "22cc2feb6602fd",
    },
  });

  // create async func to send new email
  async function sendEmail() {
    // send mail with defined transport object
    const info = await transport.sendMail({
      from: '"suhailsola@hotmail.com', // sender address
      to: formData.email, // list of receivers
      subject: `Welcome ${formData.name}`, // Subject line
      text: JSON.stringify(formData), // plain text body
      html: `<p>${JSON.stringify(formData)}</p>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
  }

  sendEmail()
    .then(function () {
      res.redirect("/thank-you");
    })
    .catch(function () {
      res.redirect("/error");
    });
});
