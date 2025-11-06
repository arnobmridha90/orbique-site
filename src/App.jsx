import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Clients from './components/Clients'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Clients />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
