import HeroBackground from "@/components/home/HeroBackground";
import RotatingText from "@/components/home/RotatingText";

export default function Home() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0">
        <HeroBackground />
      </div>
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <h1 className="text-4xl font-bold flex items-center gap-2">
          <span>I'm Ajimar, doing</span>
          <RotatingText
            texts={["Frontend", "Backend", "Full Stack", "Mobile"]}
            mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </h1>
      </div>
    </div>
  );
}
