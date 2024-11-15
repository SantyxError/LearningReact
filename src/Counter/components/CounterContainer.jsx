import { useState } from "react";
import Button from "./CounterButton";
import "../../Counter/styles/CounterContainer.css";

const CounterContainer = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="counter-container">
      <h1>{counter}</h1>
      <Button
        title="Add points"
        action={() => setCounter(counter + 1)}
        styleClass="add-button"
      />
      <Button
        title="Remove points"
        action={() => setCounter(counter - 1)}
        styleClass="remove-button"
      />
      <Button
        title="Reset points"
        action={() => setCounter(0)}
        styleClass="reset-button"
      />
    </div>
  );
};

export default CounterContainer;
