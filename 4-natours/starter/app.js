const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const morgan = require('morgan');

//* Middlewares-start

app.use(express.json());
app.use(morgan('dev'));
app.use((req, res, next) =>
    {
    console.log('Hello from middleware 🙋‍♀️');
    next(); 
});

//* Middlewares-end
//* Reading Files-start

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
)

//* Reading Files-end
// app.get('/', (req, res) => {
//     res
//         .status(200)
//         .json({message:'hello from the server', app: 'project'});
// })
// app.post('/', (req, res) => {
//     res
//         .status(200)
//         .json({message: 'posting'});
// })

//* all the routing functions-start
const AllTours = (req, res) => {
        res
            .status(200)
            .json({
                status: 'success',
                result: tours.length,
                data: {
                    tours   
                }
            });
    }


const AddTours = (req, res) => {
        res
            .status(200)
            const newId = tours[tours.length - 1].id + 1;
            const newTour = Object.assign({id: newId}, req.body);
            tours.push(newTour);
            fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours)
            ,err => {
                res
                    .status(201)
                    .json({
                        status: 'success',
                        data:{
                            tour: newTour
                        }
                    });
            }
            ) 
    }

const TourId = (req, res) => {
    console.log(req.params);

    
    const id = req.params.id * 1;
    const tour = tours.find(el => el.id === id);
    if(!tour){
        return res.status(404).json({status: 'fail', message: 'invalid ID'})
    }
    res.status(200).json({
            status: 'success',
            data: {
                tour
            }
        });
}

const UpdateTour =  (req, res) => {
    if(req.params.id * 1 > tours.length){
        return res.status(404).json({status: 'fail', message: 'invalid ID'})
    }
    res
        .status(200)
        .json({
            status: 'success',
            data: {
                tour: 'updated boi'
            }
        })
}

const DeleteTours =  (req, res) => {
    if(req.params.id * 1 > tours.length){
        return res.status(404).json({status: 'fail', message: 'invalid ID'})
    }
    res
        .status(204)
        .json({
            status: 'status',
            data: null
});
}

const allUsers = (req, res) => {
    res
        .status(500)
        .json({status: 'Fail', Message: 'Route Not Yet Defined!'})
}

const addUsers = (req, res) => {
    res
        .status(500)
        .json({status: 'Fail', Message: 'Route Not Yet Defined!'})
}

const userId = (req, res) => {
    res
        .status(500)
        .json({status: 'Fail', Message: 'Route Not Yet Defined!'})
}
const updateUsers = (req, res) => {
    res
        .status(500)
        .json({status: 'Fail', Message: 'Route Not Yet Defined!'})
}
const deleteUsers = (req, res) => {
    res
        .status(500)
        .json({status: 'Fail', Message: 'Route Not Yet Defined!'})
}
//* all the routing functions-end

//* All the Requests-start
// app.get('/api/v1/tours', AllTours)
// app.post('/api/v1/tours', AddTours)
// app.get('/api/v1/tours/:id' , TourId)
// app.patch('/api/v1/tours/:id', UpdateTour)
// app.delete('/api/v1/tours/:id', DeleteTours);

app.route('/api/v1/tours')
    .get(AllTours)
    .post(AddTours)
app.route('/api/v1/tours/:id')
    .get(TourId)
    .patch(UpdateTour)
    .delete(DeleteTours)
app.route('/api/v1/users')
    .get(allUsers)
    .post(addUsers)
app.route('/api/v1/users/:id')
    .get(userId)
    .patch(updateUsers)
    .delete(deleteUsers)

//* All the Requests-end


app.listen(port, () => {
    console.log('baby ko base pasand hai');
})
