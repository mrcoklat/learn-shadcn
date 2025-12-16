"use client";

import FloatingLines from "@/components/FloatingLines";
import GridDistortion from "@/components/GridDistortion";
import { useTheme } from "@/hooks/use-theme";

export default function HeroBackground() {
  const theme = useTheme(); // "light" | "dark"

  return theme === "dark" ? (
    <FloatingLines
      enabledWaves={["top", "middle", "bottom"]}
      lineCount={[10, 15, 20]}
      lineDistance={[8, 6, 4]}
      bendRadius={5}
      bendStrength={-0.5}
      interactive
      parallax
    />
  ) : (
    <GridDistortion
      imageSrc="/light-hero-bg.jpg"
      grid={10}
      mouse={0.1}
      strength={0.15}
      relaxation={0.9}
    />
  );
}
