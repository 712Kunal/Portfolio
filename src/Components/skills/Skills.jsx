import React, { useState, useEffect } from 'react';
import './Skills.scss';
import Skillicons from '../Skillicons';
import { motion } from 'framer-motion';

function Skills() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const textVariant = {
        animate: {
            color: 'cyan'
        }
    };

    const getBoxVariant1 = (isMobile) => ({
        initial: {
            x: isMobile ? 0 : -300,
            opacity: 0,
            boxShadow: '0px 0px 0px rgba(0,0,0,0)'
        },
        animate: {
            x: 0,
            opacity: 1,
            boxShadow: isMobile ? '0px 0px 50px magenta' : '0px 0px 100px magenta, 0px 0px 100px #7209b7',
            transition: {
                x: {
                    duration: isMobile ? 1 : 2,
                    type: 'spring',
                    stiffness: isMobile ? 50 : 100,
                    damping: 50
                },
                opacity: {
                    duration: isMobile ? 1 : 2,
                    delay: isMobile ? 0 : 0.5
                },
                boxShadow: {
                    duration: 1,
                    delay: isMobile ? 1 : 2,
                    type: 'spring',
                    stiffness: isMobile ? 50 : 100,
                    damping: 50
                }
            }
        }
    });
    

    const boxVariant1 = getBoxVariant1(isMobile);

    const boxVariant2 = {
        initial: {
            x: isMobile ? 0 : 300,
            opacity: 0,
            boxShadow: '0px 0px 0px rgba(0,0,0,0)'
        },
        animate: {
            x: 0,
            opacity: 1,
            boxShadow: isMobile ? '0px 0px 50px cyan' : '0px 0px 100px magenta, 0px 0px 100px cyan',
            transition: {
                x: {
                    duration: isMobile ? 1 : 2,
                    type: 'spring',
                    stiffness: isMobile ? 50 : 100,
                    damping: 50
                },
                opacity: {
                    duration: isMobile ? 1 : 2,
                    delay: isMobile ? 0 : 0.5
                },
                boxShadow: {
                    duration: 1,
                    delay: isMobile ? 1 : 2,
                    type: 'spring',
                    stiffness: isMobile ? 100 : 200,
                    damping: 50
                }
            }
        }
    };

    return (
        <div className='Skills-container'>
            <h1>
                <motion.p variants={textVariant} whileHover="animate">Explore My</motion.p>
                <p className='heading'>Skills</p>
            </h1>

            <div className='outer-container'>
                <motion.div className="development" variants={boxVariant1} initial="initial" whileInView="animate">
                    <h1>Development Skills</h1>
                    <div className='dev-languages'>
                        <Skillicons icon_slug="html5" icon_name="HTML" icon_level="Experienced" />
                        <Skillicons icon_slug="css3" icon_name="CSS" icon_level="Experienced" />
                        <Skillicons icon_slug="javascript" icon_name="JavaScript" icon_level="Intermediate" />
                        <Skillicons icon_slug="tailwindcss" icon_name="Tailwind CSS" icon_level="Intermediate" />
                        <Skillicons icon_slug="createreactapp" icon_name="React" icon_level="Intermediate" />
                        <Skillicons icon_slug="sass" icon_name="SASS" icon_level="Basic" />
                        <Skillicons icon_slug="appwrite" icon_name="Appwrite" icon_level="Basic" />
                    </div>
                </motion.div>

                <motion.div className="other" variants={boxVariant2} initial="initial" whileInView="animate">
                    <h1>Other Skills</h1>
                    <div className='other-languages'>
                        <Skillicons icon_slug="c/magenta" icon_name="C" icon_level="Experienced" />
                        <Skillicons icon_slug="cplusplus" icon_name="C++" icon_level="Experienced" />
                        <Skillicons icon_slug="python" icon_name="Python" icon_level="Basic" />
                        <Skillicons icon_slug="github/cyan" icon_name="Git" icon_level="Basic" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Skills;
