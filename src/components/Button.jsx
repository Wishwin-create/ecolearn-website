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
        width: "min(390px, 100%)",
        margin: "10px auto",
        display: "block"
      }}
    >
      {text}
    </button>
  );
}

export default Button;
