const FLOWER=[[0.0,0.0,0.0674,2],[-0.0654,0.061,0.0139,1],[0.0087,-0.1065,0.0184,1],[0.0758,0.0985,0.019,1],[-0.1384,-0.024,0.0197,1],[0.1285,-0.0808,0.0203,1],[-0.0428,0.1603,0.0203,1],[-0.0819,-0.155,0.0209,1],[0.1751,0.0644,0.0203,1],[-0.1811,0.0751,0.0209,1],[0.086,-0.1856,0.0214,1],[0.0654,0.2049,0.0225,1],[-0.1949,-0.1106,0.0225,1],[0.2267,-0.0503,0.0231,1],[-0.1385,0.1965,0.0236,1],[-0.0313,-0.2477,0.0231,1],[0.1958,0.1648,0.0246,1],[-0.2651,0.0123,0.0231,1],[0.1913,-0.1909,0.0246,1],[-0.0131,0.279,0.0251,1],[-0.1831,-0.2179,0.0241,1],[0.2877,0.0392,0.0251,1],[-0.2441,0.17,0.0251,0],[0.0673,-0.2964,0.026,0],[0.1544,0.2703,0.026,0],[-0.3026,-0.0959,0.026,0],[0.293,-0.1351,0.026,0],[-0.1288,0.3044,0.0265,0],[-0.1133,-0.3138,0.0278,0],[0.3008,0.1583,0.0278,0],[-0.3351,0.0879,0.0274,0],[0.1906,-0.2952,0.0269,0],[0.0603,0.3525,0.0274,0],[-0.287,-0.2217,0.0274,0],[0.3654,-0.03,0.0274,0],[-0.2542,0.2746,0.0278,0],[0.0004,-0.3774,0.0283,0],[0.2572,0.2833,0.0299,0],[-0.3867,-0.0359,0.0287,0],[0.3137,-0.2363,0.0283,0],[-0.0715,0.3923,0.0287,0],[-0.2156,-0.3406,0.0291,0],[0.3923,0.1075,0.0295,0],[-0.3676,0.1894,0.0295,0],[0.1452,-0.3898,0.0303,0],[0.1592,0.3901,0.0299,0],[-0.3858,-0.1808,0.0299,0],[0.4105,-0.1264,0.0307,0],[-0.2214,0.3768,0.0307,0],[-0.0922,-0.4298,0.0311,0],[0.3607,0.2583,0.0307,0],[-0.4461,0.0564,0.0311,0],[0.2938,-0.3437,0.0311,0],[0.0152,0.4577,0.0315,0],[-0.3248,-0.3269,0.0315,0],[0.4651,0.0231,0.0315,0],[-0.3618,0.2986,0.0315,0],[0.0654,-0.4685,0.0315,0],[0.2699,0.394,0.0323,0],[-0.4701,-0.1088,0.0323,0],[0.4218,-0.2387,0.0323,0],[-0.1526,0.4664,0.033,0],[-0.2049,-0.449,0.033,0],[0.4567,0.1951,0.0323,0],[-0.4734,0.1683,0.033,0],[0.2367,-0.4459,0.0341,0],[0.1264,0.4926,0.033,0],[-0.4315,-0.279,0.0326,0],[0.5083,-0.0846,0.033,0],[-0.3207,0.4097,0.0341,0],[-0.0416,-0.522,0.0341,0],[0.3847,0.3594,0.0341,0],[-0.5313,-0.0049,0.033,0],[0.3972,-0.3569,0.033,0],[-0.0533,0.5361,0.0334,0],[-0.3262,-0.4323,0.0337,0],[0.5354,0.101,0.0337,0],[-0.4671,0.2899,0.0344,0],[0.1482,-0.5318,0.0355,0],[0.2522,0.4967,0.0351,0],[-0.5247,-0.198,0.0351,0],[0.5231,-0.2092,0.0355,0],[-0.2457,0.5119,0.0351,0],[-0.1656,-0.5449,0.0368,0],[0.4919,0.2936,0.0355,0],[-0.5648,0.1202,0.0355,0],[0.3385,-0.4702,0.0365,0],[0.0692,0.5794,0.0365,0],[-0.4456,-0.3826,0.0361,0],[0.5885,-0.0174,0.0368,0],[-0.4258,0.4147,0.0365,0],[0.0339,-0.5938,0.0361,0],[0.3786,0.4634,0.0365,0],[-0.5966,-0.0869,0.0371,0],[0.5001,-0.34,0.0375,0],[-0.1405,0.5938,0.0361,0],[-0.2992,-0.5323,0.0371,0],[0.5841,0.1937,0.0368,0],[-0.5645,0.2534,0.0368,0],[0.2441,-0.5698,0.0375,0],[0.205,0.59,0.0375,0],[-0.553,-0.2966,0.0378,0],[0.6103,-0.1538,0.0375,0],[-0.3487,0.5286,0.0375,0],[-0.1015,-0.6277,0.0375,0],[0.5013,0.3967,0.0384,0],[-0.642,0.0467,0.0387,0],[0.442,-0.469,0.0384,0],[-0.0094,0.6495,0.0384,0],[-0.4338,-0.4861,0.0387,0],[0.6504,0.0672,0.039,0],[-0.5274,0.3929,0.0384,0],[0.1246,-0.6485,0.039,0],[0.3466,0.5646,0.0387,0],[-0.6409,-0.1818,0.0387,0],[0.5977,-0.2994,0.04,0],[-0.2399,0.629,0.0387,0],[-0.2485,-0.627,0.0384,0],[0.609,0.2976,0.0393,0],[-0.6518,0.1951,0.0393,0],[0.3516,-0.587,0.0393,0],[0.1361,0.6739,0.0397,0],[-0.5599,-0.4045,0.04,0],[0.6864,-0.0785,0.0406,0],[-0.4567,0.5257,0.0397,0],[-0.0197,-0.6974,0.0406,0],[0.4857,0.5039,0.0403,0],[-0.7023,-0.0412,0.0403,0],[0.5468,-0.444,0.0409,0],[-0.107,0.7013,0.0403,0],[-0.3972,-0.5887,0.0406,0],[0.6931,0.1683,0.0406,0],[-0.6271,0.3474,0.0414,0],[0.2278,-0.6817,0.0414,0],[0.2923,0.6587,0.0406,0],[-0.6652,-0.2892,0.0414,0],[0.6873,-0.2354,0.0417,0],[-0.3494,0.6416,0.0417,0],[-0.1787,-0.7105,0.0409,0],[0.6118,0.4071,0.0414,0],[-0.7297,0.1149,0.0414,0],[0.4616,-0.5784,0.0414,0],[0.0507,0.742,0.0423,0],[-0.5405,-0.5144,0.0429,0],[0.7475,0.0152,0.0426,0],[-0.5646,0.4964,0.0426,0],[0.0801,-0.7488,0.0423,0],[0.4477,0.6094,0.0426,0],[-0.7454,-0.1472,0.0429,0],[0.6495,-0.396,0.0412,0],[-0.2136,0.7333,0.0429,0],[-0.3403,-0.6864,0.0432,0],[0.7153,0.2786,0.0432,0],[-0.7192,0.28,0.0429,0],[0.341,-0.6942,0.0434,0],[0.2169,0.7454,0.0429,0],[-0.6664,-0.4021,0.0432,0],[0.7661,-0.1526,0.0429,0],[-0.4631,0.6332,0.0434,0],[-0.0867,-0.7816,0.0437,0],[0.5923,0.52,0.0437,0],[-0.7916,0.0174,0.044,0],[0.5729,-0.5486,0.044,0],[-0.0526,0.7946,0.0437,0],[-0.4984,-0.6213,0.044,0],[0.7913,0.1225,0.0443,0],[-0.6688,0.4453,0.044,0],[0.1918,-0.7824,0.0445,0],[0.3864,0.7077,0.0443,0],[0.743,-0.3251,0.0445,0],[-0.7683,-0.2604,0.0443,0],[-0.3311,0.7459,0.0448,0],[-0.2624,-0.7743,0.0445,0],[0.7169,0.3949,0.0445,0],[-0.8007,0.1931,0.0448,0],[0.4587,-0.6844,0.0459,0],[0.1234,0.8182,0.0448,0],[-0.6451,-0.5198,0.0451,0],[0.8294,-0.0518,0.0453,0],[-0.5787,0.6015,0.0451,0],[0.019,-0.8361,0.0451,0],[0.5495,0.632,0.0451,0],[-0.8361,-0.0943,0.0451,0],[0.6807,-0.4962,0.0456,0],[-0.1683,0.829,0.0456,0],[-0.4372,-0.7249,0.0448,0],[0.8149,0.2402,0.0467,0],[-0.7667,0.3746,0.0459,0],[0.3131,-0.794,0.0456,0],[0.3062,0.8004,0.0456,0],[-0.7694,-0.3831,0.0459,0],[0.8274,-0.2366,0.0459,0],[-0.4513,0.7367,0.0469,0],[-0.1656,-0.8492,0.0461,0],[0.6974,0.5163,0.0461,0],[-0.8663,0.0911,0.0472,0],[0.5772,-0.6531,0.0461,0],[0.014,0.8752,0.0474,0],[0.8761,0.0631,0.0469,0],[-0.6903,0.5485,0.0467,0],[0.1384,-0.8718,0.0467,0],[0.4877,0.7399,0.0469,0],[-0.8605,-0.215,0.0474,0],[0.7816,-0.4228,0.0474,0],[-0.292,0.8426,0.0474,0],[-0.3564,-0.8205,0.0472,0],[0.8184,0.3667,0.0469,0],[-0.8517,0.2837,0.0477,0],[0.4383,-0.787,0.0482,0],[0.2073,0.8783,0.0479,0],[-0.7492,-0.5067,0.0469,0],[0.8969,-0.1318,0.0472,0],[-0.5743,0.7051,0.0472,0],[-0.0545,-0.9095,0.0484,0],[0.6549,0.6374,0.0472,0],[-0.659,-0.6336,0.047,0],[0.6939,-0.5986,0.0479,0],[-0.9164,-0.0262,0.0477,0],[-0.1079,0.9129,0.0482,0],[-0.5383,-0.7469,0.0484,0],[0.9031,0.188,0.0484,0],[0.2663,-0.888,0.0489,0],[-0.7969,0.4746,0.0484,0],[0.4042,0.8388,0.0487,0],[-0.8671,-0.3447,0.0487,0],[0.8746,-0.3301,0.0489,0],[-0.4219,0.8364,0.0494,0],[-0.256,-0.9026,0.0492,0],[0.7986,0.4955,0.0489,0],[0.5643,-0.7554,0.0489,0],[-0.9274,0.1758,0.0494,0],[0.0925,0.942,0.0494,0],[0.9502,-0.0122,0.0497,0]];
const COPY={"hero": {"eyebrow": "Group holding company", "headline": "Diverse businesses. One disciplined group.", "subline": "A Kuala Lumpur-based group with businesses in logistics and supply, property, education and software.", "cta_primary": "Explore our businesses", "cta_secondary": "Contact head office"}, "about": {"eyebrow": "About the group", "header": "Governance and direction for every business", "paragraph": "Orbique Global Sdn. Bhd. is the group's parent company. It brings together nine businesses and platforms across four sectors, each trading under its own name. The parent company sets group policy, provides governance and capital oversight, and gives each business the structure it needs to grow over the long term.", "facts": [{"value": "Kuala Lumpur", "label": "Group headquarters"}, {"value": "9", "label": "Businesses and platforms"}, {"value": "4", "label": "Sectors"}, {"value": "2025", "label": "Established"}]}, "businesses": {"eyebrow": "Our businesses", "header": "A diversified portfolio across four sectors", "intro": "Our businesses operate independently in their markets, supported by the group's governance and oversight. Each profile links to the business's own website or to a direct enquiry.", "sectors": [{"key": "mob", "name": "Logistics and Supply", "line": "Freight and supply-chain services and business procurement."}, {"key": "prop", "name": "Property", "line": "Short-stay management and property investment services for owners and investors."}, {"key": "ppl", "name": "Education and Professional Development", "line": "Corporate training and education advisory."}, {"key": "tech", "name": "Software and Technology", "line": "Software built inside our own operations, offered to other operators and to households."}], "items": [{"key": "logistics", "name": "Orbique Logistics", "sector": "mob", "paragraph": "Orbique Logistics provides international freight and supply-chain services, including road and cross-border transport, container haulage, sea and air freight forwarding, customs clearance, warehousing and distribution, and e-commerce and B2B fulfilment. Clients receive clear reporting on every shipment."}, {"key": "supply", "name": "Orbique Supply", "sector": "mob", "paragraph": "Orbique Supply sources, consolidates and delivers business supplies for corporate and public-sector buyers. Its range covers office, safety and PPE, MRO and industrial, cleaning and hygiene, and IT and electrical goods, with specialised sourcing on request. Buyers place one order and receive one invoice with procurement-ready paperwork."}, {"key": "stay", "name": "Orbique Stays", "sector": "prop", "paragraph": "Orbique Stays manages short-term rental properties on behalf of owners. Its service covers listing and pricing, guest communication and check-in, housekeeping and linen, and maintenance. Owners receive regular reports on their property."}, {"key": "invest", "name": "Orbique Property Investment", "sector": "prop", "paragraph": "Orbique Property Investment advises local and international investors across the full life of a property holding, from acquisition through leasing, tenancy management and periodic portfolio reviews to eventual exit. It works alongside registered estate agents, valuers and lawyers where Malaysian law requires."}, {"key": "training", "name": "Orbique Training", "sector": "ppl", "paragraph": "Orbique Training delivers corporate and professional development programmes in leadership and management, communication, sales and service, digital skills and AI in the workplace, HR and people management, and personal effectiveness. Programmes are delivered in-house, as public sessions or as live virtual classes."}, {"key": "edu", "name": "Orbique Education", "sector": "ppl", "paragraph": "Orbique Education advises students on the next stage of their studies, both Malaysians studying abroad and international students choosing Malaysia. Its services cover course and university selection, applications, scholarships and funding, visa and Student Pass documentation, and pre-departure preparation."}, {"key": "pms", "name": "Orbique PMS", "sector": "tech", "paragraph": "Orbique PMS is a cloud property management platform for short-term rental operators. Each operator works in a private workspace covering units, bookings and calendar, the guest inbox, cleaning tasks, inventory, invoices, expenses and reports, on desktop or phone. Every booking also gets its own guest app with check-in details, Wi-Fi, requests and nearby places."}, {"key": "fms", "name": "Orbique FMS", "sector": "tech", "paragraph": "Orbique FMS runs a car rental fleet from one screen: bookings, payments, deposits, summons, vehicle tracking and reports. Customers book and sign online, payment slips fill in their own details, and deposit refunds set out every deduction in writing. It was built inside a working rental company."}, {"key": "kira", "name": "KIRA", "sector": "tech", "paragraph": "KIRA is a personal finance app for Malaysian households. It records spending from bank notifications, statements and pay slips, runs budgets from one payday to the next, and adds up EPF, SOCSO, EIS and PCB through the year. Records stay on the phone behind a PIN, with backups and device linking under the owner's control."}], "footnote": "Investment returns are not guaranteed. Admission and visa decisions rest with the institutions and authorities concerned."}, "purpose": {"eyebrow": "Our vision and mission", "vision": "To build a trusted, diversified group from Kuala Lumpur, recognised for the quality of its businesses and the integrity of its governance.", "mission": "To provide each business with the governance, oversight and support it needs to serve clients with integrity and deliver on its commitments."}, "synergy": {"eyebrow": "Group connections", "header": "Where our businesses work together", "intro": "Each business stands on its own. Where a client's needs extend into another part of the group, we make the introduction, and the same commitments apply on both sides.", "links": [{"from": "supply", "to": "logistics", "title": "Sourced and delivered", "text": "Orbique Supply consolidates the order and Orbique Logistics delivers it, giving buyers a single group partner for sourcing and delivery."}, {"from": "invest", "to": "stay", "title": "From acquisition to active management", "text": "Subject to building rules and owner objectives, investment units may be operated as short stays by Orbique Stays, with regular reporting to the owner."}, {"from": "pms", "to": "stay", "title": "Proven in our own operations", "text": "Orbique Stays manages its units on Orbique PMS, so the platform other operators subscribe to is tested every day inside the group."}, {"from": "edu", "to": "training", "title": "From study to professional skills", "text": "Clients of Orbique Education can continue to build practical skills through programmes run by Orbique Training."}]}, "values": {"eyebrow": "Our values", "header": "Four commitments across the group", "intro": "Our businesses work in different markets. They answer to the same standards, so clients know what to expect whichever business they deal with.", "items": [{"title": "One accountable contact", "text": "Each client has one accountable contact, from first enquiry to completion."}, {"title": "Prices agreed in writing", "text": "Costs are set out and agreed in writing before work begins."}, {"title": "Candid counsel", "text": "We set out risks as clearly as benefits, and we do not promise outcomes that rest with markets, institutions or authorities."}, {"title": "Long-term relationships", "text": "We engage at the scale a client needs today and extend our support as their requirements develop."}]}, "contact": {"eyebrow": "Contact", "header": "Speak with Orbique Global", "line": "For corporate, partnership and general enquiries, please contact our head office. Your enquiry will be directed to the relevant business."}, "footer_tagline": "Diversified by sector. United by governance.", "meta": {"title": "Orbique Global | Diversified Group, Kuala Lumpur", "description": "Orbique Global is a diversified group headquartered in Kuala Lumpur, with businesses in logistics and supply, property, education and professional development, and software, including Orbique PMS, Orbique FMS and KIRA."}};
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const SECT={mob:{c:'#c8a445',cn:'#c8a445'},prop:{c:'#015d5b',cn:'#4eb7aa'},ppl:{c:'#264061',cn:'#8ea6d4'},tech:{c:'#5b7fa6',cn:'#a9c4e4'}};
const SECTOR_OF={logistics:'mob',supply:'mob',stay:'prop',invest:'prop',training:'ppl',edu:'ppl',pms:'tech',fms:'tech',kira:'tech'};
const WA=t=>'https://wa.me/60174698759?text='+encodeURIComponent(t);
const LINKS={fms:'https://orbiquefms.com'};
const ASK={pms:['Request a demo',WA('Hello Orbique, I would like a demo of Orbique PMS.')],kira:['Request early access',WA('Hello Orbique, I would like early access to KIRA.')]};
const ICONS={
  logistics:'<path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z"/><circle cx="7" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
  supply:'<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M4 7.5l8 4.5 8-4.5M12 12v9"/>',
  stay:'<path d="M4 20V10l8-6 8 6v10z"/><path d="M10 20v-5h4v5"/>',
  invest:'<path d="M4 20h16"/><path d="M6 20v-6M10 20v-9M14 20v-7M18 20V6"/>',
  training:'<circle cx="12" cy="8" r="3.2"/><path d="M5.5 20a6.5 6.5 0 0 1 13 0"/>',
  edu:'<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2.5 9 2.5 12 0v-5"/>',
  pms:'<rect x="3" y="4" width="18" height="14" rx="1.5"/><path d="M3 8h18M8 21h8M12 18v3"/><path d="M7 12h3v3H7zM13 12h4"/>',
  fms:'<rect x="3" y="4" width="18" height="13" rx="1.5"/><path d="M8 21h8M12 17v4"/><path d="M6.5 13l1-2.6a1.2 1.2 0 0 1 1.1-.8h6.8a1.2 1.2 0 0 1 1.1.8l1 2.6v1.5h-11z"/>',
  kira:'<rect x="6" y="2.5" width="12" height="19" rx="2.2"/><path d="M10 18.5h4"/><circle cx="12" cy="10" r="3.2"/><path d="M12 8.4v3.2M10.9 9.2h1.8a.7.7 0 0 1 0 1.4h-1.4a.7.7 0 0 0 0 1.4h1.8"/>'
};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const get=p=>p.split('.').reduce((o,k)=>o&&o[k],COPY);

