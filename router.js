const Flashcard = require("./controllers/flashcard");

module.exports = function(app) {

  app.get("/api/getFlashcards", Flashcard.getFlashcards)
  app.post("/api/addFlashcard", Flashcard.addFlashcard)
  
  app.get("/api/getRandomFlashcard", Flashcard.getRandomFlashcard)
};