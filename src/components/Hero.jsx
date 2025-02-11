import profile from "../images/me.jpg";
import { useState } from "react";

const Hero = ({ title = "Hi, Welcome to My Portfolio" }) => {
  let paragraph =
    "I'am Jean Damascene BENIMANA, a passionate Front-End Developer with a knack for crafting visually appealing, user-friendly, and responsive web applications. With expertise in HTML, CSS (Tailwind CSS), JavaScript, React js, and basic knowledge on node js or back-end. I bring ideas to life through clean, efficient code and intuitive designs. Whether it's building interactive interfaces or solving complex UI challenges, I’m committed to delivering seamless user experiences.";

  const [showMore, setShowMore] = useState(false);
  if (!showMore) {
    paragraph = paragraph.substring(0, 370) + "...";
  }

  return (
    <section className="bg-indigo-700 py-10 mb-4 mt-4 flex flex-row md:rounded-3xl">
      <div className="mx-5 w-[340px] hidden md:block">
        <img
          className="min-w-[255px] h-[250px] rounded-3xl hidden md:block"
          src={profile}
          alt="My profile"
        />
        <p className="text-center text-xl text-white mt-2 hidden md:block w-[200x]">
          Front-end Web Developer
        </p>
      </div>
      <div className="max-w-7xl mx-5 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white pb-2 sm:text-xl md:text-4xl">
            {title}
          </h1>

          <div>
            <p className="md:text-xl text-white text-left sm:text-sm">
              {paragraph}
              <span
                onClick={() => setShowMore((prevState) => !prevState)}
                className="text-cyan-400 mb-5 hover:text-pink-600 text-xl pl-3 underline"
              >
                {showMore ? "Less Info" : "More Info"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