/* ---------- copy binding ---------- */
document.querySelectorAll('[data-c]').forEach(el=>{const v=get(el.dataset.c);if(v!=null)el.textContent=v;});
{const ws=COPY.hero.headline.split(' ');document.getElementById('h1').innerHTML=ws.map((w,i)=>`<span class="w"><span style="--i:${i}">${esc(w)}</span></span>`+(i<ws.length-1?(/[.:]$/.test(w)?'<br>':' '):'')).join('');}
const BIZ=COPY.businesses.items.map(b=>({...b,sec:SECTOR_OF[b.key]||'mob',url:LINKS[b.key]||null,ask:ASK[b.key]||null}));
const SECTORS=COPY.businesses.sectors;

/* ---------- flower svg ---------- */
const flowerMarkup=FLOWER.map((p,i)=>`<circle class="d${p[3]}" cx="${p[0]}" cy="${p[1]}" r="${p[2]}"/>`).join('');
document.querySelectorAll('svg.flower').forEach(s=>s.innerHTML=flowerMarkup);

/* ---------- intro: dots swirl in to build the flower, then the lockup settles into the header ---------- */
(function(){
  const intro=document.getElementById('intro'),lock=document.getElementById('introLock'),nav=document.getElementById('navLock');
  let seen=false;try{seen=sessionStorage.getItem('orbique-intro')==='1';}catch(e){}
  const page=[...document.querySelectorAll('body>header,body>main,body>footer')],skip=document.getElementById('skip');
  const finish=()=>{if(intro.classList.contains('gone'))return;const hadFocus=document.activeElement===skip;
    intro.classList.add('gone');document.body.classList.add('intro-done','hero-in');document.documentElement.style.overflow='';
    page.forEach(el=>el.inert=false);if(hadFocus)document.getElementById('h1').focus({preventScroll:true});
    window.dispatchEvent(new Event('scroll'));try{sessionStorage.setItem('orbique-intro','1');}catch(e){}};
  if(seen||location.hash.length>1){finish();return;}
  /* hold the page still under the overlay so the header state and headline reveal stay in sync */
  document.documentElement.style.overflow='hidden';page.forEach(el=>el.inert=true);
  const dots=[...lock.querySelectorAll('circle')],fl=lock.querySelector('.flower');
  /* the flower builds at the centre of the screen, slightly larger, then glides left as the wordmark opens */
  const centreFlower=()=>{const a=lock.getBoundingClientRect(),f=fl.getBoundingClientRect();
    fl.style.transform=`translateX(${(a.left+a.width/2)-(f.left+f.width/2)}px) scale(${innerWidth<700?1.6:1.3})`;};
  const release=()=>{lock.classList.add('move');fl.style.transform='';};
  const P=FLOWER.map((p,i)=>{const r=Math.hypot(p[0],p[1]),a=Math.atan2(p[1],p[0]);
    const k=(Math.sin(i*12.9898)*43758.5453)%1,j=Math.abs(k);
    return {r,a,r0:1.9+j*1.6,a0:a+2.4+j*1.2,delay:.12+r*1.15+j*.12};});
  const DUR=1.05,T_DOTS=Math.max(...P.map(p=>p.delay))+DUR;
  const ease=t=>1-Math.pow(1-t,3);
  function place(T){
    dots.forEach((d,i)=>{const p=P[i];let k=Math.min(Math.max((T-p.delay)/DUR,0),1);const e=ease(k);
      const rr=p.r0+(p.r-p.r0)*e,aa=p.a0+(p.a-p.a0)*e;
      d.setAttribute('cx',(Math.cos(aa)*rr).toFixed(4));d.setAttribute('cy',(Math.sin(aa)*rr).toFixed(4));
      d.style.opacity=Math.min(k*1.6,1);});
  }
  let raf,t0,done=false,flown=false,flyT;
  function settle(){
    if(done)return;done=true;cancelAnimationFrame(raf);place(99);release();lock.classList.add('text');
    flyT=setTimeout(fly,reduce?200:2400);
  }
  function fly(){
    if(flown)return;flown=true;clearTimeout(flyT);document.body.classList.add('hero-in');
    const a=lock.getBoundingClientRect(),b=nav.getBoundingClientRect();
    lock.classList.add('fly');
    lock.style.transform=`translate(${b.left-a.left}px,${b.top-a.top}px) scale(${b.height/a.height})`;
    intro.classList.add('fade');
    setTimeout(finish,reduce?50:950);
  }
  skip.addEventListener('click',()=>{skip.disabled=true;fl.style.transform='';lock.classList.add('text');done=true;cancelAnimationFrame(raf);place(99);fly();});
  if(reduce){place(99);settle();return;}
  place(0);centreFlower();
  requestAnimationFrame(ts=>{t0=ts;(function step(now){const T=(now-t0)/1000;place(T);if(T<T_DOTS)raf=requestAnimationFrame(step);else settle();})(ts);});
  setTimeout(()=>{if(!intro.classList.contains('gone')){done=true;flown=true;place(99);finish();}},9000);
})();

