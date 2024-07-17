import React from 'react'
import "./Projects.scss"
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion"
import Appwrite from "../../assets/appwrite.png"
import Pexelet from "../../assets/pexelet.png"
import Global from "../../assets/global.png"
import Currency from "../../assets/currency.png"

function Projects() {
    const projectBox = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.8,
            }
        }
    };

    const projectItem = {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className='project-container'>
            <h1>
                Projects
            </h1>

            <motion.div className='projects' variants={projectBox} initial="initial" whileInView="animate">
                <motion.div className='single-project' variants={projectItem}>
                    <img src={Appwrite} alt="appwrite" />
                    <div className="Intro">
                        <h2>Appwrite MegaBlog</h2>
                        <div className="stack">
                            <img src="https://cdn.simpleicons.org/createreactapp" alt="React.js" />
                            <img src="https://cdn.simpleicons.org/tailwindcss" alt="tailwindcss" />
                            <img src="https://cdn.simpleicons.org/appwrite" alt="appwrite" />
                        </div>
                    </div>
                    <p>
                        A web service to create, delete, update blogs by the user with
                        secured user Authentication.
                    </p>

                    <div className="buttons">
                        <button><a href="https://mega-blog-inky.vercel.app/">Live Demo <FaExternalLinkAlt /></a></button>
                        <button><a href="https://github.com/712Kunal/Mega-Blog">Github Repo <img style={{ width: "30px", height: "30px" }} src="https://cdn.simpleicons.org/github/cyan" alt="github" /></a></button>
                    </div>
                </motion.div>

                <motion.div className='single-project' variants={projectItem}>
                    <img src={Pexelet} alt="pexelet" />
                    <div className="Intro">
                        <h2>Pexelet</h2>
                        <div className="stack">
                            <img src="https://cdn.simpleicons.org/html5" alt="HTML" />
                            <img src="https://cdn.simpleicons.org/css3" alt="css" />
                            <img src="https://cdn.simpleicons.org/javascript" alt="javaScript" />
                        </div>
                    </div>
                    <p>
                        A website where user can browse, view and download images taken by various
                        world wide photographers, with information about its creator.
                    </p>

                    <div className="buttons">
                        <button><a href="https://712kunal.github.io/image-gallery/">Live Demo <FaExternalLinkAlt /></a></button>
                        <button><a href="https://github.com/712Kunal/image-gallery">Github Repo <img style={{ width: "30px", height: "30px" }} src="https://cdn.simpleicons.org/github/cyan" alt="github" /></a></button>
                    </div>
                </motion.div>

                <motion.div className='single-project' variants={projectItem}>
                    <img src={Global} alt="global" />
                    <div className="Intro">
                        <h2>Global Updates</h2>
                        <div className="stack">
                            <img src="https://cdn.simpleicons.org/html5" alt="HTML" />
                            <img src="https://cdn.simpleicons.org/css3" alt="css" />
                            <img src="https://cdn.simpleicons.org/javascript" alt="javaScript" />
                        </div>
                    </div>
                    <p>
                        Created an Online news portal providing up-to-date news from around the world,
                        covering various categories such as politics, technology, sports, and entertainment.
                    </p>

                    <div className="buttons">
                        <button><a href="https://github.com/712Kunal/News-App">Live Demo <FaExternalLinkAlt /></a></button>
                        <button><a href="https://github.com/712Kunal/News-App">Github Repo <img style={{ width: "30px", height: "30px" }} src="https://cdn.simpleicons.org/github/cyan" alt="github" /></a></button>
                    </div>
                </motion.div>

                <motion.div className='single-project' variants={projectItem}>
                    <img src={Currency} alt="currency" />
                    <div className="Intro">
                        <h2>Currency Converter</h2>
                        <div className="stack">
                            <img src="https://cdn.simpleicons.org/createreactapp" alt="React.js" />
                            <img src="https://cdn.simpleicons.org/tailwindcss" alt="tailwindcss" />
                        </div>
                    </div>
                    <p>
                        Developed an application that provides up-to-date currency conversions.
                    </p>

                    <div className="buttons">
                        <button><a href="https://712kunal.github.io/Currency-Converter/">Live Demo <FaExternalLinkAlt /></a></button>
                        <button><a href="https://github.com/712Kunal/Currency-Converter">Github Repo <img style={{ width: "30px", height: "30px" }} src="https://cdn.simpleicons.org/github/cyan" alt="github" /></a></button>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Projects;
