function BinIcon({ color = "#10b981", size = 60 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* lid */}
      <path
        d="M3 6h18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* handle */}
      <path
        d="M9 6V4h6v2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* bin body */}
      <path
        d="M6 6l1 14h10l1-14"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* inner lines */}
      <path d="M10 10v6" stroke={color} strokeWidth="2" />
      <path d="M14 10v6" stroke={color} strokeWidth="2" />
    </svg>
  );
}

export default BinIcon;
