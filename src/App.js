

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import menu from "./components/Menu";




function App() {
  return (
    
      <div className="container">
        <header className="row">
      <h1>Wristore</h1>  
      
           
      </header>
      <div   className="row">
        <div className='col'>

          */Menu
          
        </div>
      
      </div>
      
        <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}>

          </Route>
        </Routes>
        
        </BrowserRouter>
            
      
    </div>
  );
}

export default App;
