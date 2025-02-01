import React from "react";

const ContactForm = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold text-gray-800">Contact Me</h1>
        <p className="text-gray-600 mt-2">
          I’d love to hear from you! Feel free to reach out using the form below
          or via email.
        </p>
      </header>

      <main className="max-w-4xl bg-white shadow-lg rounded-2xl p-8">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="youremail@example.com"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-gray-700 font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Subject"
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows="5"
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            You can also reach me at{" "}
            <a
              href="mailto:benidama02@gmail.com"
              className="text-blue-500 hover:underline"
            >
              benidama02@gmail.com
            </a>{" "}
            or call me at{" "}
            <a
              href="tel:+250781984294"
              className="text-blue-500 hover:underline"
            >
              +250 781 984 294
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
};

export default ContactForm;
