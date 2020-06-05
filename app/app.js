const port = process.env.PORT || 3333;
const bodyParser = require('body-parser');
const engines = require('consolidate');

let express = require('express');
const app = express();

app.engine('ejs', engines.ejs);
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const db = require('./core/dataBase').getInstance();
db.setModels();


const cors = require('cors');
app.use(cors({origin: true, credentials: true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(require('body-parser').urlencoded({
    extended: true,
}));

const {authRouter} = require('./core/routers');
app.use('/auth', authRouter);


app.use('*', (err, req, res, next) => {
    let message = err.message;

    if (err.parent) {
        message = err.parent.sqlMessage;
    }

    res
        .status(err.status || 404)
        .json({
            message: message || 'Page not found',
            code: err.customErrorCode
        })
});


app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
});


process.on("unhandledRejection", reason => {
    //Fake write in logger
    console.log("---------------------------------------------------------");
    console.log("Possibly unhandled rejection happened", reason);
    console.log("---------------------------------------------------------");

    process.exit(0);
});
