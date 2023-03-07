
import './App.css';
import Home from './Home';
import Header from './Header';
import Checkout from './Checkout';
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (  
        <div className="App">
        <Router>
        <Header />
            <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route path="/checkout" element={<Checkout />}/>
              <Route path="/login" element={<Login />}/>
            </Routes>
            </Router>
        </div>
  );
}

export default App;
