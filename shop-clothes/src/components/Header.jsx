import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 animate-fadeInDown">
      <div className="container mx-auto flex justify-between items-center transition-all duration-300">
        <Link to="/" className="text-2xl font-bold hover:text-blue-600 transition-colors duration-300">
          SHOP.clothes
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-600 transition-colors duration-300">Shop</Link>
          <Link to="/" className="hover:text-blue-600 transition-colors duration-300">On Sale</Link>
          <Link to="/" className="hover:text-blue-600 transition-colors duration-300">New Arrivals</Link>
          <Link to="/" className="hover:text-blue-600 transition-colors duration-300">Brands</Link>
        </nav>

        <div className="flex items-center space-x-6">
          {/* Search */}
          <button className="p-2 hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          {/* Cart */}
          <Link to="/cart" className="p-2 relative hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
          </Link>

          {/* Login */}
          <Link to="/login" className="bg-black hover:bg-gray-900 hover:text-blue-500 text-white px-4 py-2 rounded-md transition-all duration-300">
            Login
          </Link>

          {/* Sign Up */}
          <button className="bg-black hover:bg-gray-900 hover:text-blue-500 text-white px-4 py-2 rounded-md transition-all duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;