function Button({ text, color, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: color,
        padding: "14px 30px",
        borderRadius: "12px",
        border: "none",
        fontSize: "16px",
        color: "white",
        cursor: "pointer",
        width: "390px",
        margin: "10px auto",
        display: "block"
      }}
    >
      {text}
    </button>
  );
}

export default Button;
