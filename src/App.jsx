import logo from "./logo.svg";
import "./App.css";

import FirstCalculator from "./components/FirstCalculator";
import SecondCalculator from "./components/SecondCalculator";

import "./styles/styles.css";

function App() {
  return (
    <>
      <div className="app-container">
        <img src="/inside-out-cleaning-calculator-2/inside-out-logo.jpeg" />
        <FirstCalculator />
      </div>
      <br />
      <div className="app-container">
        <SecondCalculator />
      </div>
    </>
  );
}

export default App;
