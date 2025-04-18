const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-2 animate-slideInFromLeft delay-200">
          <h3 className="text-black font-bold mb-4 animate-slideInFromLeft delay-200">SHOP.Clothes</h3>
          <p className="text-black animate-slideInFromLeft delay-400">
            We have clothes that suit your style and which you're proud to wear. From women to men.
          </p>
        </div>

        <div className="animate-slideInFromLeft delay-600">
          <h4 className="text-black font-bold mb-4 animate-slideInFromLeft delay-600">COMPANY</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-black animate-slideInFromLeft delay-800">About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black animate-slideInFromLeft delay-1000">Features</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black animate-slideInFromLeft delay-1200">Works</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black animate-slideInFromLeft delay-1400">Career</a></li>
          </ul>
        </div>

        <div className="animate-slideInFromRight delay-1600">
          <h4 className="text-black font-bold mb-4 animate-slideInFromRight delay-1600">HELP</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-black animate-slideInFromRight delay-1800">Customer Support</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black animate-slideInFromRight delay-2000">Delivery Details</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black animate-slideInFromRight delay-2200">Terms & Conditions</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black animate-slideInFromRight delay-2400">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="animate-slideInFromRight delay-2600">
          <h4 className="text-black font-bold mb-4 animate-slideInFromRight delay-2600">FAQ</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-black animate-slideInFromRight delay-2800">Account</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black animate-slideInFromRight delay-3000">Manage Deliveries</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black animate-slideInFromRight delay-3200">Orders</a></li>
            <li><a href="#" className="text-gray-600 hover:text-black animate-slideInFromRight delay-3400">Payments</a></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-8 pt-8 border-t border-gray-200 animate-slideInFromBottom delay-3600">
        <p className="text-gray-600 text-center">Shop.clothes © 2000-2025</p>
      </div>
    </footer>
  );
};

export default Footer;