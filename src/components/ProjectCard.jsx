import React from "react";
import portfolio from "../images/portfolio.jpg";

const ProjectCard = () => {
  const projects = [
    {
      name: "Portfolio Website",
      description:
        "A responsive personal portfolio built with React and Tailwind CSS.",
      // image: " portfolio ",
      liveLink: "https://bjd-portfolio.vercel.app/",
      githubLink: "https://github.com/benidama/BJD-portfolio",
    },
    {
      name: "Commerce App",
      description:
        "A modern commerce platform with a user-friendly interface. Moreover, it is still under development project",
      // image: " commerce",
      liveLink: "https://all-about-react-js.vercel.app/",
      githubLink: "https://github.com/benidama/allAbout-ReactJS",
    },
    {
      name: "Quiz App",
      description:
        "After submitting your work you get points. where, questions come randomly",
      // image: " commerce",
      liveLink: "https://react-quiz-app-five-gamma.vercel.app/",
      githubLink: "https://github.com/benidama/React-quiz-app",
    },
    {
      name: "Form validation",
      description:
        "This form will help us to get user information. Moreover, it is still under development project",
      // image: "small ",
      liveLink: "https://benidama.github.io/Registration-form/",
      githubLink: "https://github.com/benidama/Registration-form",
    },
    {
      name: "Job listing app",
      description:
        "This app help us to get react job or adding new jobs also you can edit or delete a job",
      // image: <weather/>,
      liveLink: "https://react-jobs-gray.vercel.app/",
      githubLink: "https://github.com/benidama/React-jobs",
    },
    {
      name: "Filter object app",
      description:
        "This app help us to get react job or adding new jobs also you can edit or delete a job",
      // image: <weather/>,
      liveLink: "https://benidama.github.io/Filfterobject/filer.html",
      githubLink: "https://github.com/benidama/Filfterobject",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center my-8">
        <p className="text-gray-600 mt-2">
          Here are some of the projects I've worked on.
        </p>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={portfolio}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {project.name}
              </h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <div className="mt-4 flex justify-between">
                <a
                  href={project.liveLink}
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  Read More
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  className="text-gray-600 hover:text-gray-800"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default ProjectCard;
