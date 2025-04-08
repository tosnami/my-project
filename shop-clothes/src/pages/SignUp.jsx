import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    // هنا ممكن تحفظ بيانات المستخدم محليًا (دي محاكاة مش قاعدة بيانات حقيقية)
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    alert('تم إنشاء الحساب بنجاح!');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSignUp} className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">تسجيل حساب جديد</h2>
        
        <input
          type="email"
          placeholder="البريد الإلكتروني"
          className="w-full mb-4 px-4 py-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <input
          type="password"
          placeholder="كلمة المرور"
          className="w-full mb-6 px-4 py-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          إنشاء حساب
        </button>
      </form>
    </div>
  );
};

export default SignUp;
