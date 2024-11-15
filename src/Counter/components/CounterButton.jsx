import "../styles/CounterButton.css";

const Button = ({ title = "default-button", action, styleClass }) => {
  return (
    <button onClick={action} className={`button ${styleClass}`}>
      {title}
    </button>
  );
};

export default Button;
