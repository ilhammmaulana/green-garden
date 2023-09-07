function CustomDot({ index, isActive }) {
  return (
    <div className={`custom-dot ${isActive ? "active" : ""}`} key={index}>
      {/* Add your custom dot content here */}
    </div>
  );
}

export default CustomDot;
