import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <SearchBar />
      <FlashCards />
    </div>
  );
}

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

//creates card and answer component
function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  //triggers the update on the selected card
  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          className={question.id === selectedId ? "selected" : ""}
          onClick={() => handleClick(question.id)}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}

function SearchBar() {
  const [q, setQ] = useState("");
  const [a, setA] = useState("");
  const id = Date.now();

  function handleInput(e) {
    e.preventDefault();
    if (!q || !a) return;

    const newCard = { id: id, question: q, answer: a };

    setA("");
    setQ("");
  }

  return (
    <form onSubmit={handleInput}>
      <input
        type="text"
        placeholder="Question"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="answer"
        value={a}
        onChange={(e) => setA(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
