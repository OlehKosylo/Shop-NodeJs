const nodemailer = require('nodemailer');

const {ErrorHandler} = require('../../errors');
const {
    emailWords: {SERVICE, USER, PASS, FROM},
    statusesCode: {BAD_REQUEST}
} = require('../../constants');

module.exports = (email, thema, message) => {

    const transporter = nodemailer.createTransport({
        service: process.env.SERVICE || SERVICE,
        auth: {
            user: process.env.USER || USER,
            pass: process.env.PASS || PASS
        }
    });

    const mailOptions = {
        from: process.env.FROM || FROM,
        to: email,
        subject: thema,
        text: message
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            throw new ErrorHandler(error.message, BAD_REQUEST, 4000);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

};
