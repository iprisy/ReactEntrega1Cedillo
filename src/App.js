import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import ButtonComponent from './Components/ButtonComponent/ButtonComponent.jsx';
import Item from './Components/Item/Item.jsx';
import NavBar from './Components/NavBar/NavBar.jsx';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx';

function App () {
  return (
    <div className="App">
      <header className="App-header">
      
        <NavBar></NavBar>
        </header>
        <ItemListContainer mensaje="HolaMundo"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
    </div>
  );
}

export default App;
