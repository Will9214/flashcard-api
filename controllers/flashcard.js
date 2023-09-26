const Flashcard = require("../models/flashcard");

const getFlashcards = async function(req, res, next) {
  try {
    const flashcards = await Flashcard.find();

    res.send({ flashcards });
  } catch (error) {
    next(error);
  }
};

const addFlashcard = async function (req, res, next) {
  try {
    const { name, info } = req.body;

    const flashcard = new Flashcard({
      name: name,
      info: info,
    });

    await flashcard.save();

    res.status(200).send({ flashcard });
  } catch (error) {
    next(error);
  }
};

const getRandomFlashcard = async function (req, res, next) {
  try {
    const randomFlashcard = await Flashcard.aggregate([{$sample: { size: 1 }}]);
  
    res.send({ randomFlashcard });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getFlashcards,
  addFlashcard,
  getRandomFlashcard,
};