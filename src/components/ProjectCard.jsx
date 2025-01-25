import React from "react";

const projects = [
  {
    name: "Portfolio Website",
    description:
      "A responsive personal portfolio built with React and Tailwind CSS.",
    image:
      "https://imagekit.io/blog/content/images/2019/12/image-optimization.jpg", // Replace with your project screenshot
    liveLink: "https://ui-big-project.vercel.app/",
    githubLink: "https://github.com/benidama/portfolio",
  },
  {
    name: "E-Commerce App",
    description: "A modern e-commerce platform with a user-friendly interface.",
    image: "https://via.placeholder.com/400x300",
    liveLink: "https://ecommerce-example.com",
    githubLink: "https://github.com/benidama/ecommerce",
  },
  {
    name: "Weather App",
    description: "A weather forecasting app using OpenWeather API.",
    image: "https://via.placeholder.com/400x300",
    liveLink: "https://weather-example.com",
    githubLink: "https://github.com/benidama/weather-app",
  },
];

const ProjectCard = () => {
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
              src={project.image}
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
                  Live Demo
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
