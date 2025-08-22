import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      <Home />
      {/* <Products /> */}
    </div>
  );
}

export default App;
