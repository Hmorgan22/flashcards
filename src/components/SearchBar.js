import { useState } from "react";

export default function SearchBar({ handleCards }) {
  const [q, setQ] = useState("");
  const [a, setA] = useState("");
  const id = Date.now();

  function handleInput(e) {
    e.preventDefault();
    if (!q || !a) return;

    const newCard = { id: id, question: q, answer: a };
    handleCards(newCard);

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
