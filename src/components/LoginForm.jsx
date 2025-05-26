import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Muvaffaqiyatli kirish uchun modal
const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm w-full text-center space-y-4">
        <h2 className="text-2xl font-bold text-green-600">✔ Siz tizimga muvaffaqiyatli kirdingiz!</h2>
        <p className="text-gray-600">Endi testni boshlashingiz mumkin.</p>
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

// Xato bildirishnomasi uchun modal
const ErrorModal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm w-full text-center space-y-4">
        <h2 className="text-2xl font-bold text-red-600">❌ Xatolik yuz berdi!</h2>
        <p className="text-gray-600">{message}</p>
        <button
          onClick={onClose}
          className="btn btn-outline btn-danger"
        >
          Yopish
        </button>
      </div>
    </div>
  );
};

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    fullName: '',
    password: ''
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(
      user => user.fullName === credentials.fullName && user.password === credentials.password
    );
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      setShowSuccessModal(true);
    } else {
      setErrorMessage('Ism yoki parol noto‘g‘ri.');
      setShowErrorModal(true);
    }
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    navigate('/');
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Kirish</h2>

        <div>
          <label className="block mb-1 text-sm text-gray-600">Ism Familiya</label>
          <input
            name="fullName"
            type="text"
            placeholder="Ismingizni kiriting"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-600">Parol</label>
          <input
            name="password"
            type="password"
            placeholder="Parolingiz"
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-300"
        >
          Kirish
        </button>

        <p className="text-sm text-gray-500 text-center">
          Hisobingiz yo‘qmi? <a href="/register" className="text-blue-600 hover:underline">Ro‘yxatdan o‘tish</a>
        </p>
      </form>

      {/* Modal oynalari */}
      <SuccessModal isOpen={showSuccessModal} onClose={handleCloseSuccessModal} />
      <ErrorModal isOpen={showErrorModal} onClose={handleCloseErrorModal} message={errorMessage} />
    </div>
  );
};

export default LoginForm;
