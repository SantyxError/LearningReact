import "../styles/AutomaticCounterDisplay.css";

const AutomaticCounterDisplay = ({ content }) => {
  return (
    <div className="aut-counter-display">
      <h1>{content}</h1>
    </div>
  );
};

export default AutomaticCounterDisplay;
