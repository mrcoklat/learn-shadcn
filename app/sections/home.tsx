import HeroBackground from "@/components/home/HeroBackground";
import RotatingText from "@/components/home/RotatingText";
import { PointerHighlight } from "@/components/home/pointer-highlight";

export default function Home() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0">
        <HeroBackground />
      </div>
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center justify-center w-full max-w-6xl">
          <div className="text-center lg:text-left">
            <div className="mb-6 sm:mb-8 lg:mb-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl flex flex-col sm:flex-row font-bold items-center justify-center lg:justify-start gap-2">
              <span>I&apos;m Ajimar, doing</span>
              <div className="w-32 sm:w-40 md:w-48 lg:w-56">
                <RotatingText
                  texts={["Frontend", "Backend", "Full Stack", "Mobile"]}
                  mainClassName="px-2 sm:px-3 md:px-4 bg-chart-4 text-primary overflow-hidden py-1 sm:py-1.5 md:py-2 justify-center rounded-lg text-sm sm:text-base md:text-3xl lg:text-4xl"
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
            </div>
            <div className="mb-8 sm:mb-12 lg:mb-16 flex flex-col sm:flex-row text-sm sm:text-base lg:text-lg font-bold tracking-tight items-center justify-center lg:justify-start">
              <span>From slow-motion paperwork to&nbsp;</span>
              <PointerHighlight
                rectangleClassName="bg-chart-4 border-foreground leading-loose"
                pointerClassName="text-chart-4 h-2 w-2 sm:h-3 sm:w-3"
                containerClassName="inline-block mr-1"
              >
                <span className="relative z-10">instant one-click.</span>
              </PointerHighlight>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 pointer-events-auto items-center justify-center lg:justify-start">
              <a href="#contact">
                <button className="bg-foreground text-background px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-bold hover:bg-primary hover:text-primary-foreground transition duration-200 w-32 sm:w-36 text-sm sm:text-base">
                  Contact Me
                </button>
              </a>
              <a href="#projects">
                <button className="border border-foreground text-foreground px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-bold bg-transparent hover:bg-foreground hover:text-background transition duration-200 w-32 sm:w-36 text-sm sm:text-base">
                  Projects
                </button>
              </a>
            </div>
          </div>
          <div>{/* Another component goes here */}</div>
        </div>
      </div>
    </div>
  );
}
