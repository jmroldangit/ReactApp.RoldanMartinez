
import './App.css';
import NavBar from './components';


function App() {
  console.log(window.location)
    return <Navbar />

    
} 


function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        
        <img src={images/iconclock} className="App-logo" alt="logo" />
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
    </div>
  );
}

export default App;
