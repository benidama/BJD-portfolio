import portfolio from "../images/portfolio.jpg";
import commerce from "../images/ecommerce.jpg";
import quiz from "../images/quiz.jpg";
import filter from "../images/filter.jpg";
import job from "../images/jobs.jpg";
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
      name: "iHUZA INVENTORY",
      description:
        "For this app, you need to login by using Admin as username and Estote123 as password",
      image: form,
      liveLink: "https://i-huzo-invertory-solvit.vercel.app/login",
    },
    {
      name: "Job listing app",
      description:
        "This app help us to get react job or adding new jobs also you can edit or delete a job",
      image: job,
      liveLink: "https://react-jobs-gray.vercel.app/",
    },
    {
      name: "Time Tracker app",
      description:
        "It’s an app for users that tracks how you spend your time—categorizing tasks, spotting distractions, and helping you build better work habits—while keeping all your data private and stored on your device.",
      image: filter,
      liveLink: "https://time-mgmt-tracker-solvit.vercel.app/",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center my-8">
        <p className="text-gray-600 mt-2">
          Here are some of the projects I have worked on.
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
