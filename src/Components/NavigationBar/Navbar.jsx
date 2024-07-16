import React from 'react'
import "./Navbar.scss"
import { animate, motion } from "framer-motion"
import SideBar from '../sidebar/SideBar'
import linkedin from "../../assets/linkedin.png"
import insta from "../../assets/instagram.png"
import git from "../../assets/github.png"

function Navbar() {
  return (
    <div className='navbar'>
      <SideBar />
      <motion.div className='socials' initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }} transition={{
          type: "spring",
          stiffness: 100,
          damping: 30
        }}>
        <a href="https://www.linkedin.com/in/kunal-jadhav-9145ab257/"><img className='linkedin' src={linkedin} alt="linkedin" /></a>
        <a href="https://github.com/712Kunal"><img src={git} alt="github" /></a>
        <a href="https://www.instagram.com/kunal_712_/?next=%2F"><img src={insta} alt="instagram" /></a>
      </motion.div>
    </div>
  )
}

export default Navbar