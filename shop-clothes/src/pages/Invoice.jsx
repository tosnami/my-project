import { useEffect, useState } from 'react';

const Invoice = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;
console.log(cartItems);
  return (
    <div className="bg-white min-h-screen py-12 px-6 text-black">
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded">
        <h1 className="text-3xl font-bold mb-8 text-center">Invoice</h1>

        {/* ✅ المنتجات */}
        <ul className="space-y-3 mb-6">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between border-b pb-2 text-base">
              <span className="font-medium">{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>

        {/* ✅ الفاتورة */}
        <div className="space-y-4 mb-6 text-base">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Discount (-20%)</span>
            <span className="text-red-600">-${discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Fee</span>
            <span>${deliveryFee.toFixed(2)}</span>
          </div>
        </div>

        <div className="border-t pt-4 flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>

      
         <div className="border-t pt-4 flex justify-between text-lg font-bold text-center text-gray-600">
          the hotline 8090.
          </div>
             <div className="mt-10 text-center text-sm text-gray-600">
          Your order will arrive within 3-5 days.
          
        </div>
      </div>
    </div>
  );
};

export default Invoice;