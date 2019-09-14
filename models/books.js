var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new bookSchema object
// This is similar to a Sequelize model
var bookSchema = new Schema({
  
  title: String,
  authors: String,
  description: String,
  image: String,
  link: String
});

// This creates our model from the above schema, using mongoose's model method
var Book = mongoose.model("Book", bookSchema);

// Export the Book model
module.exports = Book;
