import React from "react";
import "./Navbar.scss";
import { animate, motion } from "framer-motion";
import SideBar from "../sidebar/SideBar";
import linkedin from "../../assets/linkedin.png";
import insta from "../../assets/instagram.png";
import git from "../../assets/github.png";
import twitter from "../../assets/twitter.jpg";

function Navbar() {
  return (
    <div className="navbar">
      <SideBar />
      <motion.div
        className="socials"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 30,
        }}
      >
        <a
          href="https://www.linkedin.com/in/kunal-jadhav-9145ab257/"
          target="_blank"
        >
          <img className="linkedin" src={linkedin} alt="linkedin" />
        </a>
        <a href="https://github.com/712Kunal" target="_blank">
          <img src={git} alt="github" />
        </a>
        <a href="https://x.com/KunalJadhav712" target="_blank">
          <img src={twitter} alt="twitter" />
        </a>
        <a
          href="https://www.instagram.com/kunal_712_/?next=%2F"
          target="_blank"
        >
          <img src={insta} alt="instagram" />
        </a>
      </motion.div>
    </div>
  );
}

export default Navbar;
