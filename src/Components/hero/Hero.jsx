import React from 'react'
import "./Hero.scss"
import { motion } from "framer-motion"
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import me from "../../assets/assets/Me.png"
import scroll from "../../assets/scroll.png"

const textVariants = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            duration: 1
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}

const sliderVariants = {
    initial: {
        x: 0
    },
    animate: {
        x: "-620%",
        transition: {
            duration: 20,
            repeatType: "mirror",
            repeat: Infinity
        }
    }
}

const handleSubmit = () => {
    const contact = document.querySelector('#Contact');
    contact.scrollIntoView({ behavior: "instant" });
}

const handleResume = () => {
    window.open("https://drive.google.com/file/d/1Iv5h8z0GGqDGa8Z0Nirot6rZK7toIMwZ/view?usp=drive_link", "_blank");
}

const handlescroll = () => {
    const scroll = document.querySelector("#Home");
    scroll.scrollIntoView({ behavior: "smooth" });
}

function Hero() {
    return (
        <div className="heroSection">

            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 className=''>Hello, I am</motion.h2>
                    <motion.span initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                        Kunal Jadhav
                    </motion.span>
                    <motion.h2>Junior Frontend Developer</motion.h2>
                    <motion.div className="buttons">
                        <button onClick={handleResume}>Resume <FaExternalLinkAlt /></button>
                        <button onClick={handleSubmit}>Contact Me <FaPhone /></button>
                    </motion.div>
                    <motion.img onClick={handlescroll} src={scroll} alt="scroll" variants={textVariants} animate="scrollButton" />
                </motion.div>
            </div>

            <motion.div className="slidingTextContainer" variants={sliderVariants}
                initial="initial" animate="animate">
                Web Designer Frontend Developer
            </motion.div>

            <div className="imageContainer">
                <img src={me} alt="heroImage" />
            </div>
        </div>
    )
}

export default Hero