import AboutMe from "@/components/pages/about-me";
import Contact from "@/components/pages/contact";
import Header from "@/components/pages/header";
import Introduce from "@/components/pages/home";
import ProjectList from "@/components/pages/projects";

export default function Home() {
  return (
    <div className="size-full">
      <Header />
      <Introduce />
      <ProjectList />
      <AboutMe />
      <Contact />
    </div>
  );
}
