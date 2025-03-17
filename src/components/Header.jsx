import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-xl font-bold ">
        <Link to="/">Servan</Link>
      </div>
      <button className="flex flex-col justify-center items-center space-y-1">
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>
    </header>
  )
}

export default Header