import { useState } from "react";
import type { Pillar } from "./pillarData";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Props {
  pillar: Pillar;
  style?: React.CSSProperties;
  className?: string;
}

const PillarHexagon = ({ pillar, style, className = "" }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const bg =
    pillar.backgroundColor === "blue"
      ? "bg-academy-blue"
      : "bg-academy-green";

  const fillColor = pillar.backgroundColor === "blue" ? "hsl(213, 66%, 32%)" : "hsl(90, 61%, 44%)";
  const size = 140;
  // Flat-top regular hexagon with rounded corners
  const s = size;
  const cx = s / 2, cy = s / 2, r = s / 2 - 4;
  const hexPoints = Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 180) * (60 * i - 30);
    return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
  }).join(" ");

  const hexContent = (
    <div
      className={`${className} relative flex items-center justify-center cursor-pointer
        transition-all duration-300 ease-in-out hover:scale-110 hover:brightness-110
        hover:drop-shadow-[0_0_12px_hsl(var(--academy-green)/0.5)]`}
      style={{ width: size, height: size, ...style }}
      onClick={() => setExpanded(!expanded)}
    >
      <svg viewBox={`0 0 ${s} ${s}`} className="absolute inset-0 w-full h-full">
        <polygon
          points={hexPoints}
          fill={fillColor}
          rx="8"
          ry="8"
          stroke={fillColor}
          strokeWidth="8"
          strokeLinejoin="round"
        />
      </svg>
      <span className="relative z-10 text-white text-xs font-bold leading-tight text-center px-4 uppercase whitespace-pre-line select-none">
        {pillar.title}
      </span>
    </div>
  );

  return (
    <>
      {/* Desktop tooltip */}
      <div className="hidden md:block">
        <Tooltip>
          <TooltipTrigger asChild>{hexContent}</TooltipTrigger>
          <TooltipContent
            side="top"
            className="max-w-[200px] text-xs bg-white text-foreground shadow-lg border"
          >
            {pillar.description}
          </TooltipContent>
        </Tooltip>
      </div>

      {/* Mobile tap-to-expand */}
      <div className="md:hidden flex flex-col items-center">
        {hexContent}
        {expanded && (
          <p className="mt-2 text-xs text-academy-text text-center max-w-[180px] animate-fade-in">
            {pillar.description}
          </p>
        )}
      </div>
    </>
  );
};

export default PillarHexagon;
