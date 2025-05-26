import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
   <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm w-full text-center space-y-4">
        <h2 className="text-2xl font-bold text-green-600">✔ Siz tizimdan chiqdingiz!</h2>
        
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

export default Modal;
