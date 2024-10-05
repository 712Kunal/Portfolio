import React, { useRef, useState } from "react";
import "./Contact.scss";
import { PiWhatsappLogoFill } from "react-icons/pi";
import { IoIosMailOpen } from "react-icons/io";
import { FaAddressCard } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import conf from "../config/Config";

function Contact() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const ref = useRef();
  const useinview = useInView(ref);
  const formRef = useRef();

  const handleInputChange = (e) => {
    //destructuring
    const { name, value } = e.target;
    setFormData((prevdata) => ({ ...prevdata, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(conf.serviceKey, conf.templateKey, formRef.current, {
        publicKey: conf.publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setError(false);
          setSuccess(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error.text);
          setError(true);
          setSuccess(false);
        }
      );
  };

  const variants = {
    initial: {
      opacity: 0,
      y: 500,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's work together</motion.h1>

        <div className="contact-items">
          <motion.div className="item" variants={variants}>
            <motion.div className="flex items-center gap-2" variants={variants}>
              <IoIosMailOpen size={32} color="cyan" />
              <h2>Mail</h2>
            </motion.div>
            <span>jadhavkun0@gmail.com</span>
          </motion.div>

          <motion.div className="item" variants={variants}>
            <motion.div className="flex items-center gap-2" variants={variants}>
              <FaAddressCard color="cyan" size={32} />
              <h2>Address</h2>
            </motion.div>
            <span>Pune</span>
          </motion.div>

          <motion.div className="item" variants={variants}>
            <motion.div className="flex items-center gap-2" variants={variants}>
              <PiWhatsappLogoFill color="cyan" size={32} />
              <h2>Phone</h2>
            </motion.div>
            <span>+ 91 | 7447742990</span>
          </motion.div>
        </div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg
            width="450px"
            height="450px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <motion.path
                initial={{ pathLength: 0 }}
                animate={useinview && { pathLength: 1 }}
                transition={{ duration: 3 }}
                strokeWidth={0.2}
                d="M14 2C14 2 16.2 2.2 19 5C21.8 7.8 22 10 22 10"
                stroke="#f6f93e"
              ></motion.path>{" "}
              <path
                d="M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829"
                stroke="#f6f93e"
              ></path>
              <path
                d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372
                            8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147
                            9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 
                            15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853
                            14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838
                            13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258
                            19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183
                            19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655
                            7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076
                            3.54428 9.15317 3.73144 10.0376 5.31617Z"
                stroke="#f6f93e"
              ></path>
            </g>
          </svg>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <input
            type="text"
            placeholder="Name"
            required
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />

          <input
            type="email"
            placeholder="Email"
            required
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />

          <textarea
            rows={8}
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />

          <button>Submit</button>
          {success && (
            <p className="text-xl text-green-400">
              Your message has been sent successfully !!
            </p>
          )}
          {error && (
            <p className="text-xs text-red-400">
              Failed to send the message. Please try again later
            </p>
          )}
        </motion.form>
      </div>
    </motion.div>
  );
}

export default Contact;
