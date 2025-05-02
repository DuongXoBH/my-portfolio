"use client";

import { useEffect, useState } from "react";

export default function FlowerEffect() {
  const [theta, setTheta] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTheta((prev) => prev + 0.03);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  const points = [];
  const petalCount = 6;
  const pointCount = 100;
  const size = 120;
  for (let i = 0; i < pointCount; i++) {
    const angle = (i / pointCount) * Math.PI * 2;
    const r = size * Math.sin(petalCount * angle + theta);
    const x = r * Math.cos(angle);
    const y = r * Math.sin(angle);
    points.push({ x, y });
  }

  return (
    <div className="relative w-[300px] h-[300px] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        {points.map((point, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-red-500 opacity-80"
            style={{
              transform: `translate(${point.x}px, ${point.y}px)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
