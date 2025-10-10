import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { Contact, FolderDot, House, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col items-center justify-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          className=""
          navItems={[
            { name: "Home", link: "/", icon: <House /> },
            { name: "About", link: "/about", icon: <Contact /> },
            { name: "Projects", link: "/projects", icon: <FolderDot /> },
            { name: "Contact", link: "/contact", icon: <Mail /> },
          ]}
        />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
