import './App.css';
import Cart from './components/Cart/Cart';
import List from './components/List/List';
import logo1 from './images/logo1.png'
// import cartlogo from './images/cart.png';

function App() {
  return (
    <div className="App dark">
    <header className="App-header">
      <img src={logo1} alt="img" />
      <div className="right-header">
        <Cart />
      </div>
    </header>
    <div className="body-container">
      <List />
    </div>
  </div>
  );
}

export default App;
