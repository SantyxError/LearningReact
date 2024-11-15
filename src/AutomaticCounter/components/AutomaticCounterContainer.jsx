import { useState, useEffect } from "react";
import AutomaticCounterButton from "./AutomaticCounterButton";
import AutomaticCounterDisplay from "./AutomaticCounterDisplay";
import "../../AutomaticCounter/styles/AutomaticCounterContainer.css";

const AutomaticCounterContainer = () => {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const toggleRunning = () => setIsRunning((prev) => !prev);
  const resetCounter = () => {
    setCounter(0);
    setIsRunning(false);
  };

  return (
    <div className="aut-counter-container">
      <AutomaticCounterDisplay content={counter} />
      <div className="button-container">
        <AutomaticCounterButton
          title={isRunning ? "Pause" : "Start"}
          action={toggleRunning}
        />
        <AutomaticCounterButton title="Reset" action={resetCounter} />
      </div>
    </div>
  );
};

export default AutomaticCounterContainer;
