// CounterContainer.jsx
import { useState } from "react";
import Button from "./Button";
import "../styles/CounterContainer.css";

const CounterContainer = () => {
  const [counter, setCounter] = useState(0);

  const actions = [
    { title: "Add points", action: () => setCounter(counter + 1) },
    { title: "Remove points", action: () => setCounter(counter - 1) },
    { title: "Reset points", action: () => setCounter(0) },
  ];

  return (
    <div className="counter-container">
      <h1>{counter}</h1>
      {actions.map((button, index) => (
        <Button key={index} title={button.title} action={button.action} />
      ))}
    </div>
  );
};

export default CounterContainer;
