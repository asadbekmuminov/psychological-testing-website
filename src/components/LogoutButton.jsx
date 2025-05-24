import React from 'react';

const LogoutButton = () => {
  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    alert('Tizimdan chiqildi.');
    window.location.reload(); // sahifani yangilash
  };

  return <button onClick={handleLogout}>Chiqish</button>;
};

export default LogoutButton;
