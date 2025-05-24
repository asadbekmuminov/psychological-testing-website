
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm w-full text-center space-y-4">
        <h2 className="text-2xl font-bold text-green-600">✔ Ro‘yxatdan o‘tish muvaffaqiyatli yakunlandi!</h2>
        <p className="text-gray-600">Endi tizimga kirishingiz mumkin.</p>
        <button
          onClick={onClose}
          className="btn btn-outline btn-accent"
        >
          Yopish
        </button>
      </div>
    </div>
  );
};

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    password: ''
  });

  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'age') {
      if (!/^\d*$/.test(value)) return; // faqat raqamlar
    }
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(user => user.fullName === formData.fullName);
    if (existingUser) {
      alert('Bu foydalanuvchi allaqachon ro‘yxatdan o‘tgan.');
      return;
    }
    users.push(formData);
    localStorage.setItem('users', JSON.stringify(users));

    // Avtomatik login
    localStorage.setItem('currentUser', JSON.stringify(formData));

    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/'); // Home sahifaga o'tish
    setTimeout(() => {
      window.location.reload(); // sahifani yangilash
    }, 100);
  };

  return (
    <div className="min-h-screen  flex items-center justify-center  px-4">
      <form
        onSubmit={handleRegister}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Ro‘yxatdan o‘tish</h2>

        <div>
          <label className="block mb-1 text-sm text-gray-600">Ism Familiya</label>
          <input
            name="fullName"
            type="text"
            placeholder="Ismingiz va familiyangiz"
            onChange={handleChange}
            value={formData.fullName}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-600">Yosh</label>
          <input
            name="age"
            type="text"
            placeholder="Yoshingiz"
            onChange={handleChange}
            value={formData.age}
            required
            inputMode="numeric"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="relative">
          <label className="block mb-1 text-sm text-gray-600">Parol</label>
          <input
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Parolingiz"
            onChange={handleChange}
            value={formData.password}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(prev => !prev)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900 focus:outline-none"
            aria-label={showPassword ? "Parolni yashirish" : "Parolni ko'rsatish"}
          >
            {showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.418 0-8-3.582-8-8a7.967 7.967 0 012.104-5.202M3 3l18 18" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-1.397 0-2.733-.355-3.905-.983" />
              </svg>
            )}
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition duration-300"
        >
          Ro‘yxatdan o‘tish
        </button>

        <p className="text-sm text-gray-500 text-center">
          Hisobingiz bormi? <a href="/login" className="text-green-600 hover:underline">Kirish</a>
        </p>
      </form>

      <SuccessModal isOpen={showModal} onClose={handleCloseModal} />
    </div>
  );
};

export default RegisterForm;
