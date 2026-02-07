import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`) // API جديد
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const newItem = {
      id: product.id,
      name: product.title,
      image: product.thumbnail || product.image,
      price: product.price,
      size: "Large",
      color: "White"
    };

    cart.push(newItem);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Product added to cart!");
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
        <img 
          src={product.thumbnail || product.image} 
          alt={product.title} 
          className="w-full md:w-1/2 h-auto object-contain" 
        />
        <div>
          <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-lg font-semibold mb-4">${product.price}</p>
          <button 
            onClick={handleAddToCart} 
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;