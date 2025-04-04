"use client";
import { useEffect, useState } from "react";

interface AnimatedNumberProps {
  start: number;
  end: number;
  suffix?: string; // "", "K+", "M+", etc.
  duration?: number; // in ms
}

const AnimatedNumber = ({
  start,
  end,
  suffix = "+",
  duration = 1000,
}: AnimatedNumberProps) => {
  const [displayValue, setDisplayValue] = useState(start);

  useEffect(() => {
    const range = end - start;
    const increment = Math.ceil(range / (duration / 30)); // ~30 updates over duration
    let current = start;

    const interval = setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(interval);
      }
      setDisplayValue(current);
    }, 30);

    return () => clearInterval(interval);
  }, [start, end, duration]);

  const format = (val: number) => {
    if (suffix === "K+") return `${Math.round(val / 1000)}K+`;
    if (suffix === "M+") return `${(val / 1000000).toFixed(1)}M+`;
    return `${val}${suffix}`;
  };

  return (
    <span className="text-white font-semibold min-w-[4ch]">{format(displayValue)}</span>
  );
};

export default AnimatedNumber;
