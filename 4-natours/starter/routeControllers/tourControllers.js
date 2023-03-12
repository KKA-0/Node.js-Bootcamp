const fs = require('fs');

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
)

exports.checkID = (req, res, next, value) => {
    if(value*1 > tours.length) {
        return res.status(404).json({
            status: 'failed',
            message: 'Invalid ID',
        })
    }
    next();
}

exports.checkBody = (req, res, next) => {
    if(!req.body.name || !req.body.price){
    return res
            .status(400)
            .json({
                status: 'failed',
                message: 'Body should contain Name and Price'
            })
        }
            next();
}

exports.AllTours = (req, res) => {
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


exports.AddTours = (req, res) => {
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

exports.TourId = (req, res) => {
    console.log(req.params);
    const id = req.params.id * 1;
    const tour = tours.find(el => el.id === id);
    res
        .status(200)
        .json({
            status: 'success',
            data: {
                tour
            }
        });
}

exports.UpdateTour =  (req, res) => {
res
    .status(200)
    .json({
        status: 'success',
        data: {
            tour: 'updated boi'
        }
    })
}

exports.DeleteTours =  (req, res) => {
res
    .status(204)
    .json({
        status: 'status',
        data: null
});
}

