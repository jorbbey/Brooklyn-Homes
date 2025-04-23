import React, { useEffect } from "react";

const Modal = ({ message, onClose }) => {
  // Auto close after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/30 transition-opacity duration-300">
      <div className="bg-white text-black p-6 rounded-xl w-[90%] md:w-[400px] shadow-2xl transform transition-all duration-300 scale-100">
        <h2 className="text-lg font-semibold mb-4">Notification</h2>
        <p className="text-sm">{message}</p>
        <button
          onClick={onClose}
          className="mt-6 bg-[#bc963f] px-4 py-2 rounded text-white hover:bg-[#a78635] transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
