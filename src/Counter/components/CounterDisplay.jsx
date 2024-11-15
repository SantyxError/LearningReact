import "../styles/CounterDisplay.css";

export const Display = ({ content = "no-content" }) => (
  <div className="display">
    <h1>{content}</h1>
  </div>
);
