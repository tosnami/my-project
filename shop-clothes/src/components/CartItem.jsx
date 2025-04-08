const CartItem = ({ item }) => {
    return (
      <div className="flex items-center justify-between py-4 border-b border-gray-200">
        <div className="flex items-center">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-20 h-20 object-cover rounded-md mr-4"
          />
          <div>
            <h4 className="font-semibold">{item.name}</h4>
            <p className="text-gray-600 text-sm">Size: {item.size}</p>
            <p className="text-gray-600 text-sm">Color: {item.color}</p>
          </div>
        </div>
        <div className="font-bold">${item.price}</div>
      </div>
    );
  };
  
  export default CartItem;