import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Button>Click me</Button>
      <div className="bg-primary text-primary-foreground">Hello</div>
      <div className="bg-warning text-warning-foreground">Warning!</div>
      <div />
    </div>
  );
}
