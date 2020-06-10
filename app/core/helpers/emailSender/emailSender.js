const {appSettings} = require('../../constants');

const nodemailer = require(appSettings.NODE_MAILER);
const EmailTemplates = require(appSettings.EMAIL_TEMPLATES);
const path = require(appSettings.PATH);

const {ErrorHandler} = require('../../errors');
const {
    emailWords: {SERVICE, USER, PASS, FROM},
    statusesCode: {BAD_REQUEST}
} = require('../../constants');
const htmlTemplates = require('../../email-templates');


const transporter = nodemailer.createTransport({
    service: process.env.SERVICE || SERVICE,
    auth: {
        user: process.env.USER || USER,
        pass: process.env.PASS || PASS
    }
});

const emailTemplates = new EmailTemplates({
    message: null,
    views: {
        root: path.join(process.cwd(), 'app', 'core', 'email-templates', 'templates'),
        options: {
            extension: 'ejs'
        }
    },
    juiceResources: {
        preserveImportant: true,
        webResources: {
            relativeTo: path.join(process.cwd(), 'app', 'core', 'email-templates', 'css')
        }
    }
});


module.exports = async (userMail, action, context) => {
        const template = htmlTemplates[action];
        const html = await emailTemplates.render(template.templateFileName, {...context});

        const mailOptions = {
            from: process.env.FROM || FROM,
            to: userMail,
            subject: template.subject,
            html
        };

       return transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                throw new ErrorHandler(error.message, BAD_REQUEST, 4000);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
};
