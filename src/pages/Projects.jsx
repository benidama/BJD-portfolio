import ProjectCard from "../components/ProjectCard";

const Projects = () => (
  <section className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl pt-3 font-bold">
      Welcome to My Projects
    </h1>
    <ProjectCard />
  </section>
);
export default Projects;
