import React from "react";

function ContactForm() {
  return (
    <section>
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold">Get in Touch</h2>
        <p class="mt-4 text-lg">
          Feel free to reach out to discuss projects or collaborations.
        </p>
        <a
          href="mailto:benidama02@gmail.com"
          class="mt-6 inline-block bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default ContactForm;
