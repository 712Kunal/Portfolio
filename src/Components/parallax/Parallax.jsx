import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Parallax.scss";
import planets from "../../assets/planets.png"
import sun from "../../assets/sun.png"


function Parallax(props) {
    const elementRef = useRef();

    const { scrollYProgress } = useScroll({
        target: elementRef,
        offset: ["start start", "end start"]
    });

    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

    return (
        <div ref={elementRef} className={`Parallax ${props.type === "About" ? 'bg-gradient1' : 'bg-gradient2'}`}>
            <motion.h1 style={{ y: yText }}>
                {props.type === "About" ? "Who am I ?" : "What I did ?"}
            </motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div style={{
                y: yBg,
                backgroundImage: `url(${props.type === "About" ? planets : sun})`
            }} className="planets"></motion.div>
            <motion.div style={{ x: yBg }} className="stars"></motion.div>
        </div>
    );
}

export default Parallax;