/* ---------- header state ---------- */
const topBar=document.getElementById('top'),hero=document.getElementById('hero');
const setHeader=()=>topBar.classList.toggle('solid',scrollY>hero.offsetHeight-90);
addEventListener('scroll',setHeader,{passive:true});setHeader();
{const nv=document.getElementById('mainNav'),mb=nv.querySelector('.menu-btn');
  const setOpen=o=>{nv.classList.toggle('open',o);mb.setAttribute('aria-expanded',o);mb.textContent=o?'Close':'Menu';};
  mb.addEventListener('click',()=>setOpen(!nv.classList.contains('open')));
  nv.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>setOpen(false)));
  addEventListener('keydown',e=>{if(e.key==='Escape')setOpen(false);});}

/* ---------- group composition infographic ---------- */
(function(){
  const fig=document.getElementById('comp');
  const counts=SECTORS.map(s=>BIZ.filter(b=>b.sec===s.key).length);
  const total=counts.reduce((a,b)=>a+b,0)||7,R=118,C=2*Math.PI*R,gap=10;
  let off=0,arcs='',labels='';
  SECTORS.forEach((s,i)=>{const len=counts[i]/total*C-gap;const mid=(off+len/2)/C*Math.PI*2-Math.PI/2;
    arcs+=`<circle class="arc" r="${R}" stroke="${SECT[s.key].c}" stroke-dasharray="0 ${C}" data-len="${len}" style="stroke-dashoffset:${-off};transition:stroke-dasharray 1.3s cubic-bezier(.6,0,.2,1) ${i*.25}s" transform="rotate(-90)"/>`;
    const lx=Math.cos(mid),ly=Math.sin(mid),x1=lx*(R+18),y1=ly*(R+18),x2=lx*(R+46),y2=ly*(R+46),side=lx>=0?1:-1,x3=x2+side*24;
    const words=s.name.split(' '),lines=[];words.forEach(w=>{const L=lines[lines.length-1];if(L&&(L+' '+w).length<=15)lines[lines.length-1]=L+' '+w;else lines.push(w);});
    const tx=x3+side*8,an=side>0?'start':'end';
    labels+=`<path d="M${x1} ${y1}L${x2} ${y2}L${x3} ${y2}" fill="none" stroke="${SECT[s.key].c}" stroke-width="1"/><text class="num" x="${tx}" y="${y2+10}" text-anchor="${an}">${counts[i]}</text><text class="lbl" x="${tx}" y="${y2+32}" text-anchor="${an}">${lines.map((l,k)=>`<tspan x="${tx}" dy="${k?17:0}">${esc(l)}</tspan>`).join('')}</text>`;
    off+=len+gap;});
  BIZ.forEach((b,i)=>{});
  fig.innerHTML=`<svg viewBox="-340 -215 680 430" role="img" aria-label="${total} businesses: ${SECTORS.map((s,i)=>counts[i]+' in '+s.name).join(', ')}">
    <circle r="${R}" fill="none" stroke="var(--rule)" stroke-width="22"/>${arcs}<g class="labels">${labels}</g>
    <g transform="scale(64)">${flowerMarkup.replace(/class="d0"/g,'fill="#264061"').replace(/class="d1"/g,'fill="#015d5b"').replace(/class="d2"/g,'fill="#c8a445"')}</g></svg>
    <ul class="legend">${SECTORS.map((s,i)=>`<li><i style="background:${SECT[s.key].c}"></i><b>${counts[i]}</b>${esc(s.name)}</li>`).join('')}</ul>`;
  const svgEl=fig.querySelector('svg'),vb=()=>svgEl.setAttribute('viewBox',innerWidth<=640?'-150 -150 300 300':'-340 -215 680 430');vb();addEventListener('resize',vb);
  const arcsEl=[...fig.querySelectorAll('.arc')];
  const fill=()=>arcsEl.forEach(a=>a.setAttribute('stroke-dasharray',`${a.dataset.len} ${C}`));
  new IntersectionObserver((e,o)=>{if(e[0].isIntersecting){fill();o.disconnect();}},{threshold:.3}).observe(fig);
  setTimeout(fill,6000);
})();

