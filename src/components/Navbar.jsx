import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({user}) => {
  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">Ota App</Link>
      </span>{
        user ? (

          <ul className="list">
        <li className="listItem">
          <img src="https://st4.depositphotos.com/2024219/30083/i/1600/depositphotos_300838542-stock-photo-student-boy-backpack-glasses-holding.jpg" alt="" className="avatar"/>
        </li>
        <li className="listItem">Eric John</li>
        <li className="listItem">Logout</li>
      </ul>
        ) : (<Link className="link" to="login">Login</Link>)
      }
    </div>
  )
}

export default Navbar
