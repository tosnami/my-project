import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => { 
  
 
  const cartItems = [
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      
      price: 145,
      size: "Large",
      color: "White" 
    },
    {
      id: 2,
      name: "Checkered Shirt",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      price: 180,
      size: "Medium",
      color: "Red"
    },
    {
      id: 3,
      name: "Skinny Fit Jeans",
      image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      price: 240,
      size: "Large",
      color: "Blue"
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const discount = subtotal * 0.2; // 20% discount
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="py-12 px-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8">YOUR CART</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          
          
          <div className="lg:w-1/3 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Discount (-20%)</span>
                <span className="text-red-500">-${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Fee</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-4 mb-6">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex">
                <input 
                  type="text" 
                  placeholder="Add promo code" 
                  className="flex-grow px-4 py-2 rounded-l-md border border-gray-300"
                />
                <button className="bg-black text-white px-4 py-2 rounded-r-md">
                  Apply
                </button>
              </div>
            </div>
            
            <Link 
              to="/checkout" 
              className="block bg-black text-white text-center py-3 rounded-md font-semibold"
            >
              Go to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;