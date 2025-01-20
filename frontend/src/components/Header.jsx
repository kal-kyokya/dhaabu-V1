import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black text-white py-4 shadow-lg">
    <nav className="container mx-auto flex justify-between items-center px-4">
      <h1 className="text-4xl font-extrabold tracking-wide text-yellow-300">
        Dhaabu
      </h1>
      <ul className="flex md:text-lg space-x-6">
        <li>
          <Link to="/" className="text-white hover:text-yellow-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/login" className="text-white hover:text-yellow-300">
            Login
          </Link>
        </li>
        <li>
          <Link to="/signup" className="text-white hover:text-yellow-300">
            Sign Up
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="text-white hover:text-yellow-300">
           Posts
          </Link>
        </li>
      </ul>
    </nav>
  </header>
  )
}

export default Header