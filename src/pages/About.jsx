const About = () => (
  <section className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
    <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
    <p className="mt-4 text-lg">
      I am a Front-end Developer passionate about creating beautiful and
      functional web applications.
    </p>
    <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">
      <a href="/projects">View My Work</a>
    </button>
  </section>
);

export default About;
