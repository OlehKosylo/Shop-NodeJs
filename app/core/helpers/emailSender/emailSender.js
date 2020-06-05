const nodemailer = require('nodemailer');

const {ErrorHandler} = require('../../errors');
const {statusesCode: {BAD_REQUEST}} = require('../../constants');

module.exports = (email, thema, message) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ottonewslettersite@gmail.com',
            pass: 'jhpqtgqmnrcypuxj'
        }
    });

    const mailOptions = {
        from: 'ottonewslettersite@gmail.com',
        to: email,
        subject: thema,
        text: message
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            throw new ErrorHandler(error.message, BAD_REQUEST, 4000);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

};
