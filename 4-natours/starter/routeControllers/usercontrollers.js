
const fs = require('fs');

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
)


exports.allUsers = (req, res) => {
    res
        .status(500)
        .json({status: 'Fail', Message: 'Route Not Yet Defined!'})
}

exports.addUsers = (req, res) => {
    res
        .status(500)
        .json({status: 'Fail', Message: 'Route Not Yet Defined!'})
}

exports.userId = (req, res) => {
    res
        .status(500)
        .json({status: 'Fail', Message: 'Route Not Yet Defined!'})
}
exports.updateUsers = (req, res) => {
    res
        .status(500)
        .json({status: 'Fail', Message: 'Route Not Yet Defined!'})
}
exports.deleteUsers = (req, res) => {
    res
        .status(500)
        .json({status: 'Fail', Message: 'Route Not Yet Defined!'})
}