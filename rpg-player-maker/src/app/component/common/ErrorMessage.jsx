import { useEffect } from "react";

const ErrorMessage = ({ message, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!message) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 animate-fade-in">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center transform transition-all scale-95 hover:scale-100">
        <p className="text-gray-700">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ErrorMessage;
