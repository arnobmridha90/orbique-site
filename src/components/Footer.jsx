import React from 'react'
import logo from '../assets/logo.png'
export default function Footer(){
  return (
    <footer className="bg-navy text-white py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="h-10"/>
          <div>© {new Date().getFullYear()} Orbique Global</div>
        </div>
        <div className="text-sm">Email: info@orbiqueglobal.com</div>
      </div>
    </footer>
  )
}
