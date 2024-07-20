import logo from './logo.svg';
import './App.css';
import CustomNavbar from './components/CustomNavbar/CustomNavbar';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Alumni from './components/Alumni/Alumni';
function App() {
  return (
    <div className="App">
      <CustomNavbar/>
      <BrowserRouter>
        <Routes>
        <Route path="home" element={<h1>Home</h1>}/>
        <Route path="rush" element={<h1>Rush</h1>}/>
        <Route path="social" element={<h1>Social</h1>}/>
        <Route path="alumni" element={<Alumni/>}/>
        <Route path="academics" element={<h1>Academics</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
