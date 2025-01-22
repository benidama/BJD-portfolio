import ContactForm from "../components/ContactForm";

const Contact = () => (
  <section className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
    <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
    <p className="mt-4 text-lg">
      I am a Front-end Developer passionate about creating beautiful and
      functional web applications.
    </p>
    <ContactForm />
  </section>
);
export default Contact;
