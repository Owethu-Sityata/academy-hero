import PillarHexagon from "./PillarHexagon";
import { pillars } from "./pillarData";
import { useIsMobile } from "@/hooks/use-mobile";
import academyImage from "@/assets/academy-team.png";
import centerCircleImg from "@/assets/center-circle.png";

const PLUS_POSITIONS = [
  { top: "30%", left: "-4%", size: 22 },
  { top: "50%", left: "6%", size: 16 },
  { top: "75%", right: "5%", size: 24 },
  { top: "85%", right: "15%", size: 18 },
  { top: "90%", right: "25%", size: 14 },
  { top: "65%", left: "-2%", size: 12 },
];

/** Positions for 6 hexagons around center (angle in degrees, radius in px) */
const HEX_LAYOUT = [
  { angle: -90, r: 180 },   // top
  { angle: -30, r: 180 },   // top-right
  { angle: 30, r: 180 },    // bottom-right
  { angle: 90, r: 180 },    // bottom
  { angle: 150, r: 180 },   // bottom-left
  { angle: 210, r: 180 },   // top-left
];

const WrapAroundSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="bg-academy-bg py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight leading-tight whitespace-nowrap">
            <span className="text-foreground">OUR </span>
            <span className="text-academy-blue">WRAP-AROUND APPROACH</span>
          </h2>

          {/* Body text */}
          <div className="text-academy-text text-base leading-relaxed space-y-4 max-w-lg">
            <p>
              As an academy, we recognise the need to focus on more than just the
              technical skills of an individual.
            </p>
            <p>We have a wrap-around approach that develops the whole person.</p>
            <p>
              There are six pillars that we focus on, ensuring that our students
              are suitably prepared for the market and the challenges that their
              internships could bring.
            </p>
          </div>

          {/* Angled image with blue border + green plus signs */}
          <div className="relative mt-6 -ml-6 md:-ml-12 lg:-ml-20 max-w-md">
            {/* Green plus decorations */}
            {PLUS_POSITIONS.map((pos, i) => (
              <span
                key={i}
                className="absolute text-academy-green font-bold select-none pointer-events-none z-20"
                style={{
                  top: pos.top,
                  left: (pos as any).left,
                  right: (pos as any).right,
                  fontSize: pos.size,
                }}
              >
                ✦
              </span>
            ))}
            {/* Blue angular border frame */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-10"
              viewBox="0 0 500 350"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                d="M0 50 L120 0 L460 0 L460 350 L0 350 Z"
                stroke="hsl(213, 66%, 32%)"
                strokeWidth="8"
                fill="none"
                strokeLinejoin="round"
              />
            </svg>
            {/* Image */}
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <img
                src={academyImage}
                alt="Academy students collaborating"
                className="w-full h-full object-cover"
                style={{
                  clipPath: "polygon(0% 15%, 24% 0%, 92% 0%, 92% 100%, 0% 100%)",
                }}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN – 6 Pillars */}
        <div className="flex items-center justify-center py-[15%]">
          {isMobile ? (
            /* Mobile: vertical card list */
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {pillars.map((p) => (
                <div key={p.title} className="flex justify-center">
                  <PillarHexagon pillar={p} />
                </div>
              ))}
            </div>
          ) : (
            /* Desktop: circular hexagon layout */
            <div className="relative" style={{ width: 560, height: 560 }}>
              {/* Dotted connector lines with dots at endpoints */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 560 560"
              >
                {HEX_LAYOUT.map((h, i) => {
                  const x = 280 + h.r * Math.cos((h.angle * Math.PI) / 180);
                  const y = 280 + h.r * Math.sin((h.angle * Math.PI) / 180);
                  return (
                    <g key={i}>
                      <line
                        x1="280"
                        y1="280"
                        x2={x}
                        y2={y}
                        stroke="#333"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        opacity="0.5"
                      />
                      <circle cx={x} cy={y} r="4" fill="#333" opacity="0.6" />
                    </g>
                  );
                })}
              </svg>

              {/* Center circle */}
              <div className="absolute" style={{ top: 280 - 56, left: 280 - 56 }}>
                <img src={centerCircleImg} alt="Center circle" className="w-28 h-28 object-contain" />
              </div>

              {/* Hexagons */}
              {pillars.map((p, i) => {
                const { angle, r } = HEX_LAYOUT[i];
                const x = 280 + r * Math.cos((angle * Math.PI) / 180) - 70;
                const y = 280 + r * Math.sin((angle * Math.PI) / 180) - 70;
                return (
                  <div
                    key={p.title}
                    className="absolute"
                    style={{ left: x, top: y }}
                  >
                    <PillarHexagon pillar={p} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WrapAroundSection;
