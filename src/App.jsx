import CounterContainer from "./Counter/components/CounterContainer";
import AutCounterContainer from "./AutomaticCounter/components/AutomaticCounterContainer";
const App = () => {
  return (
    <div className="app">
      <CounterContainer />
      <AutCounterContainer />
    </div>
  );
};

export default App;
