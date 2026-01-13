import { Button } from "@/components/ui/button";

const LandingPage = () => {
  return (
    <div>
        <h1 className="text-3xl">LandingPage</h1>
        <Button variant={"destructive"}>Click me </Button>
        <Button variant={"ghost"}>Click me </Button>
        <Button variant={"link"}>Click me </Button>
        <Button variant={"secondary"}>Click me </Button>
        <Button variant={"outline"}>Click me </Button>
    </div>
  )
}

export default LandingPage;