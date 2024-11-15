import "../../AutomaticCounter/styles/AutomaticCounterButton.css";

const AutomaticCounterButton = ({ title, action, disabled = false }) => {
  return (
    <button className="aut-counter-button" onClick={action} disabled={disabled}>
      {title}
    </button>
  );
};

export default AutomaticCounterButton;
