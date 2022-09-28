import React from 'react';
import { NavLink } from 'react-router-dom';

const Button = () => {
  return (
    <NavLink to="/create" className={ styles.button }>&#127881; Create my event</NavLink>
  )
}

export default Button

// Component styles
const styles = {
    button: "mt-[36] rounded-[10px] highlight px-[21] sm:px-[70] py-[16] text-white font-bold"
}