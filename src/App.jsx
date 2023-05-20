import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./component/Navbar";
import Home from './component/Home';
import Login from './component/Login'
import FindHostel from './pages/FindHostel';
import ListProperty from './pages/ListProperty';
import Contact from './pages/Contact';
import Signup from "./component/Signup";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/find-a-hostel" element={<FindHostel />} />
        {/* <Route path="/list-your-property" element={<ListProperty />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path ="/login" element={<Login />} />
        <Route path ="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App; 
