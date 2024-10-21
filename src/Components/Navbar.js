import React, { useState } from "react";
import { Clock, Search, ShoppingCart, User, Heart } from "lucide-react";
import { useNavigate, Link } from 'react-router-dom';

export default function Navbar({ handleSearchChange,handleKeyPress }) {
  const navigate = useNavigate();
  const [myAccount, setMyAccount] = useState(false);

  return (
    <nav className="bg-white border-b fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/"  className="flex items-center space-x-2 flex-shrink-0">
              <Clock className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-primary">Wristly</span>
            </Link>
            <div className="hidden md:ml-6 md:flex">
              <Link to='/' className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-[#F4F4F5] rounded">Home</Link>
              <Link to='/shop' className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-[#F4F4F5] rounded">Shop</Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  type="text"
                  placeholder="Search watches..."
                  onChange={handleSearchChange}
                  onKeyPress={handleKeyPress}
                  className="block w-full pl-10 pr-3 py-2 border rounded-md leading-5 bg-background placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
            </div>
            <div className="ml-4 flex items-center md:ml-6 relative">
              <button className="ml-2 p-2 hover:bg-[#F4F4F5] rounded" onClick={() => navigate('/wishlist')} aria-label="Go to wishlist">
                <Heart className="h-5 w-5" />
              </button>
              <Link to="/cart" aria-label="Go to cart">
                <button className="ml-2 p-2 hover:bg-[#F4F4F5] rounded">
                  <ShoppingCart className="h-5 w-5" />
                </button>
              </Link>
              <button
                onClick={() => setMyAccount(!myAccount)}
                className="ml-2 p-2 relative hover:bg-[#F4F4F5] rounded"
                aria-label="User account"
              >
                <User className="h-5 w-5" />
              </button>

              {myAccount && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white border rounded shadow-lg py-2 z-20 transition-transform transform origin-top-right">
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:bg-gray-100 hover:text-foreground "
                    onClick={() => navigate('/account')}
                  >
                    My Account
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:bg-gray-100 hover:text-foreground"
                    onClick={() => navigate('/wishlist')}
                  >
                    My Wishlist
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:bg-gray-100 hover:text-foreground"
                    onClick={() => navigate('/cart')}
                  >
                    My Cart
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
