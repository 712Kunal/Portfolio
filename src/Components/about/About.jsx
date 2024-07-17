import React,{useState, useEffect} from 'react';
import { motion } from "framer-motion";
import "./About.scss"
import mineportrait from "../../assets/About2.png"

const imgVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 3,
    },
  },
};

const boxVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 80,
      duration: 5,
    },
  },
};

const textVariants = {
  initial: {
    x: -300
  },
  animate: {
    x: 0,
    transition: {
      type: "tweet",
      duration: 1, 
      ease: "easeInOut"
    }
  }
}

function About() {

  const [mobilewidth, setmobileWidth] = useState(window.innerWidth<=768)

  useEffect(() => {
    const handleResize = () => setmobileWidth(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);

    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="outer-container max-w-[1366px] h-full flex flex-wrap justify-center items-center overflow-hidden">
      <motion.div
        className="img-container relative -bottom-9 p-6"
        variants={imgVariants}
        initial="initial"
        whileInView="animate"
      >
        <img className='w-full h-full rounded-3xl hover:grayscale cursor-pointer shadow-md shadow-cyan-200'
         src={mineportrait} alt="aboutImage" />
      </motion.div>

      <div className="edu-work w-1/2 flex flex-col flex-wrap gap-2">
        <div className="edu flex gap-5 relative -top-5">
          <motion.div
            className='border-[1px] p-5 rounded-2xl max-w-72 border-[#ffffffab] shadow-xl shadow-cyan-500/50'
            variants={boxVariants}
            initial="initial"
            whileInView="animate"
          >
            <div className='flex mb-2 justify-center items-center gap-2'>
              <i className="fa-solid fa-building-columns text-2xl"></i>
              <h2 className='text-2xl'>Education</h2>
            </div>
            <p className='text-[1.2rem]'>
              Currently in Third Year pursuing B.E in Computer Engineering, at SPPU
            </p>
          </motion.div>

          <motion.div
            className='border-[1px] p-5 rounded-2xl max-w-72 border-[#ffffffab] shadow-xl shadow-indigo-500/50'
            variants={boxVariants}
            initial="initial"
            whileInView="animate"
          >
            <div className='flex mb-2 justify-center items-center gap-2'>
              <i className="fa-solid fa-user-tie text-2xl"></i>
              <h2 className='text-2xl'>Experience</h2>
            </div>
            <p className='text-[1.2rem]'>
              Six months in Frontend Web Development
            </p>
          </motion.div>
        </div>

        {mobilewidth ? (
          <motion.p className="aboutpara" variants={textVariants} initial="initial" whileInView="animate">
          I'm Kunal Jadhav, a Computer Engineering student passionate about technology and
          software development. I'm proficient in core languages like C, C++ and JavaScript.
          I specialize in creating dynamic user interfaces using HTML, CSS, and JavaScript.
          Recently, I have expanded my skill set to include React.js, also familiar with
          Tailwind CSS and SCSS for frontend development. Dedicated to becoming a Full-Stack
          developer. I'm also more dedicated to real-life problem-solving aspects and many more...
        </motion.p>
        ) : (
          <motion.p className="aboutpara text-xl tracking-widest font-mono" variants={textVariants} initial="initial" whileInView="animate">
          I'm Kunal Jadhav, a Computer Engineering student passionate about technology and
          software development. I'm proficient in core languages like C, C++ and JavaScript.
          I specialize in creating dynamic user interfaces using HTML, CSS, and JavaScript.
          Recently, I have expanded my skill set to include React.js, also familiar with
          Tailwind CSS and SCSS for frontend development. Dedicated to becoming a Full-Stack
          developer. I'm also more dedicated to real-life problem-solving aspects and many more...
        </motion.p>
        ) }
        
      </div>
    </div>
  );
}

export default About;
