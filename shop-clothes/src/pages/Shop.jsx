import { useState } from 'react';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const products = [
    {
      id: 1,
      name: "T-Shirt with Tape Details",
      image: "https://images.unsplash.com/photo-1580236591950-3c9b3f11b1d5",
      price: 120,
      rating: 5,
      reviews: 24,
      category: "Casual"
    },
    {
      id: 2,
      name: "Skinny Fit Jeans",
      image: "https://images.unsplash.com/photo-1600185366294-df2e17d93b59",
      price: 130,
      originalPrice: 160,
      discount: 30,
      rating: 4,
      reviews: 18,
      category: "Casual"
    },
    {
      id: 3,
      name: "Checkered Shirt",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
      price: 180,
      originalPrice: 240,
      discount: 20,
      rating: 3.5,
      reviews: 12,
      category: "Formal"
    },
    {
      id: 4,
      name: "Sleeve Striped T-Shirt",
      image: "https://images.unsplash.com/photo-1618354691373-b3e2160a4f86",
      price: 260,
      originalPrice: 300,
      discount: 20,
      rating: 4.5,
      reviews: 32,
      category: "Casual"
    },
    {
      id: 5,
      name: "Vertical Striped Shirt",
      image: "https://images.unsplash.com/photo-1618354791495-5e3a79f3c946",
      price: 212,
      originalPrice: 232,
      discount: 20,
      rating: 4,
      reviews: 15,
      category: "Formal"
    },
    {
      id: 6,
      name: "Courage Graphic T-Shirt",
      image: "https://images.unsplash.com/photo-1602810318383-4c3a37302845",
      price: 210,
      rating: 3,
      reviews: 8,
      category: "Casual"
    },
    {
      id: 7,
      name: "Loose Fit Bermuda Shorts",
      image: "https://images.unsplash.com/photo-1582735683444-8ba9f67259d9",
      price: 145,
      rating: 4.5,
      reviews: 21,
      category: "Casual"
    },
    {
      id: 8,
      name: "Faded Skinny Jeans",
      image: "https://images.unsplash.com/photo-1600185366589-d5f79c5d7de4",
      price: 80,
      rating: 5,
      reviews: 27,
      category: "Casual"
    }
  ];

  const categories = ['All', ...new Set(products.map(product => product.category))];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

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
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
