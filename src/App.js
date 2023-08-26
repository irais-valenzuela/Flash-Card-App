import "./styles.css";
import { useState } from "react";

const wordsAndPhrases = [
  { word: "Computer", translation: "Computadora" },
  { word: "Cellphone", translation: "Telephono Cellular" },
  { phrase: "See you later!", translation: "Al rato nos miramos!" },
  { word: "Cook", translation: "Cocinar" },
  { phrase: "Have a great day!", translation: "Que tengas un buen dia!" },
  { phrase: "How was your day?", translation: "Como fue tu dia?" },
  { word: "Fan", translation: "Ventilador" },
  { word: "Tree", translation: "Arbol" },
  { word: "Desk Lamp", translation: "Lampara de excritorio" },
  { phrase: "Good morning!", translation: "Buenos Dias" }
];

export default function App() {
  const [contentNumber, setContentNumber] = useState(0);
  const [showingWord, setShowingWord] = useState(true);

  const handleNext = () => {
    if (contentNumber === wordsAndPhrases.length) {
      setContentNumber(0);
    } else {
      setContentNumber(contentNumber + 1);
      setShowingWord(true);
    }
  };

  const showTranslation = () => {
    setShowingWord(!showingWord);
  };

  const handleReset = () => setContentNumber(0);

  return (
    <div className="App">
      <h1>English to Spanish Flashcards</h1>
      <div className="card">
        <h1>
          {contentNumber < wordsAndPhrases.length
            ? showingWord
              ? wordsAndPhrases[contentNumber].hasOwnProperty("word")
                ? `English Word ${contentNumber + 1}: "${
                    wordsAndPhrases[contentNumber].word
                  }"`
                : `English Phrase ${contentNumber + 1}: "${
                    wordsAndPhrases[contentNumber].phrase
                  }"`
              : `Spanish Translation: "${wordsAndPhrases[contentNumber].translation}"`
            : "Congrats, you finished the set!"}
        </h1>
        <p onClick={showTranslation}>
          {contentNumber < wordsAndPhrases.length
            ? showingWord
              ? "Show Spanish Translation"
              : "Show English Word"
            : ""}
        </p>
      </div>
      {contentNumber === 10 ? (
        <button className="reset-button" onClick={handleReset}>
          Reset
        </button>
      ) : (
        <button className="next-button" onClick={handleNext}>
          Next
        </button>
      )}
    </div>
  );
}
