import React from 'react'
import { motion } from "framer-motion"

//for media queries - 
import "./Links.scss"

function Links(props) {

  const linksVariants = {
    open: {
        transition: {
          staggerChildren: 0.1,
        }
      },
      closed: {
        transition: {
          staggerChildren: 0.05,
          staggerDirection: -1
      }
    }
  }

  const itemVariants = {
    open: {
        opacity: 1,
        y:0
    },
    closed: {
      opacity: 0,
      y: 50
    }
  }

  const navitems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact"
  ];

  return (
    <motion.div className="Links" variants={linksVariants} initial="closed" animate={props.open ? "open" : "closed" }>
      {
        navitems.map(
          (item) => (
            <motion.a className='text-3xl text-black' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
              href={`#${item}`} key={item} variants={itemVariants}>{item}</motion.a>
          )
        )
      }
    </motion.div>
  )
}

export default Links