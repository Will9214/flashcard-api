const Flashcard = require("../models/flashcard");

const getFlashcards = async function (req, res, next) {
  const flashcards = await Flashcard.find();

  res.send({ flashcards });
};

const addFlashcard = async function (req, res, next) {
  const { name, info } = req.body;

  const flashcard = new Flashcard({
    name: name,
    info: info,
  });

  await flashcard.save();

  res.status(200).send({ flashcard });
};

const getRandomFlashcard = async function (req, res, next) {
  const randomFlashcard = await Flashcard.aggregate([{$sample: { size: 1 }}]);

  res.send({ randomFlashcard });
}

module.exports = {
  getFlashcards,
  addFlashcard,
  getRandomFlashcard,
};