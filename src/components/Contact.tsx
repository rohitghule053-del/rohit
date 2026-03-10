import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        <div className="contact-flex">

          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:hello@edhaa.com" data-cursor="disable">
                hello@edhaa.com
              </a>
            </p>

            <h4>Location</h4>
            <p>Pune, India</p>
          </div>

          <div className="contact-box">
            <h4>Follow EDHAA</h4>

            <a
              href="#"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>

            <a
              href="#"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Facebook <MdArrowOutward />
            </a>

            <a
              href="#"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              YouTube <MdArrowOutward />
            </a>

            <a
              href="#"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              WhatsApp <MdArrowOutward />
            </a>
          </div>

          <div className="contact-box">
            <h2>
              Designed for <br /> <span>EDHAA</span>
            </h2>

            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;