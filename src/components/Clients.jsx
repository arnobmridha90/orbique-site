import React from 'react'

function importAll(r){
  try{
    return r.keys().map(r)
  }catch(e){
    return []
  }
}

const logos = importAll(require.context('../assets/clients', false, /\.(png|jpe?g|svg)$/));

export default function Clients(){
  const items = logos.length ? logos : Array.from({length:6}).map((_,i)=>null);
  return (
    <section id="clients" className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-semibold text-navy">Trusted by Leading Brands</h2>
        <div className="mt-6 overflow-hidden">
          <div className="logo-track whitespace-nowrap flex items-center gap-8 py-6">
            {items.map((src,i)=>(
              <div key={i} className="inline-block flex items-center justify-center h-20">
                {src ? (
                  <img src={src.default || src} alt={`client-${i}`} className="max-h-16 object-contain grayscale hover:grayscale-0 transition"/>
                ) : (
                  <div className="w-40 h-12 bg-gray-200 rounded flex items-center justify-center text-gray-500">Logo</div>
                )}
              </div>
            ))}
            {items.map((src,i)=>(
              <div key={'dup-'+i} className="inline-block flex items-center justify-center h-20">
                {src ? (
                  <img src={src.default || src} alt={`client-dup-${i}`} className="max-h-16 object-contain grayscale hover:grayscale-0 transition"/>
                ) : (
                  <div className="w-40 h-12 bg-gray-200 rounded flex items-center justify-center text-gray-500">Logo</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
