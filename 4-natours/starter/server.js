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

const tourSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'A tour must have a name'],
            unique: true
        },
        rating: {
            type: Number,
            default: 4.5
        },
        price: {
            type: Number,
            required: [true, 'A tour must have a price']
        }

    }
);

const Tour = mongoose.model('Tour', tourSchema);

const app = require('./app')
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log('Vagita: It is Over',port );
})
