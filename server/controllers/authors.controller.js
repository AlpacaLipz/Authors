const Author = require('../models/authors.model.js');

module.exports.getAll = (req, response) => {
    Author.find()
        .then((authors) => {
            response.json({ authorList : authors });
        })
        .catch((error) => {
            response.status(400).json({ message: 'Wrong Kid Died', error });
        });
};

module.exports.getOne = (req, response) => {
    Author.findOne({ _id: req.params.id })
        .then((author) => {
            response.json({ author });
        })
        .catch((error) => {
            response.status(400).json({ message: 'Wrong Kid Died', error });
        });
};


module.exports.create = (req, response) => {
    Author.create(req.body)
        .then((author) => {
            response.json({ author });
        })
        .catch((error) => {
            response.status(400).json({ message: 'Wrong Kid Died', error });
        });
};

module.exports.update = (req, response) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {
        new: true,
        runValidators: true,

    })
        .then((author) => {
            response.json({ author });
        })
        .catch((error) => {
            response.status(400).json({ message: 'Wrong Kid Died', error });
        });
};
module.exports.delete = (req, res) => {
    console.log(req.params.id)
    Author.deleteOne({ _id: req.params.id })
        .then((responses) => {
            res.json({ responses });
        })
        .catch((error) => {
            res.status(400).json({ message: 'Wrong Kid Died', error: error });
        });
};