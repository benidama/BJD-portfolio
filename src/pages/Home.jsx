import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";

export const Home = () => (
  <section className="min-h-screen container-xl lg:container m-auto flex flex-col justify-center items-center">
    <Hero />
    <p className="mt-4 text-lg">
      I am a Front-end Developer passionate about creating beautiful and
      functional web applications.
    </p>
    <HomeCard />
  </section>
);
export default Home;
