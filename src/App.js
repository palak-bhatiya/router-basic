import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Button from './Button';
// import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="button" element={<Button/>}/>
      </Routes>
    </div>
  );
}

export default App;
