import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";

export const Home = () => (
  <section className="min-h-screen container-xl lg:container m-auto flex flex-col justify-center items-center">
    <Hero />
    <p className="mt-4 text-lg pl-2 pr-2">
      I am a Front-end Developer passionate about creating beautiful and
      functional web applications.
    </p>
    <HomeCard />
  </section>
);
export default Home;
