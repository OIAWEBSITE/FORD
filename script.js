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
// Fotografías ordenadas cronológicamente; las de fecha desconocida quedan al final.
const photos = [
  {
    "src": "assets/photos/foto-02.webp",
    "title": "Amazonía peruana, 2000.",
    "original": "2. Association Minga Peru produces the show as part of a broader effort to promote sexual and reproductive health among indigenous women..jpg",
    "description": "La Fundación impulsó proyectos de salud sexual y reproductiva dirigidos a promover estos derechos fundamentales en comunidades de mujeres indígenas.",
    "credit": "© Rhodri Jones"
  },
  {
    "src": "assets/photos/foto-24.webp",
    "title": "Amazonía peruana, 2000.",
    "original": "24. Taller Tambo Minga - Amazonía peruana.jpg",
    "description": "Taller de capacitación a promotoras comunitarias en Tambo, Ayacucho. Los locutores de «Bienvenida Salud» transmiten desde los estudios de La Voz de la Selva, una emisora líder en la región amazónica peruana. La Asociación Minga Perú produce el programa como parte de una iniciativa más amplia para promover la salud sexual y reproductiva entre las mujeres indígenas.",
    "credit": "© Rhodri Jones"
  },
  {
    "src": "assets/photos/foto-31.webp",
    "title": "Lima, Perú, 2000.",
    "original": "31. Cecilia Blondet.jpeg",
    "description": "Cecilia Blondet Montero durante su período como Directora General del Instituto de Estudios Peruanos (IEP).",
    "credit": ""
  },
  {
    "src": "assets/photos/foto-06.webp",
    "title": "Centro de Estudios e Investigaciones Afro, Uruguay, 2001.",
    "original": "6. Center for Afro Study and Research Uruguay, no year.jpg",
    "description": "Los defensores de la justicia racial en Uruguay debaten formas de aumentar la participación y coordinar estrategias de cara a la Conferencia Mundial de la ONU contra el racismo. Su organización, Mundo Afro, contribuyó a formar la Alianza Estratégica de los Pueblos Afroamericanos, una red de 28 grupos que trabajan para poner fin a la discriminación racial en América Latina y el Caribe.",
    "credit": "© Rhodri Jones"
  },
  {
    "src": "assets/photos/foto-10.webp",
    "title": "Valparaíso, Chile, 2001.",
    "original": "10. Education, Media, Arts and Culture in Chile.jpg",
    "description": "Estudiantes chilenos aprendiendo sobre flores, hierbas y hortalizas locales en un centro comunitario de Valparaíso. La iniciativa busca formas de ampliar las oportunidades educativas, especialmente para estudiantes de grupos históricamente desatendidos. Ford apoya programas que fomentan la participación cívica, mejoran la formación docente y promueven alianzas que ayudan a los niños a alcanzar el éxito.",
    "credit": "© Rhodri Jones"
  },
  {
    "src": "assets/photos/foto-11.webp",
    "title": "Valparaíso, Chile, 2001.",
    "original": "11. Chilean students are learning about local flowers, herbs and vegetables at a community center in Valparaiso, a city known for its steep hills and historic seaport..jpg",
    "description": "Estudiantes chilenos aprendiendo sobre flores, hierbas y hortalizas locales en un centro comunitario de Valparaíso. Su escuela ha comenzado a incorporar el patrimonio y la historia locales en el plan de estudios y a mejorar las prácticas docentes. La iniciativa ayuda a alumnos de educación preescolar y primaria de las provincias de Valparaíso y Chiloé a dar sentido y valor a la cultura local.",
    "credit": "© Rhodri Jones"
  },
  {
    "src": "assets/photos/foto-25.webp",
    "title": "Valparaíso, Chile, 2001.",
    "original": "25. The foundation looks for ways to broaden educational opportunities, especially for students from historically underserved groups. chile.jpg",
    "description": "La iniciativa ayudó a estudiantes de preescolar y primaria en las provincias de Valparaíso y Chile a dar sentido y valor a la cultura local.",
    "credit": "© Rhodri Jones"
  },
  {
    "src": "assets/photos/foto-28.webp",
    "title": "Amazonía peruana, 2001.",
    "original": "28. Welcome to Health broadcast from the studios of the Jungle_s Voice, a leading station in the Peruvian Amazon region. No year.jpg",
    "description": "Generación de activos y desarrollo comunitario con comunidades indígenas del Amazonas.",
    "credit": "© Rhodri Jones"
  },
  {
    "src": "assets/photos/foto-01.webp",
    "title": "Visita de la Junta Directiva al Perú en 2010.",
    "original": "1. 2010_Peru_Trustee_Visit.jpg",
    "description": "Jean Paul Lacoste y Carolina Trivelli conversan sobre el programa de medios de vida rurales y seguridad económica en el Perú.",
    "credit": "© Pablo Farías Campero"
  },
  {
    "src": "assets/photos/foto-26.webp",
    "title": "Visita de la Junta Directiva al Perú en 2010.",
    "original": "26. Visita trustees a Peru 2010 2jpg.JPG",
    "description": "En la foto: Luis Ubiñas, Frank DiGiovanni, Martín Abregú.",
    "credit": "© Frank DiGiovanni"
  },
  {
    "src": "assets/photos/foto-27.webp",
    "title": "Universidad Nacional Intercultural de la Amazonía (UNIA), 2011.",
    "original": "27. Warmayu Intercultural Meeting 2011.jpg",
    "description": "Encuentro Intercultural Warmayu. A lo largo de estos días se intercambiaron experiencias, conocimientos, proyectos entre los participantes de la costa, sierra y selva del Perú.",
    "credit": "© Sergio Urday"
  },
  {
    "src": "assets/photos/foto-03.webp",
    "title": "Perú, 2012.",
    "original": "3. Aurelia Baldeón y otros  vecinos de Accomarca reciben asistencia jurídica del IDL,.jpg",
    "description": "Aurelia Baldeón Palacio vive en el pueblo Accomarca. Aurelia vive de lo que siembra en su chacra. Aurelia Baldeón y otros vecinos de Accomarca reciben asistencia jurídica del IDL, para lograr justicia en el asesinato de sus hijos.",
    "credit": "© Sergio Urday"
  },
  {
    "src": "assets/photos/foto-05.webp",
    "title": "Perú, 2012.",
    "original": "5. Capacitaci—n Consulta Previa Yutupis.jpg",
    "description": "Capacitación sobre consulta previa en la comunidad de Yutupis a orilla del río Santiago.",
    "credit": "© Sergio Urday"
  },
  {
    "src": "assets/photos/foto-09.webp",
    "title": "La Guajira, Colombia, 2012.",
    "original": "9. Economic Development in Guajira 2012.jpg",
    "description": "La Fundación Cerrejón trabaja para el fortalecimiento institucional de La Guajira promoviendo el desarrollo de competencias de empleabilidad a través de la educación, el emprendimiento y el intercambio de habilidades en las comunidades indígenas de la región.",
    "credit": "© Patricia Rincon Mautner"
  },
  {
    "src": "assets/photos/foto-12.webp",
    "title": "La Guajira, Colombia, 2012.",
    "original": "12. La Guajira Colombia.jpg",
    "description": "La Fundación Cerrejón trabaja para el fortalecimiento institucional de La Guajira promoviendo el desarrollo de competencias de empleabilidad a través de la educación, el emprendimiento y el intercambio de habilidades en las comunidades indígenas de la región.",
    "credit": "© Patricia Rincon Mautner"
  },
  {
    "src": "assets/photos/foto-14.webp",
    "title": "Lima, Perú, 2012.",
    "original": "14. LIDERES JOVENES VILLA EL SALVADOR.jpg",
    "description": "Liderazgos juveniles en Villa El Salvador, Lima.",
    "credit": "© Sergio Urday"
  },
  {
    "src": "assets/photos/foto-15.webp",
    "title": "Perú, 2012.",
    "original": "15. Luz Marina Paucar y Alfredo Huaman, tienen dos hijos, Fidel 7 años, Luz María 2 años. Participan del programa de Plan internacional,.jpg",
    "description": "Luz Marina Paucar y Alfredo Huaman participan del programa de Plan Internacional que ayuda y asesora en temas de cocinas mejoradas, ordenamiento de las casa y almacenamiento de alimentos para recibir ingresos.",
    "credit": "© Sergio Urday"
  },
  {
    "src": "assets/photos/foto-16.webp",
    "title": "Perú, 2012.",
    "original": "16. María Escobar (40) and her husband Sebastian Rodriguez (39) are joint beneficiaries who receive financial and productive training, a program that carries out IEP.jpg",
    "description": "María Escobar y su esposo Sebastián Rodríguez son beneficiarios de un programa de capacitación financiera y productiva llevado a cabo por el IEP en colaboración con otras instituciones del estado. Residen en San Antonio de Culluchaca, en la provincia de Huanta. Su sustento proviene de la agricultura y de la crianza de ganado vacuno y ovino.",
    "credit": "© Patricia Rincon Mautner"
  },
  {
    "src": "assets/photos/foto-17.webp",
    "title": "Arequipa, Perú, 2012.",
    "original": "17. Mujeres tejedoras en la comunidad de Sibayo, organizadas en una asociación venden sus tejidos en el mercado local y regional. Perú.jpg",
    "description": "Mujeres tejedoras en la comunidad de Sibayo, organizadas en una asociación venden sus tejidos en el mercado local y regional.",
    "credit": "© Sergio Urday"
  },
  {
    "src": "assets/photos/foto-18.webp",
    "title": "Perú, 2012.",
    "original": "18. PERU Congreso Indigena 2012.jpg",
    "description": "Comunidades indígenas se reúnen en el Congreso Político del Movimiento Indígena del Perú.",
    "credit": "© Patricia Rincon Mautner"
  },
  {
    "src": "assets/photos/foto-29.webp",
    "title": "Perú, 2012.",
    "original": "29. Young CHIRAPAQ Communicators.jpg",
    "description": "Jóvenes comunicadores de CHIRAPAQ. Jenny Bellido y Juan Quichua, miembros del programa de «Red de comunicadores Indígenas Quechuas de Ayacucho».",
    "credit": "© Sergio Urday"
  },
  {
    "src": "assets/photos/foto-13.webp",
    "title": "Bogotá, Colombia, 2013.",
    "original": "13. Latin America 50th Anniversary - Seminar in Bogota.jpg",
    "description": "Aniversario 50 años en América Latina: Seminario de conmemoración en Bogotá. En la foto: Myriam Méndez-Montalvo, Marta Tellado, Maya Harris y Alfred Ironside.",
    "credit": ""
  },
  {
    "src": "assets/photos/foto-19.webp",
    "title": "Cali, Colombia, 2014.",
    "original": "19. President Visit to Colombia in 2014 1.jpg",
    "description": "Visita presidencial a Colombia, a bordo de un Mío. En la foto: Rodrigo Guerrero Velasco, Xavier Briggs y Darren Walker.",
    "credit": "© Patricia Rincon Mautner"
  },
  {
    "src": "assets/photos/foto-20.webp",
    "title": "Bogotá, Colombia, 2014.",
    "original": "20. President Visit to Colombia in 2014 2.jpg",
    "description": "Visita presidencial a Colombia. Reunión con el ex-presidente Santos. En la foto: Juan Manuel Santos, Darren Walker, Martin Abregú y Miriam Méndez-Montalvo.",
    "credit": "© Patricia Rincon Mautner"
  },
  {
    "src": "assets/photos/foto-21.webp",
    "title": "21. President Visit to Colombia in 2014 4",
    "original": "21. President Visit to Colombia in 2014 4.jpg",
    "description": "",
    "credit": "",
    "needsReview": true
  },
  {
    "src": "assets/photos/foto-04.webp",
    "title": "Colombia, 2016.",
    "original": "4. Bogota Office Opening Reception 2016.jpg",
    "description": "Recepción de inauguración de la reapertura de la oficina en Bogotá. En la foto: Rodrigo Cruz, Ana Carolina González, Javier Ciurlizza, Sindis Mesa, Luis Fernando Pérez y Mia Dechamps.",
    "credit": "© Patricia Rincon-Mautner"
  },
  {
    "src": "assets/photos/foto-30.webp",
    "title": "Bogotá, 2016.",
    "original": "30. Placa Universidad Los Andes.jpeg",
    "description": "Entrega de placa de la Universidad de Los Andes a la Fundación Ford en agradecimiento por sus aportes a la universidad.",
    "credit": "© Alejandro Gómez"
  },
  {
    "src": "assets/photos/foto-32.webp",
    "title": "Cusco, Perú, 2017.",
    "original": "31. Visita de equipo a Cusco 2017.JPG",
    "description": "Visita del equipo de la región andina a Cusco.",
    "credit": "© Luis Fernando Pérez"
  },
  {
    "src": "assets/photos/foto-07.webp",
    "title": "Visita presidencial a la oficina de la región andina, 2022.",
    "original": "7. Colombia Social Bond meeting with foundation leaders 2022.jpg",
    "description": "Un encuentro con representantes de las cinco fundaciones empresariales privadas que lideran el Bono Social de Colombia y la Alianza para la Transformación Social, Oriri. La iniciativa surgió en 2020 y es un esfuerzo encabezado por cinco fundaciones privadas vinculadas a las principales empresas y grupos empresariales de Colombia: Fundación Corona, Fundación Saldarriaga Concha, Fundación WWB Colombia y Fundación Bolívar Davivienda.",
    "credit": "© Sergio Garzon"
  },
  {
    "src": "assets/photos/foto-08.webp",
    "title": "Visita presidencial a la oficina de la región andina, 2022.",
    "original": "8. DW with AR team 2022.jpg",
    "description": "Presidente Darren Walker con el equipo de la Fundación Ford para la región andina.",
    "credit": "© Sergio Garzon"
  },
  {
    "src": "assets/photos/foto-37.webp",
    "title": "Visita DW a Cali 2022 2",
    "original": "Visita DW a Cali 2022 2.jpg",
    "description": "",
    "credit": "",
    "needsReview": true
  },
  {
    "src": "assets/photos/foto-38.webp",
    "title": "Visita DW a Cali 2022",
    "original": "Visita DW a Cali 2022.jpg",
    "description": "",
    "credit": "",
    "needsReview": true
  },
  {
    "src": "assets/photos/foto-22.webp",
    "title": "Bogotá, 2026.",
    "original": "22. President Visit to Colombia in 2026.jpg",
    "description": "Visita presidencial a la oficina de la Región Andina. Visita al Centro de Memoria, Paz y Reconciliación. En la foto: Heather Gerken y Javier Ciurlizza.",
    "credit": "© Liliana Sánchez"
  },
  {
    "src": "assets/photos/foto-23.webp",
    "title": "Bogotá, 2026.",
    "original": "23. Presidential visit 2026 1.jpg",
    "description": "Visita presidencial a la oficina de la Región Andina. Reunión sobre lideresas … En la foto: Giuliana Bravo, Audrey Mena, Lina Tobón, Heather Gerken, María Cecilia Ramírez y Tarcila Rivera.",
    "credit": "© Liliana Sánchez"
  },
  {
    "src": "assets/photos/foto-33.webp",
    "title": "Bogota Office Opening Reception 1",
    "original": "Bogota Office Opening Reception 1.jpg",
    "description": "",
    "credit": "",
    "needsReview": true
  },
  {
    "src": "assets/photos/foto-34.webp",
    "title": "Chocó Colombia",
    "original": "Chocó Colombia.jpg",
    "description": "",
    "credit": "",
    "needsReview": true
  },
  {
    "src": "assets/photos/foto-35.webp",
    "title": "Education, Media, Arts and Culture in Valparaiso",
    "original": "Education, Media, Arts and Culture in Valparaiso.jpg",
    "description": "",
    "credit": "",
    "needsReview": true
  },
  {
    "src": "assets/photos/foto-36.webp",
    "title": "IEP",
    "original": "IEP.jpeg",
    "description": "",
    "credit": "",
    "needsReview": true
  }
];
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
document.getElementById('more').addEventListener('click',()=>{count+=9;renderGallery()});renderGallery();
const menu=document.querySelector('.menu'),nav=document.querySelector('#nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
