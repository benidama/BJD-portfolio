import profile from "../images/me.jpg";
import { useState } from "react";

const Hero = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="bg-indigo-700 py-10 mb-4 mt-4 flex flex-col md:flex-row md:rounded-3xl items-center md:items-start">
      <div className="text-center max-w-3xl md:pl-3 space-y-3">
        <p className="text-center text-xl text-white leading-4 mt-2 w-full">
          Software Developer
        </p>
        <img
          className="w-full max-w-[250px] h-auto rounded-full"
          src={profile}
          alt="My profile"
        />
      </div>
      <div className="max-w-7xl mx-5 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white pb-2">
            Hi, Welcome to My Portfolio
          </h1>
          <div>
            <p className="md:text-xl text-white text-left sm:text-sm">
              {/* Small screens: show truncated text + toggle */}
              <span className="block sm:hidden">
                {showMore
                  ? "I'am Jean Damascene BENIMANA, a passionate Software Developer with a knack for crafting visually appealing, user-friendly, and responsive web applications. With expertise in HTML, CSS (Tailwind CSS), JavaScript, React js, and node js or back-end. I bring ideas to life through clean, efficient code and intuitive designs. Whether it's building interactive interfaces or solving complex UI challenges, I’m committed to delivering seamless user experiences."
                  : "I'am Jean Damascene BENIMANA, a passionate Software Developer with a knack for crafting visually appealing, user-friendly, and responsive web applications. With expertise in HTML, CSS (Tailwind CSS), JavaScript, React js, and node js or..."}
                <span
                  onClick={() => setShowMore((prev) => !prev)}
                  className="text-cyan-400 hover:text-teal-600 text-xl pl-2 underline cursor-pointer"
                >
                  {showMore ? "Less Info" : "More Info"}
                </span>
              </span>
              {/* Large screens: show full paragraph always */}
              <span className="hidden sm:block">
                I am Jean Damascene BENIMANA, a passionate Software Developer
                with a knack for crafting visually appealing, user-friendly, and
                responsive web applications. With expertise in HTML, CSS
                (Tailwind CSS), JavaScript, React js, and node js or back-end. I
                bring ideas to life through clean, efficient code and intuitive
                designs. Whether it is building interactive interfaces or
                solving complex UI challenges, I’m committed to delivering
                seamless user experiences.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
