// // import React from 'react';

// // const LogoutButton = () => {
// //   const handleLogout = () => {
// //     localStorage.removeItem('currentUser');
// //     alert('Tizimdan chiqildi.');
// //     window.location.reload(); // sahifani yangilash
// //   };

// //   return <button onClick={handleLogout}>Chiqish</button>;
// // };

// // export default LogoutButton;
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const LogoutButton = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('currentUser');
//     alert('Tizimdan chiqildi.');
//     navigate('/');  // Homepage ga yo'naltirish
//     window.location.reload(); // sahifani yangilash
//   };

//   return <button onClick={handleLogout}>Chiqish</button>;
// };

// export default LogoutButton;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';

const LogoutButton = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate('/');
    window.location.reload();
  };

  return (
    <>
      <button onClick={handleLogout}>Chiqish</button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <p>Tizimdan chiqildi.</p>
      </Modal>
    </>
  );
};

export default LogoutButton;
