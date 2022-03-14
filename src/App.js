import './App.css';
import { Vegetable } from './Components/Vegetable';
import { Wishlist } from './Components/Wishlist';

function App() {
  return (
    <div className="App">
    <Wishlist/>
    <Vegetable/>
    </div>
  );
}

export default App;
