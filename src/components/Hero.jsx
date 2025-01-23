import profile from "../images/bjd-profile.jpg";
const Hero = ({ title = "Hi, I'm Jean Damascene" }) => {
  return (
    <section className="bg-indigo-700 py-10 mb-4 flex flex-row rounded-3xl">
      <div className="mx-5 w-[800px]">
        <img
          className="w-[255px] h-[160px] rounded-3xl"
          src={profile}
          alt="My profile"
        />
      </div>
      <div className="max-w-7xl mx-5 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-3xl md:text-5xl">
            {title}
          </h1>
          <p className="my-4 text-xl text-white text-left">
            Hi, I'm Jean Damascene BENIMANA, a passionate Front-End Developer
            with a knack for crafting visually appealing, user-friendly, and
            responsive web applications. With expertise in HTML, CSS (Tailwind
            CSS), JavaScript, and React.js, I bring ideas to life through clean,
            efficient code and intuitive designs. Whether it's building
            interactive interfaces or solving complex UI challenges, I’m
            committed to delivering seamless user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
