const dotenv = require('dotenv');
const mongoose = require('mongoose');

if(process.env.NODE_ENV === 'development'){
    dotenv.config({path: './config.env'});
}
const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log("DataBase Connected🎉..."));

const app = require('./app')
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log('Vagita: It is Over',port );
})
