import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">SHOP.clothes</Link>
        
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-600">Shop</Link>
          <Link to="/" className="hover:text-gray-600">On Sale</Link>
          <Link to="/" className="hover:text-gray-600">New Arrivals</Link>
          <Link to="/" className="hover:text-gray-600">Brands</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          <Link to="/cart" className="p-2 relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
          </Link>

          {/* زر تسجيل الدخول */}
          <Link to="/login"  className="bg-black hover:text-blue-600 text-white px-4 py-2 rounded-md">login
          </Link>

          {/* زر Sign Up */}
          <button className="bg-black  hover:text-blue-600 text-white px-4 py-2 rounded-md">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
