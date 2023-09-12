const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const FlashcardSchema = new Schema({
  name: String,
  info: String
});

module.exports = mongoose.model("flashcard", FlashcardSchema);