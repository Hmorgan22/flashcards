import { useState } from "react";
import SearchBar from "./SearchBar.js";
import "../index.css";
import FlashCards from "./FlashCards.js";

let questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

//randomly shuffles the order of the questions so they are different each time
function shuffle(arr) {
  const newArr = [];
  const used = [];

  let i = 0;
  while (i < arr.length) {
    const randomNum = Math.floor(Math.random() * arr.length);
    if (!used.includes(randomNum)) {
      newArr.push(arr[randomNum]);
      used.push(randomNum);
      i++;
    }
  }
  return newArr;
}
questions = shuffle(questions);

export default function App() {
  const [cards, setCards] = useState([...questions]);

  function handleCards(card) {
    setCards((cards) => [...cards, card]);
  }

  return (
    <div className="App">
      <SearchBar handleCards={handleCards} />
      <FlashCards cards={cards} />
    </div>
  );
}
