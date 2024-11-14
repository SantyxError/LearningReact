import "../styles/Button.css";

const Button = ({ title = "default-button", action }) => (
  <button className="button" onClick={action}>
    {title}
  </button>
);

export default Button;
