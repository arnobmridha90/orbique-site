import React from 'react'
export default function ContactForm(){
  return (
    <section id="contact" className="container mx-auto px-6 py-16">
      <h2 className="text-2xl font-semibold text-navy">Get in touch</h2>
      <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e)=>{e.preventDefault(); alert('Thank you — message sent (demo).')}}>
        <input className="p-3 border rounded" placeholder="Full name" required />
        <input className="p-3 border rounded" placeholder="Email" required />
        <input className="p-3 border rounded md:col-span-2" placeholder="Subject" />
        <textarea className="p-3 border rounded md:col-span-2" rows="6" placeholder="Message"></textarea>
        <button type="submit" className="px-6 py-3 bg-navy text-white rounded-md md:col-span-2">Send message</button>
      </form>
      <div className="mt-8 text-gray-600">
        <p><strong>Email:</strong> info@orbiqueglobal.com</p>
        <p><strong>Phone:</strong> +60 12-345 6789</p>
      </div>
    </section>
  )
}
