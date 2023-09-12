const Flashcard = require("../models/flashcard");

const getFlashcards = async function (req, res, next) {
  const flashcards = await Flashcard.find();

  res.send({ flashcards });
};

const addFlashcard = async function (req, res, next) {

};

module.exports = {
  getFlashcards,
  addFlashcard,
};