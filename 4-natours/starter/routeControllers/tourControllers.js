const Tour = require('../models/tourModel')

exports.AllTours = async (req, res) => {
    const tours = await Tour.find();
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


exports.AddTours = async (req, res) => {
        try{
            const newTour = await Tour.create(req.body);
            res
                .status(201)
                .json({
                    status: 'success',
                    data:{
                        tour: newTour
                    }
                });
        }
        catch(err){
            res
            .status(400)
            .json(
                {
                    status: 'Fail',
                    message: err
                }
            )
            
        }
};

exports.TourId = async (req, res) => {

    try{
        const tour = await Tour.findById(req.params.id);
        res
        .status(200)
        .json({
            status: 'success',
            data: {
                tour
            }
        });
    }
    catch(err){
        res
        .status(400)
        .json(
            {
                status: 'Fail',
                message: err
            }
        )
        
    }
}

exports.UpdateTour =  async (req, res) => {
    try{
        const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res
        .status(200)
        .json({
            status: 'success',
            data: {
                tour
            }
        })

    }catch(err){
        res
    .status(400)
    .json({
        status: 'fail',
        data: {
            tour: 'problem'
        }
    })
    }
}

exports.DeleteTours = async (req, res) => {
    try{
        await Tour.findByIdAndDelete(req.params.id);
        res
        .status(200)
        .json({
            message: 'Deleted Successfully'
        });
    }catch{
        res
        .status(400)
        .json({
            status: 'status',
            data: null
        });
    }

}

