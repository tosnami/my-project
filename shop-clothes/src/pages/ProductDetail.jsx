/* eslint-disable */
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useParams } from 'react-router-dom';
import ReviewCard from '../components/ReviewCard';

const ProductDetail = () => {
  const { id } = useParams();
  
  // Sample data - in a real app, this would come from an API
  const product = {
    id: 1,
    name: "ONE LIFE GRAPHIC T-SHIRT",
    image:  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 260,
    originalPrice: 300,
    discount: 40,
    description: "The graphic instrument is perfect for any operation. Crafted from a soft and incomplete fabric, it offers support comfort and style.",
    colors: ["Black", "White", "Red", "Blue"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    reviews: [
      {
        id: 1,
        author: "Samantha D.",
        comment: "I absolutely love her spirit! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        rating: 5,
        date: "August 14, 2023"
      },
      {
        id: 2,
        author: "Ethan R.",
        comment: "This's what is a metal-bore like anyone who appreciates good design. The minimal size you'd also custom caught my eye, and like it's perfect. I can see the designer's touch in every aspect of the shirt.",
        rating: 4,
        date: "August 16, 2023"
      },
      {
        id: 3,
        author: "Liam K.",
        comment: "This's what is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. He has working a piece of art that reflects my passion for both design and fashion.",
        rating: 5,
        date: "August 18, 2023"
      }
    ],
    relatedProducts: [
      {
        id: 9,
        name: "Polo with Contrast Trims",
        image: "https://via.placeholder.com/300",
        price: 212,
        originalPrice: 242,
        discount: 30
      },
      {
        id: 10,
        name: "Gradient Graphic T-shirt",
        image: "https://via.placeholder.com/300",
        price: 145
      },
      {
        id: 11,
        name: "Polo with Tipping Details",
        image: "https://via.placeholder.com/300",
        price: 180
      },
      {
        id: 12,
        name: "Black Striped T-shirt",
        image: "https://via.placeholder.com/300",
        price: 120,
        originalPrice: 150,
        discount: 20
      }
    ]
  };

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[1]);

  return (
    <div className="py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Image */}
          <div className="md:w-1/2">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full rounded-lg"
            />
          </div>
          
          {/* Product Info */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <span className="text-gray-500">Home {'>'} Shop {'>'} Men {'>'} T-shirts</span>
            </div>
            
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i}
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`} 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-gray-600 ml-2">(453 reviews)</span>
            </div>
            
            <div className="mb-6">
              {product.originalPrice && (
                <span className="text-gray-400 line-through mr-2">${product.originalPrice}</span>
              )}
              <span className="text-2xl font-bold">${product.price}</span>
              {product.discount && (
                <span className="ml-2 text-red-500">-{product.discount}%</span>
              )}
            </div>
            
            <p className="text-gray-700 mb-8">{product.description}</p>
            
            <div className="mb-8">
              <h3 className="font-semibold mb-2">Select Colors</h3>
              <div className="flex gap-2">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-md ${selectedColor === color ? 'bg-black text-white' : 'bg-gray-100 text-gray-800'}`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="font-semibold mb-2">Choose Size</h3>
              <div className="flex gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-md ${selectedSize === size ? 'bg-black text-white' : 'bg-gray-100 text-gray-800'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            <button className="bg-black text-white px-8 py-3 rounded-md w-full mb-8">
              Add to Cart
            </button>
            
            <div className="border-t border-b border-gray-200 py-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">SKU</span>
                <span>123456789</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-600">Category</span>
                <span>T-Shirts</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Reviews */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">All Reviews ({product.reviews.length})</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.reviews.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
        
        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">YOU MIGHT ALSO LIKE</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {product.relatedProducts.map(relatedProduct => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;