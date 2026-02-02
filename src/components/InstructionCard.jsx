function InstructionCard({ Icon, title, description, color }) {
  return (
    <div className="instruction-card">
      <div className="icon-circle" style={{ backgroundColor: color }}>
        {Icon && <Icon size={28} />}
      </div>

      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default InstructionCard;