/* ---------- facts ---------- */
document.getElementById('facts').innerHTML=COPY.about.facts.map(f=>`<div class="fact"><strong class="${/^\d/.test(f.value)?'':'word'}" data-v="${esc(f.value)}">${esc(f.value)}</strong><span>${esc(f.label)}</span></div>`).join('');
document.querySelectorAll('.fact strong').forEach(el=>{
  const v=el.dataset.v;if(!/^\d{1,2}$/.test(v)||reduce)return;const end=+v;
  new IntersectionObserver((e,o)=>{if(!e[0].isIntersecting)return;o.disconnect();const t0=performance.now();
    (function s(t){const k=Math.min((t-t0)/1200,1);el.textContent=Math.round(end*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(s);})(t0);},{threshold:.6}).observe(el);
});

/* ---------- businesses by sector ---------- */
document.getElementById('sectors').innerHTML=SECTORS.map((s,si)=>{
  const items=BIZ.filter(b=>b.sec===s.key);
  return `<div class="sector reveal" style="--sc:${SECT[s.key].c}">
    <div class="sector-head"><div class="idx">${items.length} ${items.length===1?'business':'businesses'}</div><h3>${esc(s.name)}</h3><p>${esc(s.line)}</p></div>
    <div class="cards" style="--n:${items.length}">${items.map(b=>`
      <article class="card" id="biz-${b.key}">
        <div class="mark"><span class="ico"><svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[b.key]}</svg></span></div>
        <h4>${esc(b.name)}</h4><p>${esc(b.paragraph)}</p>
        ${b.url?`<a class="go" href="${b.url}" target="_blank" rel="noopener">Visit website <span class="arr">↗</span></a>`:b.ask?`<a class="go" href="${b.ask[1]}" target="_blank" rel="noopener">${esc(b.ask[0])} <span class="arr">↗</span></a>`:`<span class="go soon">Website coming soon</span>`}
      </article>`).join('')}</div></div>`;}).join('');
