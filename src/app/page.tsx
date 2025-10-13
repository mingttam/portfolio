import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import TechStacks from "@/components/TechStacks";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col items-center justify-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-[80vw] w-full">
        <FloatingNav className="" navItems={navItems} />
        <Hero />
        <Grid />
        <TechStacks />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
}
