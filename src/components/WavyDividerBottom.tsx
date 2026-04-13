const WavyDividerBottom = () => (
  <div className="bg-background overflow-hidden -mt-px">
    <svg
      viewBox="0 0 1200 48"
      preserveAspectRatio="none"
      className="w-full h-10 block"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Filled U-shape with card background to cap the darker section */}
      <path
        d="M0 0 Q0 0 0 0 L0 4 Q300 48 600 48 Q900 48 1200 4 L1200 0 Z"
        fill="hsl(40 30% 93%)"
      />
      {/* The wavy brown stroke line */}
      <path
        d="M0 4 Q300 48 600 48 Q900 48 1200 4"
        stroke="hsl(30 25% 50%)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.45"
      />
    </svg>
  </div>
);

export default WavyDividerBottom;