document.getElementById('footBiz').innerHTML=BIZ.map(b=>`<li>${b.url?`<a href="${b.url}" target="_blank" rel="noopener">${esc(b.name)}</a>`:esc(b.name)}</li>`).join('');
document.getElementById('f-topic').innerHTML+=BIZ.map(b=>`<option>${esc(b.name)}</option>`).join('');

/* ---------- purpose rule ---------- */
new IntersectionObserver((e,o)=>{if(e[0].isIntersecting){document.getElementById('pg').classList.add('on');o.disconnect();}},{threshold:.3}).observe(document.getElementById('pg'));

/* ---------- synergy network ---------- */
(function(){
  const wrapEl=document.getElementById('syn'),svg=wrapEl.querySelector('svg'),list=document.getElementById('links');
  const cx=320,cy=300,R=220,order=BIZ.map(b=>b.key);
  const pos={};order.forEach((k,i)=>{const a=-Math.PI/2+i/order.length*Math.PI*2;pos[k]=[cx+Math.cos(a)*R,cy+Math.sin(a)*R];});
  const name=k=>((BIZ.find(b=>b.key===k)||{}).name||k).replace(/^Orbique /,'');
  let s=order.map(k=>`<line class="spoke" x1="${cx}" y1="${cy}" x2="${pos[k][0]}" y2="${pos[k][1]}"/>`).join('');
  COPY.synergy.links.forEach((l,i)=>{const A=pos[l.from],B=pos[l.to];if(!A||!B)return;
    const mx=(A[0]+B[0])/2+(cx-(A[0]+B[0])/2)*.5,my=(A[1]+B[1])/2+(cy-(A[1]+B[1])/2)*.5,col=SECT[SECTOR_OF[l.from]].c;
    s+=`<path id="lk${i}" class="link" d="M${A[0]} ${A[1]} Q ${mx} ${my} ${B[0]} ${B[1]}" stroke="${col}" style="transition-delay:${i*.2}s"/>`;
    if(!reduce)s+=`<circle r="3.5" fill="${col}"><animateMotion dur="${3.4+i*.5}s" repeatCount="indefinite" begin="${2+i*.3}s"><mpath href="#lk${i}"/></animateMotion></circle>`;});
  s+=`<circle cx="${cx}" cy="${cy}" r="66" fill="#fff" stroke="var(--rule)"/><g transform="translate(${cx} ${cy}) scale(50)">${flowerMarkup.replace(/class="d0"/g,'fill="#264061"').replace(/class="d1"/g,'fill="#015d5b"').replace(/class="d2"/g,'fill="#c8a445"')}</g>`;
  s+=order.map(k=>{const [x,y]=pos[k],c=SECT[SECTOR_OF[k]].c;const below=y>=cy-10;
    return `<g class="node" data-k="${k}" style="cursor:pointer"><circle class="bg" cx="${x}" cy="${y}" r="30" stroke="${c}"/><svg x="${x-12}" y="${y-12}" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${ICONS[k]}</svg><text x="${x}" y="${below?y+52:y-42}">${esc(name(k))}</text></g>`;}).join('');
  svg.innerHTML=s;
  svg.querySelectorAll('.link').forEach(p=>p.style.setProperty('--len',Math.ceil(p.getTotalLength())));
  svg.querySelectorAll('.node').forEach(n=>n.addEventListener('click',()=>goBiz(n.dataset.k)));
  list.innerHTML=COPY.synergy.links.map((l,i)=>`<div class="lk" data-i="${i}"><i style="background:${SECT[SECTOR_OF[l.from]||'mob'].c}"></i><b>${esc(l.title)}</b><span>${esc(l.text)}</span></div>`).join('');
  list.querySelectorAll('.lk').forEach(el=>{
    el.addEventListener('pointerenter',()=>{svg.classList.add('dim');const p=svg.querySelector('#lk'+el.dataset.i);if(p)p.classList.add('hot');});
    el.addEventListener('pointerleave',()=>{svg.classList.remove('dim');svg.querySelectorAll('.link.hot').forEach(p=>p.classList.remove('hot'));});});
  new IntersectionObserver((e,o)=>{if(e[0].isIntersecting){wrapEl.classList.add('on');o.disconnect();}},{threshold:.25}).observe(wrapEl);
  setTimeout(()=>wrapEl.classList.add('on'),7000);
})();

