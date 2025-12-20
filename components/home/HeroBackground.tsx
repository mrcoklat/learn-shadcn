"use client";

import LiquidEther from "@/components/home/LiquidEther";
import GridDistortion from "@/components/home/GridDistortion";
import { useTheme } from "@/hooks/use-theme";

export default function HeroBackground() {
  const theme = useTheme(); // "light" | "dark"

  return theme === "dark" ? (
    <LiquidEther
      colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
      mouseForce={20}
      cursorSize={100}
      isViscous={true}
      viscous={30}
      iterationsViscous={32}
      iterationsPoisson={32}
      resolution={0.5}
      isBounce={false}
      autoDemo={true}
      autoSpeed={0.5}
      autoIntensity={2.2}
      takeoverDuration={0.25}
      autoResumeDelay={3000}
      autoRampDuration={0.6}
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
