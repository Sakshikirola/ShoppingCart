import React from 'react'
import { MdOutlineShoppingCart } from "react-icons/md";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart"><MdOutlineShoppingCart size={32}/></Link>  
      </div>
    </div> 
  )
}

export default Navbar
