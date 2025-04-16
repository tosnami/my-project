import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Login from './pages/Login'; // ✅ إضافة صفحة تسجيل الدخول
import Header from './components/Header';
import Footer from './components/Footer';
import SignUp from './pages/SignUp';
function App() {
  return (
    <Router basename="/alx-shop-project/shop-clothes"> {/* استخدم هذا المسار كـ basename */}
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
          <Route path="/signup" element={<SignUp />} /> {/* ✅ إضافة الراوت */}
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} /> {/* ✅ راوت صفحة تسجيل الدخول */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
