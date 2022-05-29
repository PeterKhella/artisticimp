// import { Home } from '@material-ui/icons';
import React from 'react';
import './App.css';
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.js';
import Footer from './Footer/Footer';
// import Header from "./Header";
// import Products from './Products/Products';

function App(){
  return (
    <div className="App"> 
      <>
      <Navbar />
      <Home />
      </>
      {/* <Router>
        <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/Footer' element={<Footer />} />
        </Routes>
      </Router> */}
      <Footer />
    </div>

  );
}

export default App;
