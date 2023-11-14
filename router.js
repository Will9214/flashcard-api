const Flashcard = require("./controllers/flashcard");
const Health = require("./controllers/health");

module.exports = function(app) {

  app.get("/api/getFlashcards", Flashcard.getFlashcards)
  app.post("/api/addFlashcard", Flashcard.addFlashcard)
  
  app.get("/api/getRandomFlashcard", Flashcard.getRandomFlashcard)

  // health
  app.get("/api/health", Health.getHealth)
};