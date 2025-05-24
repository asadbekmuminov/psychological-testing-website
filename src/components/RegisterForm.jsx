import React, { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
    alert('Ro‘yxatdan o‘tish muvaffaqiyatli yakunlandi!');
  };

  return (
    <form onSubmit={handleRegister}>
      <input name="fullName" placeholder="Ism Familiya" onChange={handleChange} required />
      <input name="age" type="number" placeholder="Yosh" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Parol" onChange={handleChange} required />
      <button type="submit">Ro‘yxatdan o‘tish</button>
    </form>
  );
};

export default RegisterForm;
