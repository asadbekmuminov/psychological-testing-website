import React, { useState } from 'react';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    fullName: '',
    password: ''
  });

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
      alert('Tizimga muvaffaqiyatli kirildi!');
      window.location.reload(); // sahifani yangilash (agar kerak bo‘lsa)
    } else {
      alert('Ism yoki parol noto‘g‘ri.');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input name="fullName" placeholder="Ism Familiya" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Parol" onChange={handleChange} required />
      <button type="submit">Kirish</button>
    </form>
  );
};

export default LoginForm;
