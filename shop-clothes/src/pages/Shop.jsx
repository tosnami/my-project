// src/pages/Shop.jsx
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [categories, setCategories] = useState([]);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('search')?.toLowerCase() || '';

  useEffect(() => {
    axios.get('https://dummyjson.com/products') // API الجديد
      .then(res => {
        setProducts(res.data.products); // DummyJSON بيرجع res.data.products
        const uniqueCategories = ['All', ...new Set(res.data.products.map(product => product.category))];
        setCategories(uniqueCategories);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
      });
  }, []);

  const filteredProducts = products.filter(product => {
    const matchCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchSearch = product.title.toLowerCase().includes(searchTerm);
    return matchCategory && matchSearch;
  });

  return (
    <div className="py-12 px-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8">Shop</h1>

        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full ${activeCategory === category ? 'bg-black text-white' : 'bg-gray-100 text-gray-800'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={{
              id: product.id,
              title: product.title,
              price: product.price,
              image: product.thumbnail || product.image
            }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;