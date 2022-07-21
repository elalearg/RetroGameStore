
import './App.css';
import ItemList from './components/ItemListContainer';
import NavBar from './components/NavBar'

function App() {
  return (
    
    <div className="App">
    <NavBar/>
    <ItemList></ItemList>
      <header className="App-header">
       <h1>Retro Game Store</h1>
       
       <a href='https://github.com/elalearg/RetroGameStore'> Github</a>
      </header>
    </div>
  );
}

export default App;
