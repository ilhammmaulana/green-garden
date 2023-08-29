export default function Button({ children }) {
  return (
    <button className="bg-green-theme-500   hover:bg-green-theme-600 text-white py-2 px-4 rounded">
      {children}
    </button>
  );
}
