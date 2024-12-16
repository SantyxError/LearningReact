import { useState, useEffect } from "react";

const UseEffectComponent = () => {
  const [count, setCount] = useState(0);

  const saludo = () => {
    alert("Hola");
  };

  useEffect(() => {
    saludo();
  }, []);

  return (
    <div>
      <p>Has hecho click {count} veces</p>
      <button onClick={() => setCount(count + 1)}> Haz click </button>
      <button onClick={saludo}>Saluda</button>
    </div>
  );
};

export default UseEffectComponent;
