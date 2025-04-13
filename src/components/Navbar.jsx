import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className=" navbar mt-2 shadow-sm rounded-2xl main-container bg-gray-600">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl "><NavLink>SMarket</NavLink></a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal">
        <li><NavLink to="/about">About</NavLink></li>
        <li>
          <NavLink to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Navbar