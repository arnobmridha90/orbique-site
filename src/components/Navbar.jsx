import React from 'react'
import logo from '../assets/logo.png'
export default function Navbar(){
  return (
    <header className="bg-white/70 backdrop-blur sticky top-0 z-30">
      <div className="container mx-auto px-6 flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Orbique Global" className="h-10 w-auto"/>
          <div>
            <div className="text-navy font-semibold">Orbique Global</div>
            <div className="text-sm text-gray-500">Logistics • Property • Trading</div>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 items-center text-gray-700">
          <a href="/" className="hover:text-navy">Home</a>
          <a href="#about" className="hover:text-navy">About</a>
          <a href="#services" className="hover:text-navy">Services</a>
          <a href="#clients" className="hover:text-navy">Clients</a>
          <a href="#contact" className="px-4 py-2 bg-navy text-white rounded-md">Contact</a>
        </nav>
      </div>
    </header>
  )
}
