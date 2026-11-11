// Agenda de la Fundación Ford: contenido organizado por bloques y sesiones.
const agenda = [
  [
    {
      "time": "08:30–09:00",
      "title": "Registro de asistentes",
      "kind": "break"
    },
    {
      "time": "09:00–09:30",
      "title": "Sesión plenaria inaugural",
      "description": "Apertura del encuentro y reconocimiento de la alianza histórica entre la Fundación Ford y la Universidad de los Andes.",
      "people": [
        [
          "Nicholas Turner",
          "Vicepresidente Ejecutivo de la Fundación Ford"
        ],
        [
          "Raquel Bernal",
          "Rectora de la Universidad de los Andes"
        ]
      ]
    },
    {
      "time": "09:30–10:30",
      "title": "Contexto general",
      "description": "Seis décadas de cooperación filantrópica, autorreflexión y adaptación institucional a los cambiantes regímenes políticos en el Cono Sur, la Región Andina y Colombia.",
      "moderator": [
        [
          "Helena Hofbauer",
          "Directora de la línea de Espacio Cívico y Gobierno de la Fundación Ford"
        ]
      ],
      "people": [
        [
          "Cynthia Sanborn (video)",
          "Cargo pendiente de confirmación"
        ],
        [
          "Angelika Rettberg",
          "Decana de la Facultad de Ciencias Sociales de la Universidad de los Andes"
        ],
        [
          "Martín Abregú",
          "Vicepresidente Internacional y exdirector regional de la Fundación Ford"
        ]
      ]
    },
    {
      "time": "10:30–11:00",
      "title": "Pausa para café",
      "kind": "break"
    },
    {
      "block": "Recorrido histórico",
      "range": "11:00–13:00"
    },
    {
      "time": "11:00–11:50",
      "title": "Modernización del Estado, educación superior e inclusión económica",
      "description": "De la modernización de la educación superior y el fortalecimiento institucional a la inclusión financiera y el desarrollo comunitario.",
      "moderator": [
        [
          "Luis Fernando Pérez",
          "Exdirector de programas de la Fundación Ford"
        ]
      ],
      "people": [
        [
          "Andrés Guiot",
          "Profesor adjunto de la Facultad de Economía, Universidad de los Andes"
        ],
        [
          "Carolina Trivelli",
          "Exministra de Desarrollo e Inclusión Social del Perú e investigadora del IEP"
        ],
        [
          "Tatiana Rincón",
          "Presidenta de Género, Protección Social y Medios de Vida de Fundación Capital"
        ]
      ]
    },
    {
      "time": "11:50–12:40",
      "title": "Dictadura, violencia y el giro hacia los derechos humanos",
      "description": "Reflexión sobre la defensa de las libertades civiles, la protección de derechos humanos y el fortalecimiento de organizaciones independientes.",
      "moderator": [
        [
          "Rodrigo Uprimny",
          "Jurista colombiano y exdirector de Dejusticia"
        ]
      ],
      "people": [
        [
          "Gustavo Gallón (homenaje en video)",
          "In memoriam"
        ],
        [
          "Ana María Rodríguez",
          "Directora de la Comisión Colombiana de Juristas"
        ],
        [
          "Michael Shifter (video)",
          "Exdirector del Diálogo Interamericano y exdirector de programas de la Fundación Ford"
        ],
        [
          "Patricia Tappatá Valdez",
          "Vinculada a Poder Ciudadano y Memoria Abierta; exconsultora de la Fundación Ford"
        ],
        [
          "Jorge González Jácome",
          "Decano de la Facultad de Derecho de la Universidad de los Andes"
        ]
      ]
    },
    {
      "time": "12:40–13:00",
      "title": "Preguntas de la audiencia",
      "description": "Diálogo abierto con el público sobre el legado de la cooperación filantrópica en la región.",
      "moderator": [
        [
          "Rodrigo Uprimny",
          "Jurista colombiano y exdirector de Dejusticia"
        ]
      ]
    },
    {
      "time": "13:00–14:30",
      "title": "Almuerzo",
      "description": "Cafetería Central · Universidad de los Andes",
      "kind": "lunch"
    },
    {
      "block": "La lucha contra la desigualdad en la Región Andina",
      "range": "14:30–17:15"
    },
    {
      "time": "14:30–14:45",
      "title": "Una década de la oficina regional en Bogotá",
      "description": "Balance del trabajo de la oficina regional desde su reapertura en 2016.",
      "people": [
        [
          "Javier Ciurlizza",
          "Director Regional de la Fundación Ford para la Región Andina"
        ]
      ]
    },
    {
      "time": "14:45–15:45",
      "title": "Justicia climática y radicalización de la democracia",
      "description": "Conversación sobre participación comunitaria, transición energética, protección de ecosistemas y derechos territoriales.",
      "moderator": [
        [
          "Camilo León",
          "Oficial de Programas de la Fundación Ford para la Región Andina"
        ]
      ],
      "people": [
        [
          "Anthony Bebbington (video)",
          "Director de la línea global de Recursos Naturales y Justicia Climática de la Fundación Ford"
        ],
        [
          "Ana Carolina González",
          "Directora de Programas para América Latina en NRGI"
        ],
        [
          "Viviana González Moreno",
          "Subdirectora del Centro SIEMBRA"
        ],
        [
          "Joanna Barney",
          "Directora del área de ambiente, energía y comunidades de INDEPAZ"
        ]
      ]
    },
    {
      "time": "15:45–16:00",
      "title": "Pausa para café",
      "kind": "break"
    },
    {
      "time": "16:00–17:00",
      "title": "Derechos humanos, democracia y Estado de derecho",
      "description": "Estrategias de protección del espacio cívico, defensa de derechos y lucha contra desigualdades estructurales.",
      "moderator": [
        [
          "Melissa Gómez",
          "Oficial de Programa de la Fundación Ford, Región Andina"
        ]
      ],
      "people": [
        [
          "Diana Guzmán",
          "Directora de Dejusticia"
        ],
        [
          "Clemencia Carabalí",
          "Asociación de Mujeres Afrodescendientes del Norte del Cauca (ASOM)"
        ],
        [
          "Tania Pariona",
          "Secretaria Ejecutiva de la Coordinadora Nacional de Derechos Humanos del Perú"
        ],
        [
          "Ingrid Bolívar Ramírez",
          "Profesora Asociada de la Universidad de los Andes"
        ]
      ]
    },
    {
      "time": "17:00–17:15",
      "title": "Palabras de clausura",
      "people": [
        [
          "Kim Bayer",
          "Vicepresidente adjunto de Programas Internacionales"
        ]
      ]
    }
  ],
  [
    {
      "time": "10:30–11:00",
      "title": "Registro de asistentes",
      "kind": "break"
    },
    {
      "time": "11:00–12:30",
      "title": "Una década después de la firma del Acuerdo: el futuro de la paz en Colombia (2016–2026)",
      "description": "Reflexión sobre diez años de implementación del Acuerdo de Paz, los retos de seguridad y el papel de la sociedad civil y la cooperación internacional.",
      "people": [
        [
          "Javier Ciurlizza",
          "Palabras introductorias · Director Regional de la Fundación Ford"
        ],
        [
          "Francisco de Roux",
          "Moderador del segmento 1 · Expresidente de la Comisión de la Verdad"
        ],
        [
          "Martha Luz Amorocho",
          "Madre de una de las víctimas del atentado del Club El Nogal"
        ],
        [
          "Jacqueline Castillo",
          "Fundación Madres de los Falsos Positivos de Soacha y Bogotá (MAFAPO)"
        ],
        [
          "Maryury Mosquera Palacios",
          "Guardiana del río Atrato · FISCH"
        ],
        [
          "Paula Gaviria",
          "Moderadora del segmento 2 · Directora de Fundación COMPAZ"
        ],
        [
          "Sergio Jaramillo",
          "Presidente de la Fundación Acordemos; ex Alto Comisionado para la Paz"
        ]
      ],
      "special": "Intervención especial: Juan Manuel Santos, expresidente de Colombia"
    }
  ]
];
const agendaList=document.getElementById('agenda-list');
const dayTitle=document.getElementById('agenda-day-title');
function el(tag,className,text){const n=document.createElement(tag);if(className)n.className=className;if(text!==undefined)n.textContent=text;return n;}
function showDay(day){
  agendaList.replaceChildren();
  dayTitle.textContent=day===0?'Día 1 · Legado institucional y evolución regional':'Día 2 · El futuro de la paz en Colombia';
  agenda[day].forEach(item=>{
    if(item.block){agendaList.append(el('div','agenda-block',`${item.block} · ${item.range}`));return;}
    const article=el('article','session'+(item.kind==='break'?' session-break':item.kind==='lunch'?' session-break session-lunch':item.special?' session-special':''));
    article.append(el('time','',item.time));
    const body=el('div');body.append(el('h3','',item.title));
    if(item.description)body.append(el('p','session-description',item.description));
    for(const [field,label] of [['moderator','Modera'],['people','Participantes']]){
      if(!item[field]?.length)continue;
      const group=el('div','person-group');group.append(el('p','people-label',label));
      const ul=el('ul','people-list');
      for(const [name,role] of item[field]){
        const li=el('li');li.append(document.createTextNode(name));
        if(role)li.append(el('span','person-role',' | '+role));
        ul.append(li);
      }
      group.append(ul);body.append(group);
    }
    if(item.special)body.append(el('p','keynote',item.special));
    article.append(body);agendaList.append(article);
  });
  document.querySelectorAll('.tab').forEach((button,i)=>{
    const active=i===day;button.classList.toggle('active',active);button.setAttribute('aria-selected',String(active));
  });
}
document.querySelectorAll('.tab').forEach(button=>button.addEventListener('click',()=>showDay(Number(button.dataset.day))));
showDay(0);
// Leyendas revisadas a partir del Word oficial.
let photos=[];
let count=9;
const gallery=document.getElementById('gallery');
function renderGallery(){
  gallery.replaceChildren();
  photos.slice(0,count).forEach(p=>{
    const card=el('article','photo-card');
    const img=el('img');img.src=p.src;img.alt=p.description?`${p.title} ${p.description}`:p.title;img.loading='lazy';
    const caption=el('div','photo-caption');caption.append(el('h3','photo-title',p.title));
    if(p.description)caption.append(el('p','photo-description',p.description));
    if(p.credit)caption.append(el('p','photo-credit',p.credit));
    card.append(img,caption);gallery.append(card);
  });
  document.getElementById('more').hidden=count>=photos.length;
}
document.getElementById('more').addEventListener('click',()=>{count+=9;renderGallery()});
fetch('assets/photos.json').then(r=>{if(!r.ok)throw Error('No se cargaron fotografías');return r.json()}).then(data=>{photos=data;renderGallery()}).catch(err=>{console.warn(err);document.getElementById('more').hidden=true});
const menu=document.querySelector('.menu'),nav=document.querySelector('#nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));

// Historia y perfiles: contenido local, compatible con GitHub Pages (HTTP estático).
async function loadContent(path){const response=await fetch(path);if(!response.ok)throw Error('No se pudo cargar '+path);return response.json();}
function addText(parent,tag,cls,txt){const node=document.createElement(tag);if(cls)node.className=cls;node.textContent=txt||'';parent.append(node);return node;}
loadContent('assets/history.json').then(items=>{const root=document.getElementById('history-grid');for(const item of items){const card=addText(root,'article','history-card','');const img=document.createElement('img');img.src=item.src;img.loading='lazy';img.alt=item.title;card.append(img);const box=addText(card,'div','history-card-copy','');addText(box,'h3','',item.title);addText(box,'p','',item.description);addText(box,'small','history-credit',item.credit);}}).catch(err=>console.warn(err));
let allBios=[];let currentSpeakerDay=0;
function renderSpeakers(){const root=document.getElementById('speaker-grid');root.replaceChildren();for(const person of allBios.filter(p=>!currentSpeakerDay||p.day===currentSpeakerDay)){const card=addText(root,'article','speaker-card','');card.dataset.person=person.name;if(person.image){const img=document.createElement('img');img.src=person.image;img.alt='Retrato de '+person.name;img.loading='lazy';card.append(img);}else{addText(card,'div','speaker-placeholder',person.name.split(' ').map(x=>x[0]).slice(0,2).join(''));}const content=addText(card,'div','speaker-content','');addText(content,'h3','',person.name);addText(content,'p','speaker-role',person.role);const details=document.createElement('details');details.className='speaker-details';const summary=document.createElement('summary');summary.textContent='Leer biografía';details.append(summary);addText(details,'p','speaker-bio',person.description);content.append(details);}}
loadContent('assets/bios.json').then(data=>{allBios=data;renderSpeakers();}).catch(err=>console.warn(err));
document.querySelectorAll('[data-speaker-day]').forEach(btn=>btn.addEventListener('click',()=>{currentSpeakerDay=Number(btn.dataset.speakerDay);document.querySelectorAll('[data-speaker-day]').forEach(b=>{const active=b===btn;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});renderSpeakers();}));
