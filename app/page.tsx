// app/page.tsx
"use client";

import GridDistortion from "@/components/GridDistortion";
import { useTheme } from "@/hooks/use-theme"; // same tiny hook as above

export default function Home() {
  const theme = useTheme();

  // pick image per theme
  const imgSrc =
    theme === "dark"
      ? "https://fastly.picsum.photos/id/347/1920/1080.jpg?grayscale&hmac=8XUmswASpSp-mR3phy8x_r_vjKtFqXQ5qC8iYxLD8s8" // any dark-ish photo
      : "https://fastly.picsum.photos/id/55/1920/1080.jpg?grayscale&hmac=UBKm1xFuVtKMUSEpWPNXRaL8KLQkBBS_JzQ7lEke_kM"; // light one

  return (
    <GridDistortion
      imageSrc={imgSrc}
      grid={10}
      mouse={0.1}
      strength={0.15}
      relaxation={0.9}
    />
  );
}
