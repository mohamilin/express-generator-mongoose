const {School} = require('../../models');

module.exports = {
    getAllSchool: (req, res) => {
        School.find()
        .then(result => {
            res.status(200).json({
                message: 'oke',
                result
            })
        })
        .catch(err => {
            res.status(404).json('unble');
        })
    }
}