/* ---------- values ---------- */
const VICONS=['<circle cx="20" cy="13" r="6"/><path d="M8 34a12 12 0 0 1 24 0"/>','<rect x="9" y="5" width="22" height="30" rx="2"/><path d="M14 14h12M14 20h12M14 26h7"/>','<path d="M20 4l13 5v9c0 8-5.6 13.4-13 16.5C12.6 31.4 7 26 7 18V9z"/><path d="M14 19l4.5 4.5L27 15"/>','<path d="M6 34h28"/><path d="M10 34v-8M17 34V20M24 34V14M31 34V7"/>'];
document.getElementById('vals').innerHTML=COPY.values.items.map((v,i)=>`<article class="reveal"><svg viewBox="0 0 40 40" aria-hidden="true">${VICONS[i%4]}</svg><h3>${esc(v.title)}</h3><p>${esc(v.text)}</p></article>`).join('');
new IntersectionObserver((e,o)=>{if(e[0].isIntersecting){document.getElementById('vals').classList.add('play');o.disconnect();}},{threshold:.35}).observe(document.getElementById('vals'));

/* ---------- jump to a business ---------- */
function goBiz(k){const el=document.getElementById('biz-'+k);if(!el)return;el.scrollIntoView({behavior:reduce?'auto':'smooth',block:'center'});el.classList.remove('flash');void el.offsetWidth;el.classList.add('flash');}

