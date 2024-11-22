import logo from './logo.svg';
import './App.css';
import Table from './Table';
import { useState } from 'react';

function App() {
  const [showTable, setShowTable] = useState(false);
  const handleClick = () => {
    setShowTable(!showTable);
  }
  return (
    <div className="App">
    <button onClick={handleClick}>
      {showTable ? "Hide" : "Show"} Table
    </button>
      <header className={showTable? "App-header-hidden App-header": "App-header App-header-show"}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className={showTable? "table": "table hide-table"}>
        <Table/>
      </div>
    </div>
  );
}

export default App;
