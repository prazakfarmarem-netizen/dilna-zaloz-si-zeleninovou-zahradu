const WavyDivider = () => (
  <div className="bg-card overflow-hidden">
    <svg
      viewBox="0 0 1200 24"
      preserveAspectRatio="none"
      className="w-full h-6 block"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 12 Q150 0 300 12 T600 12 T900 12 T1200 12"
        stroke="hsl(30 25% 50%)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.45"
      />
    </svg>
  </div>
);

export default WavyDivider;
