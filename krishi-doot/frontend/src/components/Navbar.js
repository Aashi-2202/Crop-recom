"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { FaLeaf, FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <FaLeaf className="text-green-500 text-2xl mr-2" />
            <span className="text-xl font-bold">KrishiDoot</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-500 font-medium">
              Home
            </Link>
            <Link to="/predict" className="text-gray-700 hover:text-green-500 font-medium">
              Predict
            </Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-green-500 font-medium">
              Dashboard
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-green-500 font-medium">
              About Us
            </Link>
            <Link to="#" className="btn">
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-green-500 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-green-500 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/predict"
                className="text-gray-700 hover:text-green-500 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Predict
              </Link>
              <Link
                to="/dashboard"
                className="text-gray-700 hover:text-green-500 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-green-500 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link to="#" className="btn inline-block w-full text-center" onClick={() => setIsMenuOpen(false)}>
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
