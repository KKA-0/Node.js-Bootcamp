const dotenv = require('dotenv');
if(process.env.NODE_ENV === 'development'){
    dotenv.config({path: './config.env'});
}
console.log(process.env);
const app = require('./app')
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log('Vagita: It is Over',port );
})
