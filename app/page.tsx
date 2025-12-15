import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme-toggle";
export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <ModeToggle />
      <div />
    </div>
  );
}
