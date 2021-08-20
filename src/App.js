import logo from './logo.svg';
import './App.css';

// example to include logo file
// return anchor
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="tel:999-555-0095"
          target="_blank"
          rel="noopener noreferrer"
        >
          Call Link
        </a>
      </header>
    </div>
  );
}

export default App;
