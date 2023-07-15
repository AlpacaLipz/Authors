const mongoose = require('mongoose');

const AuthorsSchema = mongoose.Schema(
  {
    name:{
        type: String,
        required: [true, 'name of the author is required or things will happen'],
        minlength: [3, 'name of the author must be longer then 3 characters' ],
    }
  },
  { timestamps: true }
);

const Author = mongoose.model('Author', AuthorsSchema); //name of collection goes here

module.exports = Author;