import React from "react";

const projects = [
  {
    name: "Portfolio Website",
    description:
      "A responsive personal portfolio built with React and Tailwind CSS.",
    image:
      "https://designnotes.blog.gov.uk/wp-content/uploads/sites/53/2020/06/Portfolio-Desk.jpg", // Replace with your project screenshot
    liveLink: "https://ui-big-project.vercel.app/",
    githubLink: "https://github.com/benidama/portfolio",
  },
  {
    name: "E-Commerce App",
    description: "A modern e-commerce platform with a user-friendly interface.",
    image:
      "https://www.rexoit.com/assets/uploads/media-uploader/e-commerce1618296228.png",
    liveLink: "https://all-about-react-js.vercel.app/",
    githubLink: "https://github.com/benidama/allAbout-ReactJS",
  },
  {
    name: "Small website",
    description: "It shows you all our products and how you can get it.",
    image:
      "https://img.freepik.com/free-vector/business-landing-page-template-with-photo_23-2148246289.jpg?semt=ais_hybrids",
    liveLink: "https://benidama.github.io/online-shopping-website/",
    githubLink: "https://github.com/benidama/online-shopping-website",
  },
  {
    name: "Weather App",
    description: "A weather forecasting app using OpenWeather API.",
    image: "https://cdn-icons-png.flaticon.com/512/3845/3845731.png",
    liveLink: "https://benidama.github.io/profile-cards/",
    githubLink: "https://github.com/benidama/profile-cards",
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
