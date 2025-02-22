const Button = ({ onClick, children }) => {
  return (
    <button
      className="text-2xl  bg-[var(--background)] mt-6 mb-6 p-1 rounded-lg mx-4 w-[600px]"
      style={{ color: "var(--color3)" }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
