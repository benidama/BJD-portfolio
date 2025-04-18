import { Link } from "react-router-dom";
import Card from "./Card";

const HomeCard = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <h2 className="text-2xl font-bold">For Front-end Projects</h2>
            <p className="mt-2 mb-4">
              List of Front-end projects where I developed them by using HTML,
              CSS, JS, Bootstrap, React Js and Tailwind css technologies. Click
              the button below to see my front-end projects.
            </p>
            <Link
              to="/projects"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Front-end Projects
            </Link>
          </Card>
          <Card bg="bg-indigo-100">
            <h2 className="text-2xl font-bold">For Back-end Projects</h2>
            <p className="mt-2 mb-4">
              List of back-end projects where I will need to know Express.js,
              MySQL/PostgreSQL,JSON Web Tokens (JWT) for user authentication,and
              dotenv in to back-end projects.Even if I have some basic
              knowledge.
            </p>
            <Link
              to="*"
              className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              Back-end Projects
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default HomeCard;