/* ---------- contact form: opens the visitor's email app with the enquiry filled in ---------- */
document.getElementById('form').addEventListener('submit',e=>{
  e.preventDefault();const note=document.getElementById('formnote'),v=id=>document.getElementById(id).value.trim();
  const name=v('f-name'),email=v('f-email');
  if(!name||!/^\S+@\S+\.\S+$/.test(email)){note.style.color='var(--gold)';note.textContent='Please add your name and a valid email address.';return;}
  const topic=v('f-topic'),body=`Name: ${name}\nOrganisation: ${v('f-org')}\nEmail: ${email}\nTelephone: ${v('f-phone')}\nEnquiry about: ${topic}\n\n${v('f-msg')}`;
  location.href='mailto:info@orbiqueglobal.com?subject='+encodeURIComponent('Enquiry: '+topic)+'&body='+encodeURIComponent(body);
  note.style.color='var(--green-lift)';note.textContent='Your email app should open with the enquiry ready to send. You can also write to info@orbiqueglobal.com.';
});

/* ---------- 3D group globe ---------- */
(function(){
  const noGL=()=>{document.getElementById('hero').classList.add('nogl');};
  if(!window.THREE){noGL();return;}
  const canvas=document.getElementById('scene');
  let renderer;try{renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true});}catch(e){noGL();return;}
  renderer.setPixelRatio(Math.min(devicePixelRatio,2));
  const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(42,1,.1,200);
  const HOME=new THREE.Vector3(0,1.4,10);camera.position.copy(HOME);const look=new THREE.Vector3();
  const sg=new THREE.BufferGeometry(),sp=[];
  for(let i=0;i<700;i++){const r=45+Math.random()*50,t=Math.random()*Math.PI*2,p=Math.acos(2*Math.random()-1);sp.push(r*Math.sin(p)*Math.cos(t),r*Math.sin(p)*Math.sin(t),r*Math.cos(p));}
  sg.setAttribute('position',new THREE.Float32BufferAttribute(sp,3));
  const stars=new THREE.Points(sg,new THREE.PointsMaterial({color:0xb9c6dc,size:.09,transparent:true,opacity:.45}));scene.add(stars);
  /* the globe is a Fibonacci sphere, the 3D cousin of the logo's spiral flower */
  const globe=new THREE.Group();scene.add(globe);
  globe.add(new THREE.Mesh(new THREE.SphereGeometry(1.6,48,48),new THREE.MeshBasicMaterial({color:0x081120})));
  const N=2400,gp=[],gc=[],cA=new THREE.Color('#8ea6d4'),cB=new THREE.Color('#e9eef5'),cG=new THREE.Color('#4eb7aa'),cY=new THREE.Color('#c8a445');
  for(let i=0;i<N;i++){const y=1-(i/(N-1))*2,r=Math.sqrt(1-y*y),th=Math.PI*(3-Math.sqrt(5))*i;gp.push(Math.cos(th)*r*1.64,y*1.64,Math.sin(th)*r*1.64);
    const c=Math.abs(y)<.06?cG:(i%97===0?cY:cA.clone().lerp(cB,(y+1)/2));gc.push(c.r,c.g,c.b);}
  const gg=new THREE.BufferGeometry();gg.setAttribute('position',new THREE.Float32BufferAttribute(gp,3));gg.setAttribute('color',new THREE.Float32BufferAttribute(gc,3));
  globe.add(new THREE.Points(gg,new THREE.PointsMaterial({size:.032,vertexColors:true,transparent:true,opacity:.95})));
  const hc=document.createElement('canvas');hc.width=hc.height=256;const hx=hc.getContext('2d');const grd=hx.createRadialGradient(128,128,50,128,128,128);
  grd.addColorStop(0,'rgba(200,164,69,.22)');grd.addColorStop(.55,'rgba(78,183,170,.06)');grd.addColorStop(1,'rgba(0,0,0,0)');hx.fillStyle=grd;hx.fillRect(0,0,256,256);
  const halo=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(hc),blending:THREE.AdditiveBlending,depthWrite:false}));halo.scale.set(6.4,6.4,1);scene.add(halo);
  const system=new THREE.Group();system.rotation.x=.3;system.rotation.z=-.1;scene.add(system);
  const R=2.6;
  const ring=(radius,color,opacity)=>{const pts=[];for(let i=0;i<=256;i++){const a=i/256*Math.PI*2;pts.push(new THREE.Vector3(Math.cos(a)*radius,0,Math.sin(a)*radius));}return new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),new THREE.LineBasicMaterial({color,transparent:true,opacity}));};
  system.add(ring(R,0xc8a445,.38));
  const r2=ring(2.5,0x4eb7aa,.18);r2.rotation.x=1.1;scene.add(r2);
  const r3=ring(3.9,0x8ea6d4,.08);r3.rotation.x=.5;r3.rotation.z=.4;scene.add(r3);
  function badgeTexture(b,hot){
    const s=256,cv=document.createElement('canvas');cv.width=cv.height=s;const x=cv.getContext('2d'),col=SECT[b.sec].cn;
    if(hot){const g=x.createRadialGradient(s/2,s/2,60,s/2,s/2,s/2);g.addColorStop(0,'rgba(200,164,69,.35)');g.addColorStop(1,'rgba(0,0,0,0)');x.fillStyle=g;x.fillRect(0,0,s,s);}
    x.beginPath();x.arc(s/2,s/2,72,0,Math.PI*2);x.fillStyle='#0f1c33';x.fill();x.lineWidth=hot?5:2.5;x.strokeStyle=hot?'#c8a445':col;x.stroke();
    const tex=new THREE.CanvasTexture(cv);
    const img=new Image();img.onload=()=>{x.drawImage(img,s/2-38,s/2-38,76,76);tex.needsUpdate=true;};
    img.src='data:image/svg+xml;utf8,'+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${hot?'#ffffff':'#e9eef5'}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${ICONS[b.key]}</svg>`);
    return tex;}
  const badges=BIZ.map((b,i)=>{const sp=new THREE.Sprite(new THREE.SpriteMaterial({map:badgeTexture(b,false),transparent:true}));sp.scale.set(1,1,1);
    sp.userData={b,i,base:badgeTexture(b,false),hot:badgeTexture(b,true),angle:i/BIZ.length*Math.PI*2,s:1,r:R};system.add(sp);return sp;});
  const hero=document.getElementById('hero');
  function resize(){const w=canvas.clientWidth,h=canvas.clientHeight;renderer.setSize(w,h,false);camera.aspect=w/h;camera.fov=w<820?58:42;
    if(innerWidth>1100)camera.setViewOffset(w,h,-w*.22,0,w,h);else camera.clearViewOffset();camera.updateProjectionMatrix();
    /* badges dim while they pass behind the headline, so the copy always reads cleanly */
    copyEdge=-1;if(innerWidth>1100){const rg=document.createRange();rg.selectNodeContents(document.getElementById('h1'));copyEdge=rg.getBoundingClientRect().right-canvas.getBoundingClientRect().left;}}
  let copyEdge=-1;
  addEventListener('resize',resize);resize();if(document.fonts)document.fonts.ready.then(resize);
  const ray=new THREE.Raycaster(),mouse=new THREE.Vector2(-9,-9),tip=document.getElementById('tip');
  let hovered=null,spin=0,drag=null,vel=0,par={x:0,y:0},scrollK=0;
  const setMouse=e=>{const r=canvas.getBoundingClientRect();mouse.x=(e.clientX-r.left)/r.width*2-1;mouse.y=-(e.clientY-r.top)/r.height*2+1;par.x=mouse.x;par.y=mouse.y;};
  canvas.addEventListener('pointermove',e=>{setMouse(e);if(drag!==null){const dx=e.clientX-drag;drag=e.clientX;vel=dx*.004;spin+=vel;}});
  canvas.addEventListener('pointerdown',e=>{drag=e.clientX;canvas.dataset.down=e.clientX+','+e.clientY;canvas.setPointerCapture(e.pointerId);});
  canvas.addEventListener('pointerup',e=>{drag=null;const [x0,y0]=(canvas.dataset.down||'0,0').split(',').map(Number);if(Math.hypot(e.clientX-x0,e.clientY-y0)<6){setMouse(e);pick();if(hovered)goBiz(hovered.userData.b.key);}});
  canvas.addEventListener('pointerleave',()=>{mouse.set(-9,-9);drag=null;});
  function pick(){ray.setFromCamera(mouse,camera);const hit=ray.intersectObjects(badges.filter(b=>b.material.opacity>.5))[0];setHover(hit?hit.object:null);}
  function setHover(b){if(b===hovered)return;if(hovered){hovered.material.map=hovered.userData.base;hovered.userData.s=1;}
    hovered=b;canvas.classList.toggle('pointer',!!b);
    if(b){b.material.map=b.userData.hot;b.userData.s=1.3;tip.querySelector('b').textContent=b.userData.b.name;
      const sec=SECTORS.find(s=>s.key===b.userData.b.sec);tip.querySelector('span').textContent=(sec?sec.name:'')+' · view';}
    tip.classList.toggle('on',!!b);}
  addEventListener('scroll',()=>{scrollK=Math.min(scrollY/Math.max(hero.offsetHeight,1),1);},{passive:true});
  const clock=new THREE.Clock(),V=new THREE.Vector3();let visible=true;new IntersectionObserver(([en])=>visible=en.isIntersecting).observe(canvas);
  badges.forEach(b=>b.userData.cur=1);
  (function tick(){requestAnimationFrame(tick);if(!visible||!document.body.classList.contains('hero-in'))return;const dt=Math.min(clock.getDelta(),.05),t=clock.elapsedTime;
    if(drag===null){vel*=.94;spin+=vel;}spin+=(hovered?0:(reduce?.015:.07))*dt;
    const cw=canvas.clientWidth;
    badges.forEach(b=>{const u=b.userData,a=u.angle+spin;u.cur+=(u.s-u.cur)*.15;b.position.set(Math.cos(a)*u.r,Math.sin(t*1.1+u.i)*.06,Math.sin(a)*u.r);b.scale.set(u.cur,u.cur,1);
      let op=1;if(copyEdge>0){b.getWorldPosition(V);V.project(camera);const sx=(V.x+1)/2*cw;op=Math.min(Math.max((sx-copyEdge-10)/110,.08),1);}
      b.material.opacity+=(op-b.material.opacity)*.12;});
    globe.rotation.y+=dt*.08;stars.rotation.y+=dt*.003;
    camera.position.x+=((HOME.x+par.x*.6)-camera.position.x)*.03;camera.position.y+=((HOME.y+par.y*.4+scrollK*1.2)-camera.position.y)*.03;
    camera.position.z+=((HOME.z+scrollK*2.5)-camera.position.z)*.05;camera.lookAt(look);
    if(drag===null)pick();
    if(hovered){const p=new THREE.Vector3();hovered.getWorldPosition(p);p.project(camera);const r=canvas.getBoundingClientRect(),hr=hero.getBoundingClientRect();
      tip.style.left=((p.x+1)/2*r.width+r.left-hr.left)+'px';tip.style.top=((1-p.y)/2*r.height+r.top-hr.top)+'px';}
    renderer.render(scene,camera);})();
})();
