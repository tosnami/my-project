import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-black shadow-md py-4 px-4 sm:py-3 sm:px-4 text-sm sm:text-base">
      <div className="container mx-auto flex flex-wrap justify-between items-center gap-4">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-xl sm:text-2xl font-bold text-white hover:text-blue-600 transition-colors duration-300"
        >
          SHOP.clothes
        </Link>

        {/* Navigation links - hidden on small screens */}
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-blue-600 transition-colors duration-300">Shop</Link>
          <Link to="/" className="text-white hover:text-blue-600 transition-colors duration-300">On Sale</Link>
          <Link to="/" className="text-white hover:text-blue-600 transition-colors duration-300">New Arrivals</Link>
          <Link to="/" className="text-white hover:text-blue-600 transition-colors duration-300">Brands</Link>
        </nav>

        {/* Right section (Search, Cart, Auth) */}
        <div className="flex flex-wrap items-center justify-end gap-3 sm:gap-4 max-w-full">
          
          {/* Search */}
          <button className="p-2 hover:scale-110 transition-transform duration-300 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Cart */}
          <Link to="/cart" className="p-2 relative hover:scale-110 transition-transform duration-300 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
          </Link>

          {/* Login */}
          <Link
            to="/login"
            className="bg-black text-white px-3 py-1 rounded-md hover:bg-gray-900 hover:text-blue-500 transition-all text-sm"
          >
            Login
          </Link>

          {/* Sign Up */}
          <button
            className="bg-black text-white px-3 py-1 rounded-md hover:bg-gray-900 hover:text-blue-500 transition-all text-sm"
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
