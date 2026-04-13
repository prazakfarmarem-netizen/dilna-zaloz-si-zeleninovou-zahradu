/**
 * Soft curved transition between sections with different backgrounds.
 * `from` and `to` specify the background colors (card or background).
 */
const SectionCurve = ({ from, to }: { from: "card" | "bg"; to: "card" | "bg" }) => {
  const fromColor = from === "card" ? "hsl(40 30% 93%)" : "hsl(40 33% 96%)";
  const toColor = to === "card" ? "hsl(40 30% 93%)" : "hsl(40 33% 96%)";

  return (
    <div className="relative h-8 -mt-px -mb-px" style={{ background: toColor }}>
      <svg
        viewBox="0 0 1200 32"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0 L1200 0 L1200 8 Q900 32 600 32 Q300 32 0 8 Z"
          fill={fromColor}
        />
      </svg>
    </div>
  );
};

export default SectionCurve;
