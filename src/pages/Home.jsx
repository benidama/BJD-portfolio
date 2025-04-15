import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";

const Home = () => (
  <section className="min-h-screen px-4 py-8 mx-auto max-w-7xl flex flex-col justify-center items-center">
    <Hero />
    <p className="mt-4 text-base sm:text-lg md:text-xl text-center text-gray-700">
      I am a Front-end Developer passionate about creating beautiful and
      functional web applications.
    </p>
    <div className="w-full mt-5">
      <HomeCard />
    </div>
  </section>
);

export default Home;
