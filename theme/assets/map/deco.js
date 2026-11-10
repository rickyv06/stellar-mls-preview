/* Stellar ClickMap decorations: shields, landmark badges, line art. v3.7.4 */
(function(){
var I={
star:'<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" fill="none" stroke="#2a2c31" stroke-width="1.5" stroke-linejoin="round"/><path d="M8.5 10.5l3.5 2 3.5-2M8.5 14l3.5 2 3.5-2" fill="none" stroke="#2a2c31" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
plane:'<path d="M21 14.5v-1.8l-7.5-4.6V3.8a1.5 1.5 0 0 0-3 0v4.3L3 12.7v1.8l7.5-2.3v4.3l-2 1.5v1.4l3.5-1 3.5 1v-1.4l-2-1.5v-4.3z" fill="none" stroke="#2a2c31" stroke-width="1.5" stroke-linejoin="round"/>',
alamo:'<path d="M4 20V11h3V9.5C7 8 8.3 7 9.5 7c.6-1.6 1.6-2.5 2.5-2.5s1.9.9 2.5 2.5C15.7 7 17 8 17 9.5V11h3v9h-6v-4.5a2 2 0 0 0-4 0V20z" fill="none" stroke="#2a2c31" stroke-width="1.5" stroke-linejoin="round"/>',
tower:'<path d="M11 21l.4-11H9.5V8.2C9.5 6.5 10.6 5.5 12 5.5s2.5 1 2.5 2.7V10h-1.9l.4 11zM11.6 5V2.5h.8V5z" fill="none" stroke="#2a2c31" stroke-width="1.5" stroke-linejoin="round"/>',
river:'<path d="M3 9c2-1.6 4-1.6 6 0s4 1.6 6 0 4-1.6 6 0M3 13.5c2-1.6 4-1.6 6 0s4 1.6 6 0 4-1.6 6 0M3 18c2-1.6 4-1.6 6 0s4 1.6 6 0 4-1.6 6 0" stroke="#2a2c31" stroke-width="1.8" fill="none" stroke-linecap="round"/>',
pearl:'<path d="M9.5 21V11.5c0-1.5.8-2.5 1.2-3.2V4h2.6v4.3c.4.7 1.2 1.7 1.2 3.2V21z" fill="none" stroke="#2a2c31" stroke-width="1.5" stroke-linejoin="round"/><circle cx="12" cy="15" r="1.6" fill="#7a5a2a"/>',
coaster:'<path d="M2.5 18c3-9 5.5-12 8-12s3 6 5 6 3-3 6-6" stroke="#2a2c31" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M5 18v3M9 9v12M14 10v11M19 9v12" stroke="#2a2c31" stroke-width="1.2"/>',
whale:'<path d="M3 13c0-3.5 3.5-6 8-6 3.6 0 6 1.7 7 4l2.5-2.5V14l-2.5-1.5c-.8 3-3.6 5-7.5 5C6 17.5 3 15.8 3 13z" fill="none" stroke="#2a2c31" stroke-width="1.5" stroke-linejoin="round"/><circle cx="7" cy="11.5" r=".9" fill="#1d6f8c"/>',
ball:'<circle cx="12" cy="12" r="8" fill="none" stroke="#2a2c31" stroke-width="1.8"/><path d="M4 12h16M12 4v16M6.3 6.3c3 2.8 3 8.6 0 11.4M17.7 6.3c-3 2.8-3 8.6 0 11.4" stroke="#2a2c31" stroke-width="1.3" fill="none"/>',
cross:'<path d="M9.5 4h5v5.5H20v5h-5.5V20h-5v-5.5H4v-5h5.5z" fill="none" stroke="#2a2c31" stroke-width="1.5" stroke-linejoin="round"/>',
cap:'<path d="M12 5l10 4.5-10 4.5L2 9.5z" fill="none" stroke="#2a2c31" stroke-width="1.5" stroke-linejoin="round"/><path d="M6.5 12v4c1.5 1.4 3.5 2 5.5 2s4-.6 5.5-2v-4L12 14.5z" fill="none" stroke="#2a2c31" stroke-width="1.5" stroke-linejoin="round"/><path d="M20 10v5" stroke="#2a2c31" stroke-width="1.2"/>',
bag:'<path d="M5.5 8h13l-1 13h-11z" fill="none" stroke="#2a2c31" stroke-width="1.5" stroke-linejoin="round"/><path d="M9 10V7a3 3 0 0 1 6 0v3" stroke="#2a2c31" stroke-width="1.6" fill="none"/>',
cave:'<path d="M2.5 20c1-8 4.5-13 9.5-13s8.5 5 9.5 13h-5.5c-.5-3.5-2-6-4-6s-3.5 2.5-4 6z" fill="none" stroke="#2a2c31" stroke-width="1.5" stroke-linejoin="round"/>',
slide:'<path d="M5 20V5h2.5v3.5c4 0 6 3 7 6.5.7 2.3 2.2 3.5 4.5 3.5V20c-3.5 0-5.5-1.8-6.6-5C11.3 11.8 10 10.8 7.5 10.8V20z" fill="none" stroke="#2a2c31" stroke-width="1.5" stroke-linejoin="round"/>',
store:'<path d="M3.5 9l1.6-4.5h13.8L20.5 9zM5 10.5h14V20h-4.5v-5h-5v5H5z" fill="none" stroke="#2a2c31" stroke-width="1.5" stroke-linejoin="round"/>',
tree:'<path d="M12 3l5.5 8h-3l4 5.5H13V21h-2v-4.5H5.5l4-5.5h-3z" fill="none" stroke="#2a2c31" stroke-width="1.5" stroke-linejoin="round"/>',
golf:'<path d="M9 21V3l8 3.5L10.5 10V21z" fill="none" stroke="#2a2c31" stroke-width="1.5" stroke-linejoin="round"/><ellipse cx="11" cy="20.5" rx="5" ry="1.2" fill="none" stroke="#2a2c31" stroke-width="1.5" stroke-linejoin="round"/>',
mission:'<path d="M5 21v-9l7-5 7 5v9h-5v-4a2 2 0 0 0-4 0v4zM11.3 3h1.4v3h-1.4zM10.3 4h3.4v1h-3.4z" fill="none" stroke="#2a2c31" stroke-width="1.5" stroke-linejoin="round"/>'
};
var C={mil:'#26374f',air:'#121315',land:'#8a6d3b',fun:'#c79a2b',water:'#1d6f8c',sport:'#c4532f',med:'#2f6fa3',edu:'#7a2e3a',shop:'#a8323a',park:'#3d7a4c',golf:'#5c8a3a',hist:'#6b5a46'};
var P=[
['The Alamo','alamo','land',-98.4861,29.4260,0],
['Tower of the Americas','tower','land',-98.4838,29.4152,11],
['River Walk','river','water',-98.4930,29.4228,11],
['The Pearl','pearl','land',-98.4800,29.4430,11],
['Six Flags Fiesta Texas','coaster','fun',-98.6097,29.5994,0],
['SeaWorld San Antonio','whale','water',-98.7006,29.4583,0],
['Frost Bank Center','ball','sport',-98.4375,29.4270,0],
['San Antonio International Airport','plane','air',-98.4698,29.5337,0],
['JBSA Lackland','star','mil',-98.6200,29.3840,0],
['JBSA Fort Sam Houston','star','mil',-98.4370,29.4640,0],
['JBSA Randolph','star','mil',-98.2788,29.5297,0],
['Camp Bullis','star','mil',-98.5700,29.6900,0],
['South Texas Medical Center','cross','med',-98.5780,29.5080,0],
['UTSA','cap','edu',-98.6197,29.5780,10],
['The Rim and La Cantera','bag','shop',-98.5930,29.6150,10],
['Natural Bridge Caverns','cave','park',-98.3426,29.6927,0],
['Gruene Historic District','store','hist',-98.1000,29.7380,0],
['Schlitterbahn','slide','water',-98.1300,29.7065,0],
['Boerne Main Street','store','hist',-98.7320,29.7947,0],
['Brackenridge Park','tree','park',-98.4700,29.4620,11],
['Government Canyon','tree','park',-98.7640,29.5500,0],
['Friedrich Wilderness Park','tree','park',-98.6300,29.6430,10],
['TPC San Antonio','golf','golf',-98.421,29.6870,0],
['Brackenridge Golf Course','golf','golf',-98.4740,29.4520,12],
['Mission San José','mission','hist',-98.4790,29.3620,0],
['McAllister Park','tree','park',-98.4500,29.5500,10]
];
var SH=[['10',-98.6350,29.6150],['10',-98.3050,29.4620],['35',-98.3500,29.5630],['35',-98.5480,29.3420],['410',-98.4230,29.5240],['410',-98.4100,29.3520],['1604',-98.5600,29.6120],['1604',-98.7050,29.4300],['281',-98.4650,29.6450],['151',-98.6550,29.4490],['90',-98.6100,29.4040]];
function svg(w,h,b){return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '+w+' '+h+'" width="'+w+'" height="'+h+'">'+b+'</svg>'}
var MT=svg(64,28,'<path d="M2 26L18 6l7 9 6-7 13 18M36 26l12-14 14 14M14 11l4 4 4-4" stroke="#1f6b68" stroke-width="1.5" fill="none" stroke-linejoin="round" stroke-linecap="round"/>'),
HL=svg(70,20,'<path d="M2 18c8-12 16-14 24-6 6-7 13-8 20-2 7-6 14-4 22 8" stroke="#2a2c31" stroke-width="1.4" fill="none" stroke-linecap="round"/>'),
FM=function(a){return svg(46,40,'<g transform="rotate('+a+' 23 20)" stroke="#2a2c31" stroke-width="1.6" stroke-linecap="round">'+[6,12,18,24,30,36].map(function(y){return '<path d="M6 '+y+'h34"/>'}).join('')+'</g>')},
TR=svg(14,18,'<path d="M7 1C3.5 1 2 4 2 6.5 2 9.5 4.5 11 7 11s5-1.5 5-4.5C12 4 10.5 1 7 1zM7 11v6" stroke="#2a2c31" stroke-width="1.3" fill="none" stroke-linecap="round"/>');
var D=[];
[[-98.86,29.80],[-98.80,29.74],[-98.93,29.70],[-98.66,29.83],[-98.88,29.62],[-98.58,29.79],[-98.47,29.82]].forEach(function(p,i){D.push([i%2?HL:MT,p])});
[[-98.30,29.29,0],[-98.22,29.36,90],[-98.38,29.22,45],[-98.58,29.24,0],[-98.18,29.27,-30],[-97.98,29.45,90],[-98.05,29.39,0],[-98.78,29.32,45],[-98.95,29.43,0],[-98.00,29.62,-30]].forEach(function(p){D.push([FM(p[2]),[p[0],p[1]]])});
[[-98.26,29.33],[-98.34,29.26],[-98.12,29.31],[-98.65,29.27],[-98.71,29.25],[-98.84,29.36],[-98.91,29.52],[-98.80,29.58],[-98.02,29.55],[-98.08,29.79],[-98.25,29.78],[-98.38,29.80],[-98.95,29.79],[-98.70,29.68]].forEach(function(p){D.push([TR,p])});
window.STELLAR_MAPDECO=function(map,ml,wrap){
  D.forEach(function(d){var e=document.createElement('div');e.className='amdeco';e.innerHTML=d[0];new ml.Marker({element:e}).setLngLat(d[1]).addTo(map)});
  SH.forEach(function(s){var e=document.createElement('div');e.className='amshield';e.textContent=s[0];e.setAttribute('aria-hidden','true');new ml.Marker({element:e}).setLngLat([s[1],s[2]]).addTo(map)});
  var ms=[];P.forEach(function(p){var e=document.createElement('div');e.className='ambw';e.innerHTML='<div class="ambadge" style="--ac:'+(/water|park|golf/.test(p[2])?'#1f6b68':'#9ea3ab')+'"><svg viewBox="0 0 24 24" aria-hidden="true">'+I[p[1]]+'</svg><span class="ambt">'+p[0]+'</span></div>';e.setAttribute('role','img');e.setAttribute('aria-label',p[0]);var m=new ml.Marker({element:e}).setLngLat([p[3],p[4]]).addTo(map);e.setAttribute('aria-label',p[0]);ms.push([e,p[5]])});
  function z(){var Z=map.getZoom();ms.forEach(function(x){x[0].style.display=Z>=x[1]?'':'none'});wrap.classList.toggle('amz',Z>=11)}
  map.on('zoom',z);z();
};
})();
