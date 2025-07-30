const ProductCard = ({ product }) => {
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const newItem = {
      id: product.id,
      name: product.title,
      image: product.image,
      price: product.price,
      size: "Large",  // لو عندك حجم
      color: "White"  // لو عندك لون
    };

    cart.push(newItem);
    localStorage.setItem('cart', JSON.stringify(cart));

    alert("Product added to cart!");
  };

  return (
    <div className="border p-4 rounded">
      <img src={product.image} alt={product.title} className="w-full h-48 object-contain" />
      <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
      <p className="text-gray-600">${product.price}</p>
      <button
        onClick={handleAddToCart}
        className="bg-black text-white px-4 py-2 mt-2 rounded hover:bg-gray-800"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;