export default function Button({ children }) {
  return (
    <button className="bg-green-theme   hover:bg-blue-700 text-white py-2 px-4 rounded">
      {children}
    </button>
  );
}
