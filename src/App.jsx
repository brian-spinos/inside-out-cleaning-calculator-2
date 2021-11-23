import logo from './logo.svg';
import './App.css';

import FirstCalculator from './components/FirstCalculator';
import SecondCalculator from './components/SecondCalculator';

import './styles/styles.css';


function App() {
  return (
    <div className="app-container">
      <img src="/inside-out-logo.jpeg" />
      <FirstCalculator />
      <hr />
      <SecondCalculator />
    </div>
  );
}

export default App;
