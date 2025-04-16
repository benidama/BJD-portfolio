import portfolio from "../images/portfolio.jpg";
import commerce from "../images/ecommerce.jpg";
import job from "../images/job.jpg";
import filter from "../images/filter.jpg";
import quiz from "../images/quiz.jpg";
import form from "../images/form.jpg";

const ProjectCard = () => {
  const projects = [
    {
      name: "Portfolio Website",
      description:
        "A responsive personal portfolio built with React and Tailwind CSS.",
      image: portfolio,
      liveLink: "https://bjd-portfolio.vercel.app/",
    },
    {
      name: "Commerce App",
      description:
        "A modern commerce platform with a user-friendly interface. Moreover, it is still under development project",
      image: commerce,
      liveLink: "https://all-about-react-js.vercel.app/",
    },
    {
      name: "Quiz App",
      description:
        "After submitting your work you get points. where, questions come randomly",
      image: quiz,
      liveLink: "https://react-quiz-app-five-gamma.vercel.app/",
    },
    {
      name: "Form validation",
      description:
        "This form will help us to get user information. Moreover, it is still under development project",
      image: form,
      liveLink: "https://benidama.github.io/Registration-form/",
    },
    {
      name: "Job listing app",
      description:
        "This app help us to get react job or adding new jobs also you can edit or delete a job",
      image: job,
      liveLink: "https://react-jobs-gray.vercel.app/",
    },
    {
      name: "Filter object app",
      description:
        "This app help us to get react job or adding new jobs also you can edit or delete a job",
      image: filter,
      liveLink: "https://benidama.github.io/Filfterobject/filer.html",
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
                  Read More
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
