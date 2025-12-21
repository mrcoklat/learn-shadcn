import HeroBackground from "@/components/home/HeroBackground";
import RotatingText from "@/components/home/RotatingText";
import { PointerHighlight } from "@/components/home/pointer-highlight";

export default function Home() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0">
        <HeroBackground />
      </div>
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="flex gap-8 items-center justify-center w-full">
          <div>
            <div className="mb-10 text-4xl font-bold flex items-center justify-start gap-2">
              <span>I&apos;m Ajimar, doing</span>
              <RotatingText
                texts={["Frontend", "Backend", "Full Stack", "Mobile"]}
                mainClassName="w-50 px-2 sm:px-2 md:px-3 bg-chart-4 text-primary overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
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
            <div className="mb-40 flex text-lg font-bold tracking-tight">
              <span>From slow-motion paperwork to&nbsp;</span>
              <PointerHighlight
                rectangleClassName="bg-chart-4 border-foreground leading-loose"
                pointerClassName="text-chart-4 h-3 w-3"
                containerClassName="inline-block mr-1"
              >
                <span className="relative z-10">instant one-click.</span>
              </PointerHighlight>
            </div>
            <div className="flex gap-6 pointer-events-auto">
              <a href="#contact">
                <button className="bg-foreground text-background px-6 py-2 rounded-full font-bold hover:bg-primary hover:text-primary-foreground transition duration-200 w-36">
                  Contact Me
                </button>
              </a>
              <a href="#projects">
                <button className="border border-foreground text-foreground px-6 py-2 rounded-full font-bold bg-transparent hover:bg-foreground hover:text-background transition duration-200 w-36">
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
