import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const products = [
    {
      id: 1,
      name: "T-SHIRT WITH TAPE DETAILS",
      price: 120,
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      name: "SKINNY FIT JEANS",
      originalPrice: 160,
      price: 130,
      discount: 30,
      rating: 4.0,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      name: "CHECKERED SHIRT",
      originalPrice: 260,
      price: 240,
      discount: 20,
      rating: 3.0,
      image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 4,
      name: "SLEEVE STRIPED T-SHIRT",
      originalPrice: 180,
      price: 144,
      discount: 20,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  const testimonials = [
    {
      author: "Sarah M.",
      comment: "I'm blown away by the quality and style of the clothes I received from Shop.co...",
      rating: 5
    },
    {
      author: "Alex K.",
      comment: "Finding clothes that align with my personal style used to be a challenge...",
      rating: 4
    },
    {
      author: "James L.",
      comment: "As someone who's always on the lookout for unique fashion pieces...",
      rating: 5
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-100 py-20 px-6 animate-fadeInDown">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-black text-4xl md:text-5xl font-bold mb-6">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-black mb-8">
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
            <Link to="/shop" className="bg-black text-white px-8 py-3 rounded-md inline-block">Shop Now</Link>
            <div className="flex mt-12 space-x-8">
              <div>
                <h3 className="text-gray-400 text-2xl font-bold">200+</h3>
                <p className="text-black">International Brands</p>
              </div>
              <div>
                <h3 className="text-gray-400 text-2xl font-bold">2,000+</h3>
                <p className="text-black">High-Quality Products</p>
              </div>
              <div>
                <h3 className="text-gray-400 text-2xl font-bold">30,000+</h3>
                <p className="text-black">Happy Customers</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ou5zM6_DJO3H14s_INehg_Kzx0MfzeuvYg&s"
              alt="Fashion"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="bg-black py-20 px-6 text-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">NEW ARRIVALS</h2>
            <Link to="/shop" className="text-yellow-500 hover:text-white">View All</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Top Selling */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">TOP SELLING</h2>
            <Link to="/shop" className="text-blue-600 hover:text-white">View All</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.slice().reverse().map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">OUR HAPPY CUSTOMERS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.comment}"</p>
                <p className="font-semibold">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Dress Style */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-black text-2xl font-bold text-center mb-12">BROWSE BY DRESS STYLE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Casual', 'Formal', 'Party', 'Gym'].map((style, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👕</span>
                </div>
                <h3 className="font-semibold">{style}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-6 bg-black text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-4 py-3 rounded-l-md text-white"
              />
              <button className="bg-white text-black px-6 py-3 rounded-r-md font-semibold">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;