import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Hero from "./Components/Hero";
import WatchShowcase from './Components/ShowcaseProducts';
import SingleWatchShowcase from './Components/SingleWatch';
import Wishlist from './Components/Wishlist';
import Cart from './Components/cart';
import UserDetailsForm from './Components/AccountDetails'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.css';

function AppContent() {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    
  };
  const handleKeyPress=(e)=>{
    if(e.key === 'Enter'){
      navigate('/shop');
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar handleSearchChange={handleSearchChange} handleKeyPress={handleKeyPress} />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path='/shop' element={<WatchShowcase searchText={searchText} />} />
        <Route path="/watch/:id" element={<SingleWatchShowcase />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/account' element={<UserDetailsForm/>}/>
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppContent />
      </Router>
    </Provider>
  );
}

export default App;
