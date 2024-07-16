import React from 'react'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

function ToggleBtn(props) {

  return (
    
    <button
      onClick={() => {
        props.setOpen((prev) => !prev) }}
      className="toggle w-12 h-12 rounded-full fixed top-7 left-7
       bg-transparent  border-none">
        {props.open ? <IoClose size={40} /> :  <IoMenu size={38}/>}
    </button>
  )
}

export default ToggleBtn