
import {BsCart3,BsMoon,BsSunFill} from 'react-icons/bs'
import {FaBarsStaggered} from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="bg-base-200">
     <div className="navbar align-element">
      <div className="navbar-start"></div>
      <div className="navbar-center hidden lg:flex">
       <ul className="menu menu-horizontal">nav links</ul>
      </div>
      <div className="navbar-end"></div>
     </div>

    </nav>
  )
}

export default Navbar