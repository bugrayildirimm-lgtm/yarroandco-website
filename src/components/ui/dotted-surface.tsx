"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface DottedSurfaceProps {
  dotColor?: string;
  dotRadius?: number;
  spacing?: number;
  radialFade?: boolean;
  fadeRadius?: string;
  className?: string;
}

export function DottedSurface({
  dotColor = "rgba(200,220,255,0.5)",
  dotRadius = 1,
  spacing = 20,
  radialFade = true,
  fadeRadius = "60%",
  className,
}: DottedSurfaceProps) {
  const id = React.useId().replace(/:/g, "");

  return (
    <svg
      aria-hidden="true"
      className={cn("pointer-events-none", className)}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id={`dots-${id}`}
          x={0}
          y={0}
          width={spacing}
          height={spacing}
          patternUnits="userSpaceOnUse"
        >
          <circle
            cx={spacing / 2}
            cy={spacing / 2}
            r={dotRadius}
            fill={dotColor}
          />
        </pattern>

        {radialFade && (
          <radialGradient id={`grad-${id}`} cx="50%" cy="50%" r={fadeRadius} gradientUnits="objectBoundingBox">
            <stop offset="0%"   stopColor="white" stopOpacity="1" />
            <stop offset="70%"  stopColor="white" stopOpacity="0.6" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        )}

        {radialFade && (
          <mask id={`mask-${id}`}>
            <rect width="100%" height="100%" fill={`url(#grad-${id})`} />
          </mask>
        )}
      </defs>

      <rect
        width="100%"
        height="100%"
        fill={`url(#dots-${id})`}
        mask={radialFade ? `url(#mask-${id})` : undefined}
      />
    </svg>
  );
}

export default DottedSurface;
