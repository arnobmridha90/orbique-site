import React from 'react'
import logo from '../assets/logo.png'
export default function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white bg-clip-text bg-gradient-to-r from-navy to-emerald">Reliable • Innovative • Global</h1>
          <p className="mt-4 text-gray-700">Orbique Global provides high-quality, reliable and innovative solutions for domestic and international clients since 2016. We specialise in logistics support, property management and trading services.</p>
          <div className="mt-6 flex gap-4">
            <a href="#services" className="px-6 py-3 bg-navy text-white rounded-md shadow">Our Services</a>
            <a href="#contact" className="px-6 py-3 border border-navy text-navy rounded-md">Contact Us</a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-lg rounded-xl overflow-hidden shadow-lg">
            <img src={logo} alt="Orbique logo" className="w-full bg-white p-8 object-contain"/>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#002D72_0%,#2ECC71_100%)] opacity-90"></div>
    </section>
  )
}
