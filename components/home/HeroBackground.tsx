"use client";

import PixelBlast from "@/components/home/PixelBlast";
import GridDistortion from "@/components/home/GridDistortion";
import { useTheme } from "@/hooks/use-theme";

export default function HeroBackground() {
  const theme = useTheme(); // "light" | "dark"

  return theme === "dark" ? (
    <PixelBlast
      variant="circle"
      pixelSize={5}
      color="#B19EEF"
      patternScale={2.75}
      patternDensity={1}
      pixelSizeJitter={0}
      enableRipples
      rippleSpeed={0.4}
      rippleThickness={0.12}
      rippleIntensityScale={1.5}
      liquid
      liquidStrength={0.12}
      liquidRadius={1.2}
      liquidWobbleSpeed={5}
      speed={1}
      edgeFade={0.25}
      transparent
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
