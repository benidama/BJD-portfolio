import fb from "../images/footer/Facebook.png";
import ig from "../images/footer/Instagram.png";
import x from "../images/footer/Twitter.png";
import linkedIn from "../images/footer/LinkedIn.png";
import footerlogo from "../images/footer/BJD-favicon.png";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="bg-[rgba(29,33,48,1)] flex flex-col gap-5 p-10 justify-center items-center">
      <div className="flex flex-row justify-between items-start gap-24">
        <div className="flex flex-col justify-between items-start">
          <ul className="flex flex-col justify-center items-start gap-1">
            <li>
              <h1 className="text-[rgba(255,255,255,1)] font-normal text-xl">
                Project
              </h1>
            </li>

            <li>
              <a
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                href="/about"
              >
                Why Choose us
              </a>
            </li>
            <li>
              <a
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                href="/about"
              >
                About Us
              </a>
            </li>

            <li>
              <a
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                href="/projects"
              >
                Testimonial
              </a>
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
              <a
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                href="/about"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                href="/"
              >
                Terms and Condition
              </a>
            </li>
            <li>
              <a
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                href="/projects"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                href="/projects"
              >
                Contact Us
              </a>
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
              <a
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                href="/about"
              >
                Project management
              </a>
            </li>

            <li>
              <a
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                href="/"
              >
                Time schedule
              </a>
            </li>
            <li>
              <a
                className="text-[rgba(255,255,255,1)] font-normal text-xs"
                href="/"
              >
                Lead generate
              </a>
            </li>
            <li>
              <a
                className="text-[rgba(255,255,255,1)] font-light text-xs"
                href="/contact"
              >
                Remote Collaboration
              </a>
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
            className="bg-[rgba(43,46,60,1)] flex justify-between items-center flex-row h-10 w-[270px] pl-3 pr-1 rounded-lg mb-7"
          >
            <input
              className="text-[rgba(255,255,255,1)] bg-[rgba(43,46,60,1)] font-light text-sm"
              type="text"
              id="inptForm"
              placeholder="Enter your Email"
            />

            <button className="bg-[rgba(255,255,255,1)] w-32 p-3 h-10 rounded-md text-center text-[rgba(29,33,48,1)] font-medium text-sm">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center gap-3">
        <hr className="border-[rgba(136,136,136,1)] border-[1px] w-[350px]" />
        <h4 className="text-[rgba(255,255,255,1)] font-light text-xs">
          © Copyright Jean Damascene {date}
        </h4>
        <img src={fb} alt="Facebook logo" />
        <img src={x} alt="Twitter logo" />
        <img src={ig} alt="Instagram logo" />
        <img src={linkedIn} alt="LinkedIn logo" />
        <hr className="border-[rgba(136,136,136,1)] boInstagram logorder-[1px] w-[350px]" />
      </div>
    </footer>
  );
}

export default Footer;
