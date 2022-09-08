import logo from './logo.svg';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';




function App() {
  return (
    <div className="App">
            
      <header className="App-header">
      <h1>Wristore</h1>  
      <NavBar />
      <ItemListContainer />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>Wristore</code> and save to reload.
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
