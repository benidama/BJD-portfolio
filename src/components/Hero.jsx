import profile from "../images/bjd-profile.jpg";
const Hero = ({
  title = "Hi, I'm Jean Damascene",
  subtitle = "A Front-end Developer specializing in React and Tailwind CSS",
}) => {
  return (
    <section className="bg-indigo-700 py-20 mb-4 flex flex-row">
      <div className="px-6">
        <img className="w-[200px] h-[150px]" src={profile} alt="My profile" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-3xl md:text-5xl">
            {title}
          </h1>
          <p className="my-4 text-xl text-white">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
