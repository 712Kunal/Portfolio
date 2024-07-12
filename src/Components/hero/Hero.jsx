import React from 'react'
import "./Hero.scss"
import { motion } from "framer-motion"


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
                        <button>See the Latest Works</button>
                        <button>Contact Me</button>
                    </motion.div>
                    <motion.img src="/scroll.png" alt="scroll" variants={textVariants} animate="scrollButton" />
                </motion.div>
            </div>

            <motion.div className="slidingTextContainer" variants={sliderVariants}
                initial="initial" animate="animate">
                Web Designer Frontend Developer
            </motion.div>

            <div className="imageContainer">
                <img src="/Me.png" alt="heroImage" />
            </div>
        </div>
    )
}

export default Hero