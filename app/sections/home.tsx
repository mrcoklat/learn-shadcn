import HeroBackground from "@/components/home/HeroBackground";
import RotatingText from "@/components/home/RotatingText";
import TrueFocus from "@/components/home/TrueFocus";

export default function Home() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0">
        <HeroBackground />
      </div>
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div>
          <div className="text-4xl font-bold flex items-center gap-2 mb-5">
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
          </div>
          <TrueFocus
            sentence="From paperwork_to_one-click operations."
            separator="_"
            manualMode={false}
            blurAmount={5}
            borderColor="purple"
            animationDuration={0.5}
            pauseBetweenAnimations={0.5}
            className="text-xl"
          />
        </div>
      </div>
    </div>
  );
}
