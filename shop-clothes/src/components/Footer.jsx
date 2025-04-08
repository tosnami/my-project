const Footer = () => {
    return (
      <footer className="bg-gray-100 py-12 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-black font-bold mb-4">SHOP.Clothes</h3>
            <p className="text-black">
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </p>
          </div>
          
          <div>
            <h4 className=" text-black font-bold mb-4">COMPANY</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Works</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Career</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className=" text-black font-bold mb-4">HELP</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">Customer Support</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Delivery Details</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className=" text-black font-bold mb-4">FAQ</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">Account</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Manage Deliveries</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Orders</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Payments</a></li>
            </ul>
          </div>
        </div>
        
        <div className="container mx-auto mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-center">Shop.co © 2000-2023, All Rights Reserved</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;