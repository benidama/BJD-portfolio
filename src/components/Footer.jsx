import { NavLink } from "react-router-dom";
import fb from "../images/footer/Facebook.png";
import ig from "../images/footer/Instagram.png";
import x from "../images/footer/Twitter.png";
import linkedIn from "../images/footer/LinkedIn.png";
import footerlogo from "../images/footer/BJD-favicon.png";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="bg-[rgba(29,33,48,1)] flex flex-col gap-4 p-6 justify-center items-center">
      <div className="grid grid-cols-2 grid-rows-2 gap-2 md:gap-4 lg:grid-cols-4 lg:grid-rows-1 w-full md:w-2/3">
        <div className="flex flex-col justify-center items-start">
          <ul className="flex flex-col justify-center items-start gap-1">
            <li>
              <h1 className="text-[rgba(255,255,255,1)] font-normal text-xl">
                Project
              </h1>
            </li>
            <li>
              <NavLink
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                to="/about"
              >
                Why Choose us
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                to="/about"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                to="/projects"
              >
                Testimonial
              </NavLink>
            </li>
            <li className="pt-5">
              <a
                className="text-red-400 font-light text-xl"
                href="https://forms.gle/3YZRCicXGNQ2Moyx9"
                target="_blank"
              >
                Your comment
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-start">
          <ul className="flex flex-col justify-center items-start gap-1">
            <li>
              <h1 className="text-[rgba(255,255,255,1)] font-normal text-xl">
                Resources
              </h1>
            </li>
            <li>
              <NavLink
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                to="/about"
              >
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                to="/"
              >
                Terms and Condition
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                to="/projects"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                to="/projects"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-start">
          <ul className="flex flex-col justify-center items-start gap-1">
            <li>
              <h1 className="text-[rgba(255,255,255,1)] font-normal text-xl">
                Others
              </h1>
            </li>
            <li>
              <NavLink
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                to="/about"
              >
                Project management
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                to="/"
              >
                Time schedule
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-[rgba(255,255,255,1)] font-normal text-xs"
                to="/"
              >
                Lead generate
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                to="/contact"
              >
                Remote Collaboration
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-start gap-5">
          <img src={footerlogo} className="w-[65px]" alt="company logo" />
          <h3 className="text-[rgba(255,255,255,1)] font-normal text-sm">
            Subscribe to our Newsletter
          </h3>
          <form
            action=""
            className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full max-w-[270px] bg-slate-400 md:bg-[rgba(43,46,60,1)] pl-3 pr-1 py-2 rounded-lg mb-7 h-auto md:h-10 gap-3 md:gap-0"
          >
            <input
              className="text-white bg-[rgba(43,46,60,1)] h-8 font-light text-sm w-full md:w-auto px-2 py-2 md:py-0 rounded-md md:rounded-none"
              type="text"
              id="inptForm"
              placeholder="Enter your Email"
            />
            <button className="bg-white w-full md:w-32 px-3 h-10 rounded-md text-center text-[rgba(29,33,48,1)] font-medium text-sm">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="flex md:flex-row flex-col sm:flex-col justify-center items-center gap-3 w-full text-center">
        <hr className="border-[rgba(136,136,136,1)] border-[1px] w-[25px] md:w-[170px] hidden md:block" />
        <h4 className="text-[rgba(255,255,255,1)] font-light text-xs">
          © Copyright Jean Damascene {date}
        </h4>
        <div className="flex flex-row justify-center items-center gap-2">
          <a href="https://www.facebook.com/share/1HB7rqeN6Y/" target="_blank">
            <img src={fb} alt="Facebook logo" />
          </a>
          <a
            href="https://x.com/BenimanaJeanDa1?t=Yl_XBHHPZAWc8EXt7zr7Ag&s=09"
            target="_blank"
          >
            <img src={x} alt="Twitter logo" />
          </a>
          <a
            href="https://www.instagram.com/beni_dama?igsh=Y2ZwZTdtZGM1MTYw"
            target="_blank"
          >
            <img src={ig} alt="Instagram logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/jean-damascene-benimana-9001b7209/"
            target="_blank"
          >
            <img src={linkedIn} alt="LinkedIn logo" />
          </a>
        </div>
        <hr className="border-[rgba(136,136,136,1)] border-[1px] w-[25px] md:w-[350px] hidden md:block" />
      </div>
    </footer>
  );
}

export default Footer;
