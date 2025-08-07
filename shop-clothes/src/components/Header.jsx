import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

 
  useEffect(() => {
  const updateCartCount = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(cartItems.length);
  };

  updateCartCount();

  
  window.addEventListener('cartUpdated', updateCartCount);

  return () => {
    window.removeEventListener('cartUpdated', updateCartCount);
  };
}, []);

  
  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
      setShowSearch(false);
    }
  };


  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <header className="bg-black shadow-md py-4 px-4 sm:py-3 sm:px-4 text-sm sm:text-base">
      <div className="container mx-auto flex flex-wrap justify-between items-center gap-4 relative">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl sm:text-2xl font-bold text-white hover:text-blue-600 transition-colors duration-300"
        >
          SHOP.clothes
        </Link>

        {/* Hamburger icon */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation links */}
        <nav
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent space-y-2 md:space-y-0 md:space-x-4 px-4 py-2 md:p-0 z-10`}
        >
          <Link to="/" className="text-white hover:text-blue-600 transition-colors duration-300">Shop</Link>
          <Link to="/" className="text-white hover:text-blue-600 transition-colors duration-300">On Sale</Link>
          <Link to="/" className="text-white hover:text-blue-600 transition-colors duration-300">New Arrivals</Link>
          <Link to="/" className="text-white hover:text-blue-600 transition-colors duration-300">Brands</Link>
        </nav>

        {/* Right section */}
        <div className="flex flex-wrap items-center justify-end gap-3 sm:gap-4">
        {/* Search */}
<div className="relative">
  
  <button
    onClick={() => setShowSearch(!showSearch)}
    className="p-2 hover:scale-110 transition-transform duration-300 text-white"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  </button>

  
  {showSearch && (
    <div className="absolute top-full mt-2 left-0 w-full max-w-md z-50 flex items-center gap-3">
      
      <div className="relative flex-1 bg-gray-200 rounded-full px-4 py-2 flex items-center">
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search products..."
          className="flex-1 bg-transparent focus:outline-none text-black placeholder-gray-500"
        />

       
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="w-5 h-5 rounded-full bg-gray-400 text-white text-xs flex items-center justify-center hover:bg-gray-500"
          >
            &times;
          </button>
        )}
      </div>

      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  )}
</div>
          {/* Cart */}
          <Link to="/cart" className="p-2 relative hover:scale-110 transition-transform duration-300 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Login */}
          <Link
            to="/login"
            className="bg-black text-white px-3 py-1 rounded-md hover:bg-gray-900 hover:text-blue-500 transition-all text-sm"
          >
            Login
          </Link>

          {/* Sign Up */}
          <Link
            to="/signup"
            className="bg-black text-white px-3 py-1 rounded-md hover:bg-gray-900 hover:text-blue-500 transition-all text-sm"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;