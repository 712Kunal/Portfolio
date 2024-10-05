import React, { useState } from "react";
import Links from "../Links/Links";
import ToggleBtn from "../togglebutton/ToggleBtn";
import { delay, motion } from "framer-motion";
import "./SideBar.scss";

function SideBar() {
  const [open, setOpen] = useState(false);

  const circlevariants = {
    open: {
      clipPath: "circle(1200px)",
      transition: {
        type: "tween",
        duration: 1,
        ease: "easeOut",
      },
    },
    closed: {
      clipPath: "circle(25px at 45px 50px)",
      transition: {
        type: "tween",
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="outer-side flex flex-col items-center justify-center
     text-black z-50"
      animate={open ? "open" : "closed"}
    >
      <motion.div
        className="inner-side fixed top-0 left-0 bottom-0 bg-white w-72"
        variants={circlevariants}
      >
        <Links setOpen={setOpen} open={open} />
      </motion.div>
      <ToggleBtn setOpen={setOpen} open={open} />
    </motion.div>
  );
}

export default SideBar;
