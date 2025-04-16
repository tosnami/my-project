import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart'; // ✅ تم تصحيح المسار هنا
import Login from './pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router basename="/alx-shop-project"> {/* ✅ تم تصحيح إغلاق العلامة هنا */}
      <div className="min-h-screen flex flex-col"> {/* ✅ تم تصحيح إغلاق العلامة هنا */}
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;