import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products') // API جديد
      .then(res => {
        // DummyJSON بيرجع res.data.products
        setProducts(res.data.products.slice(0, 8)); // أول 8 منتجات
      })
      .catch(err => {
        console.error('Error fetching products:', err);
      });
  }, []);

  return (
    <div>
      {/* HERO SECTION */}
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

      {/* NEW ARRIVALS */}
      <section className="bg-white py-20 px-6 text-black">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">NEW ARRIVALS</h2>
            <Link to="/shop" className="text-blue-500 hover:text-white">View All</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map(product => (
              <ProductCard key={product.id} product={{
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.thumbnail || product.image
              }} />
            ))}
          </div>
        </div>
      </section>

      {/* TOP SELLING */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">TOP SELLING</h2>
            <Link to="/shop" className="text-blue-600 hover:text-white">View All</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.slice(4, 8).map(product => (
              <ProductCard key={product.id} product={{
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.thumbnail || product.image
              }} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;