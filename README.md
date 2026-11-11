# Filantropía en tiempos de cambio — Fundación Ford & Uniandes

Página web estática en español, lista para GitHub Pages. Incluye agenda, historia Ford–Uniandes, galería, biografías y homenaje a Gustavo Gallón.

## Publicación
Sube **el contenido de esta carpeta**, no su carpeta contenedora, a la raíz de la rama `main`. En Settings → Pages selecciona Deploy from a branch, `main` y `/(root)`. Los archivos JSON se consultan con `fetch()` y requieren servidor HTTP: no pruebes mediante `file://`. Para probar localmente: `python -m http.server 8000`.

## Correcciones implementadas
- Portada Heather Gerken/Javier Ciurlizza, © Liliana Sánchez.
- Botones de portada agrandados, logo Ford 65+ y logotipo Uniandes.
- Sección histórica con registros 1961–1970, placa de 2016 y recorte de prensa.
- Panelistas con retratos y biografías ampliables, agrupados por día.
- Galería con leyendas y créditos incluidos en Word; contacto de Jennifer Salazar.

## Validaciones editoriales pendientes
- La fotografía n.º 21 está como “Ccc” en el Word: se dejó una descripción neutra sin atribuir nombres.
- El recorte histórico de prensa solicita «Nombre del autor / Fototeca Universidad de los Andes»; al no estar identificado el autor, se muestra temporalmente «Autor por confirmar / Fototeca Universidad de los Andes». **Confirmar antes de publicar oficialmente**.
- Fotografías adicionales sin crédito en el Word muestran «Crédito por confirmar».
- Confirmar con el equipo organizador si los participantes y horarios de la agenda vigente son definitivos; se conserva la agenda del repositorio original.
- Las biografías reproducen el documento aportado; pueden diferir de las personas indicadas en la agenda previa y requieren validación editorial.

## Mantenimiento
- Agenda: `script.js`.
- Fotos y leyendas: `assets/photos.json`.
- Biografías: `assets/bios.json`.
- Historia: `assets/history.json`.
- Estilos: `styles.css`.

Una vez terminado el evento, GitHub Pages puede desactivarse desde Settings → Pages sin borrar el repositorio.

## Ajustes de revisión del 6 de noviembre
- Encuadre de portada: punto focal desplazado para priorizar a Heather y Javier.
- Fotografías de panelistas: ajuste general de encuadre y ajuste específico del retrato de Raquel Bernal; sin modificar el material original.
- Ubicación: enlaces visibles en la portada y justo antes de las pestañas de agenda, que llevan a la sección existente del lugar con el botón «Cómo llegar».
- Autor del recorte de prensa: **no se ha podido establecer con los documentos disponibles**. Se conserva «Autor por confirmar / Fototeca Universidad de los Andes» para evitar atribuciones incorrectas; requiere respuesta del archivo de Uniandes.

### Actualización 11 de noviembre de 2026
- Agregado Jorge González Jácome a la agenda y biografías, con fotografía del Word actualizado.
- Agenda PDF actualizada.
- Fotografías de panelistas completas y centradas sin recorte forzado.
- Las demás secciones y archivos quedan conservados.
