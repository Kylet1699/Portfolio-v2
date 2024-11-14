import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>This is Ubuntu font in #cacaca</h1>
      <h2>This is also Ubuntu font in #cacaca</h2>
      <h3>This is DM Mono font in #cacaca</h3>
      <p>This is DM Mono font in #8a8a8a</p>

      {/* You can also use the classes directly */}
      <div className="text-green font-ubuntu">Custom styled text</div>
      <div className="text-body font-dm-mono">Custom styled text</div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
