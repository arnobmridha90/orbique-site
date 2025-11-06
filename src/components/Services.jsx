import React from 'react'
export default function Services(){
  const items = [
    {title:'Logistics Support', desc:'Freight coordination, warehousing and fleet management tailored to your needs.'},
    {title:'Property Management', desc:'Tenant relations, maintenance, and short-term stay optimisation.'},
    {title:'Trading Services', desc:'Sourcing, procurement and cross-border trade facilitation.'}
  ]
  return (
    <section id="services" className="container mx-auto px-6 py-16 bg-white rounded-xl -mt-12 shadow">
      <h2 className="text-3xl font-semibold text-navy">Our Services</h2>
      <p className="text-gray-600 mt-2">Comprehensive services to support business growth and operational excellence.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {items.map(i=>(
          <div key={i.title} className="p-6 rounded-lg border hover:shadow-lg transition">
            <h3 className="font-semibold text-navy">{i.title}</h3>
            <p className="text-gray-600 mt-2">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
