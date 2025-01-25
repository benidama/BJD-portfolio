import React from "react";

const Info = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
        <p className="text-gray-600 mt-2">
          Hi, I’m{" "}
          <span className="text-blue-500 font-semibold">Jean Damascene</span>, a
          passionate Front-end Developer based in Kigali.
        </p>
      </header>

      <main className="max-w-4xl bg-white shadow-lg rounded-2xl p-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            My Journey
          </h2>
          <p className="text-gray-600">
            I am highly motivated and oriented Front-End Web Developer with
            hands-on experience in creating dynamic, user-friendly web
            applications. I started my journey in 2021 by Self-taught in key web
            technologies such as HTML, CSS, JavaScript, and ReactJS, followed by
            a bootcamp at ALX-Africa in 2024 where I got skills in front-end
            development. Adept at building interactive websites with modern
            tools, responsive design principles, and a strong understanding of
            performance optimization. Now, I am able to apply my front-end
            skills by building intuitive web applications.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <span className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
              HTML
            </span>
            <span className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
              Tailwind CSS
            </span>
            <span className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
              JavaScript
            </span>
            <span className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
              React JS
            </span>

            <a className="mt-3" href="/projects">
              <span className="bg-indigo-700 p-4 rounded-lg text-white shadow-md text-center">
                View my work
              </span>
            </a>

            <a
              className="mt-3"
              href="https://drive.google.com/file/d/1mVcqagHWoSNi_BcePoivGmTYwI4j5EoO/view?usp=sharing"
              target="_blank"
            >
              <span className="bg-indigo-700 p-4 rounded-lg text-white shadow-md text-center">
                More Info
              </span>
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600">
            I’d love to hear from you! Feel free to reach out via email at{" "}
            <a href="mailto:benidama02@gmail.com" className="text-blue-500">
              benidama02@gmail.com
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
};

export default Info;
