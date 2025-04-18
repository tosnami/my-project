const CartItem = ({ item }) => {
  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-200 animate-fadeIn">
      <div className="flex items-center">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-20 h-20 object-cover rounded-md mr-4 animate-slideIn"
        />
        <div>
          <h4 className="font-semibold animate-slideIn">{item.name}</h4>
          <p className="text-gray-600 text-sm animate-slideIn">Size: {item.size}</p>
          <p className="text-gray-600 text-sm animate-slideIn">Color: {item.color}</p>
        </div>
      </div>
      <div className="font-bold animate-slideIn">${item.price}</div>
    </div>
  );
};

export default CartItem;