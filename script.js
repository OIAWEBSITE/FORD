const sessions=[[["09:00–09:30", "Sesión plenaria inaugural", "Nicholas Turner · Raquel Bernal"], ["09:30–10:30", "Contexto general", "Modera: Helena Hofbauer · Cynthia Sanborn (video), Angelika Rettberg, Martín Abregú"], ["10:30–11:00", "Pausa para café", ""], ["11:00–11:50", "Modernización del Estado, educación superior e inclusión económica", "Modera: Luis Fernando Pérez · Andrés Guiot, Carolina Trivelli, Tatiana Rincón"], ["11:50–12:40", "Dictadura, violencia y el giro hacia los derechos humanos", "Modera: Rodrigo Uprimny · Homenaje a Gustavo Gallón; Ana María Rodríguez, Michael Shifter (video), Patricia Tappatá Valdez"], ["12:40–13:00", "Preguntas de la audiencia", "Modera: Rodrigo Uprimny"], ["13:00–14:30", "Almuerzo", "Cafetería Central · Universidad de los Andes"], ["14:30–14:45", "Una década de la oficina regional en Bogotá", "Javier Ciurlizza"], ["14:45–15:45", "Justicia climática y radicalización de la democracia", "Modera: Camilo León · Anthony Bebbington (video), Ana Carolina González, Viviana González Moreno, Joanna Barney"], ["15:45–16:00", "Pausa para café", ""], ["16:00–17:00", "Derechos humanos, democracia y Estado de derecho", "Modera: Melissa Gómez · Diana Guzmán, Clemencia Carabalí, Tania Pariona, Ingrid Bolívar Ramírez"], ["17:00", "Palabras de clausura", ""]], [["11:00–12:30", "Una década después de la firma del Acuerdo: el futuro de la paz en Colombia (2016–2026)", "Introducción: Javier Ciurlizza · Modera: Paula Gaviria · Francisco de Roux, Maryury Mosquera Palacios, Sergio Jaramillo · Intervención especial: Juan Manuel Santos"]]];const list=document.getElementById('agenda-list');function showDay(n){list.innerHTML=sessions[n].map(([time,title,detail])=>`<article class="session"><time>${time}</time><div><h3>${title}</h3>${detail?`<p>${detail}</p>`:''}</div></article>`).join('');document.querySelectorAll('.tab').forEach((b,i)=>{b.classList.toggle('active',i===n);b.setAttribute('aria-selected',String(i===n))})}document.querySelectorAll('.tab').forEach(b=>b.addEventListener('click',()=>showDay(Number(b.dataset.day))));showDay(0);const photos=[
  {
    "src": "assets/photos/foto-01.webp",
    "title": "Visita de la Junta Directiva al Perú en 2010.",
    "original": "1. 2010_Peru_Trustee_Visit.jpg",
    "description": "Jean Paul Lacoste y Carolina Trivelli conversan sobre el programa de medios de vida rurales y seguridad económica en el Perú.",
    "credit": "© Pablo Farías Campero"
  },
  {
    "src": "assets/photos/foto-02.webp",
    "title": "Amazonía peruana, 2000.",
    "original": "2. Association Minga Peru produces the show as part of a broader effort to promote sexual and reproductive health among indigenous women..jpg",
    "description": "La Fundación impulsó proyectos de salud sexual y reproductiva dirigidos a promover estos derechos fundamentales en comunidades de mujeres indígenas.",
    "credit": "© Rhodri Jones"
  },
  {
    "src": "assets/photos/foto-03.webp",
    "title": "Perú, 2012.",
    "original": "3. Aurelia Baldeón y otros  vecinos de Accomarca reciben asistencia jurídica del IDL,.jpg",
    "description": "Aurelia Baldeón Palacio vive en el pueblo Accomarca. Aurelia vive de lo que siembra en su chacra. Aurelia Baldeón y otros vecinos de Accomarca reciben asistencia jurídica del IDL, para lograr justicia en el asesinato de sus hijos.",
    "credit": "© Sergio Urday"
  },
  {
    "src": "assets/photos/foto-04.webp",
    "title": "Colombia, 2016.",
    "original": "4. Bogota Office Opening Reception 2016.jpg",
    "description": "Recepción de inauguración de la reapertura de la oficina en Bogotá. En la foto: Rodrigo Cruz, Ana Carolina González, Javier Ciurlizza, Sindis Mesa, Luis Fernando Pérez y Mia Dechamps.",
    "credit": "© Patricia Rincon-Mautner"
  },
  {
    "src": "assets/photos/foto-05.webp",
    "title": "Perú, 2012.",
    "original": "5. Capacitaci—n Consulta Previa Yutupis.jpg",
    "description": "Capacitación sobre consulta previa en la comunidad de Yutupis a orilla del río Santiago.",
    "credit": "© Sergio Urday"
  },
  {
    "src": "assets/photos/foto-06.webp",
    "title": "Centro de Estudios e Investigaciones Afro, Uruguay, 2001.",
    "original": "6. Center for Afro Study and Research Uruguay, no year.jpg",
    "description": "Los defensores de la justicia racial en Uruguay debaten formas de aumentar la participación y coordinar estrategias de cara a la Conferencia Mundial de la ONU contra el racismo. Su organización, Mundo Afro, contribuyó a formar la Alianza Estratégica de los Pueblos Afroamericanos, una red de 28 grupos que trabajan para poner fin a la discriminación racial en América Latina y el Caribe.",
    "credit": "© Rhodri Jones"
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
    "src": "assets/photos/foto-09.webp",
    "title": "La Guajira, Colombia, 2012.",
    "original": "9. Economic Development in Guajira 2012.jpg",
    "description": "La Fundación Cerrejón trabaja para el fortalecimiento institucional de La Guajira promoviendo el desarrollo de competencias de empleabilidad a través de la educación, el emprendimiento y el intercambio de habilidades en las comunidades indígenas de la región.",
    "credit": "© Patricia Rincon Mautner"
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
    "src": "assets/photos/foto-12.webp",
    "title": "La Guajira, Colombia, 2012.",
    "original": "12. La Guajira Colombia.jpg",
    "description": "La Fundación Cerrejón trabaja para el fortalecimiento institucional de La Guajira promoviendo el desarrollo de competencias de empleabilidad a través de la educación, el emprendimiento y el intercambio de habilidades en las comunidades indígenas de la región.",
    "credit": "© Patricia Rincon Mautner"
  },
  {
    "src": "assets/photos/foto-13.webp",
    "title": "Bogotá, Colombia, 2013.",
    "original": "13. Latin America 50th Anniversary - Seminar in Bogota.jpg",
    "description": "Aniversario 50 años en América Latina: Seminario de conmemoración en Bogotá. En la foto: Myriam Méndez-Montalvo, Marta Tellado, Maya Harris y Alfred Ironside.",
    "credit": ""
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
    "src": "assets/photos/foto-24.webp",
    "title": "Amazonía peruana, 2000.",
    "original": "24. Taller Tambo Minga - Amazonía peruana.jpg",
    "description": "Taller de capacitación a promotoras comunitarias en Tambo, Ayacucho. Los locutores de «Bienvenida Salud» transmiten desde los estudios de La Voz de la Selva, una emisora líder en la región amazónica peruana. La Asociación Minga Perú produce el programa como parte de una iniciativa más amplia para promover la salud sexual y reproductiva entre las mujeres indígenas.",
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
    "src": "assets/photos/foto-28.webp",
    "title": "Amazonía peruana, 2001.",
    "original": "28. Welcome to Health broadcast from the studios of the Jungle_s Voice, a leading station in the Peruvian Amazon region. No year.jpg",
    "description": "Generación de activos y desarrollo comunitario con comunidades indígenas del Amazonas.",
    "credit": "© Rhodri Jones"
  },
  {
    "src": "assets/photos/foto-29.webp",
    "title": "Perú, 2012.",
    "original": "29. Young CHIRAPAQ Communicators.jpg",
    "description": "Jóvenes comunicadores de CHIRAPAQ. Jenny Bellido y Juan Quichua, miembros del programa de «Red de comunicadores Indígenas Quechuas de Ayacucho».",
    "credit": "© Sergio Urday"
  },
  {
    "src": "assets/photos/foto-30.webp",
    "title": "Bogotá, 2016.",
    "original": "30. Placa Universidad Los Andes.jpeg",
    "description": "Entrega de placa de la Universidad de Los Andes a la Fundación Ford en agradecimiento por sus aportes a la universidad.",
    "credit": "© Catalina Restrepo"
  },
  {
    "src": "assets/photos/foto-31.webp",
    "title": "Lima, Perú, 2000.",
    "original": "31. Cecilia Blondet.jpeg",
    "description": "Cecilia Blondet Montero durante su período como Directora General del Instituto de Estudios Peruanos (IEP).",
    "credit": ""
  },
  {
    "src": "assets/photos/foto-32.webp",
    "title": "Cusco, Perú, 2017.",
    "original": "31. Visita de equipo a Cusco 2017.JPG",
    "description": "Visita del equipo de la región andina a Cusco.",
    "credit": "© Luis Fernando Pérez"
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
  }
];let count=9;const gallery=document.getElementById('gallery');const dlg=document.getElementById('lightbox');function photoCaption(p) {
  return [p.title, p.description, p.credit].filter(Boolean).join(' — ');
}
function renderGallery() {
  gallery.innerHTML = '';
  photos.slice(0, count).forEach((p, i) => {
    const card = document.createElement('button');
    card.className = 'photo-card';
    card.dataset.i = String(i);
    card.setAttribute('aria-label', `Ampliar fotografía ${i + 1}`);
    const img = document.createElement('img');
    img.src = p.src;
    img.alt = photoCaption(p);
    img.loading = 'lazy';
    const label = document.createElement('span');
    label.textContent = p.title;
    card.append(img, label);
    gallery.append(card);
  });
  document.getElementById('more').hidden = count >= photos.length;
}
gallery.addEventListener('click', e => {
  const b = e.target.closest('[data-i]');
  if (!b) return;
  const p = photos[Number(b.dataset.i)];
  document.getElementById('lightbox-img').src = p.src;
  document.getElementById('lightbox-img').alt = p.title;
  document.getElementById('lightbox-caption').textContent = photoCaption(p);
  dlg.showModal();
});
document.getElementById('close-lightbox').onclick = () => dlg.close();
dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
document.getElementById('more').onclick = () => { count += 9; renderGallery(); };
renderGallery();
const menu=document.querySelector('.menu'),nav=document.querySelector('#nav');menu.onclick=()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))};nav.querySelectorAll('a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));