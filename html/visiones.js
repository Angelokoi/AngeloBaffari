/*
  ÁLBUMES DE VISIONES

  PARA AGREGAR UN ÁLBUM NUEVO:
  1. Copiá un bloque entero (desde la { hasta la }, con la coma del final).
  2. Pegalo justo debajo de la línea "const visiones = [" (el de arriba de todo es el más nuevo).
  3. Cambiá los datos:
  - titulo: lo que se ve en la tarjeta.
  - subtitulo: opcional. Se ve debajo de las fotos al abrir el álbum. Ideal para fechas, lugar, datos.
  - portada: la imagen liviana de la tarjeta. Si la dejás afuera, se usa la primera foto del álbum.
  - carpeta: la carpeta donde están las fotos (terminada en /).
  - fotos: los nombres de los archivos dentro de esa carpeta, entre comillas y separados por coma.
    Para ponerle un texto a UNA foto en particular, escribila así:
    { archivo: "_ANG0113.jpg", pie: "texto de esa foto" }
  - fecha: opcional (AAAA-MM-DD). Si TODOS los álbumes la tienen, se ordenan solos por fecha;
    si no, se muestran en el orden en que están acá. Los dos primeros se ven más grandes.
  - Dejá siempre la coma al final de cada bloque.
*/
const visiones = [

 {
    titulo: "los gigantes y nosotros",
    subtitulo: "?",
    portada: "visiones/desvaneciendome/_ANG2314.png",
    carpeta: "visiones/los gigantes y nosotros/",
    fotos: ["_ANG2314.png", "_ANG2314 2.png", "_ANG2314 3.png", "_ANG2314 4.png", "_ANG2314 5.png", "_ANG2314 6.png", "_ANG2314 7.jpg", "_ANG2314 8.jpg", "_ANG2314 9.jpg", "_ANG2314 10.jpg", "_ANG2314 12.jpg", "_ANG2314 11.jpg", "_ANG2314 13.jpg"]
  },

  {
    titulo: "desvaneciéndome",
    subtitulo: "?",
    portada: "visiones/desvaneciendome/_ANG2314 5.png",
    carpeta: "visiones/desvaneciendome/",
    fotos: ["_ANG2314 5.png", "_ANG2314.png", "_ANG2314 2.png", "_ANG2314 3.png", "_ANG2314 4.png"]
  },

  {
    titulo: "Trance",
    subtitulo: "?",
    portada: "visiones/trance/_ANG2314 6.jpg",
    carpeta: "visiones/trance/",
    fotos: ["_ANG2314 6.jpg", "_ANG2314 1.jpg", "_ANG2314 2.jpg", "_ANG2314 3.jpg", "_ANG2314 4.jpg", "_ANG2314 5.jpg", "_ANG2314 7.jpg", "_ANG2314 8.jpg", "_ANG2314 9.jpg", "_ANG2314.png"]
  },

  {
    titulo: "Gorgojo",
    subtitulo: "10-10-25",
    portada: "img/_ANG0113.png",
    carpeta: "visiones/gorgojo/",
    fotos: ["_ANG0113.jpg", "_ANG0067.jpg", "_ANG0128.jpg", "_ANG9926.jpg", "_ANG0135.jpg", "_ANG0149.jpg", "_ANG0196.jpg", "_ANG0329.jpg", "_ANG0216.jpg", "_ANG0376.jpg", "_ANG0421.jpg"]
  },
  {
    titulo: "Puja",
    subtitulo: "20-9-25",
    portada: "img/_ANG9246lowres.png",
    carpeta: "visiones/puja/",
    fotos: ["_ANG9246.jpg", "_ANG8832.jpg", "_ANG8975.jpg", "_ANG8983.jpg", "_ANG9260.jpg", "_ANG9555-2.jpg", "_ANG9095.jpg", "_ANG9572.jpg", "_ANG9203.jpg", "_ANG9077.jpg", "_ANG9273.jpg", "_ANG8934.jpg", "_ANG8835.jpg", "_ANG9568.jpg"]
  },
  {
    titulo: "ya estuve acá...",
    subtitulo: "",
    portada: "img/_ANG9789lowres.png",
    carpeta: "visiones/aqui/",
    fotos: ["_ANG9789.jpg", "_ANG9802.jpg", "_ANG9805.jpg", "_ANG9806.jpg", "_ANG9811.jpg", "_ANG9826.jpg", "_ANG9833.jpg", "_ANG9838.jpg", "_ANG9858.jpg", "_ANG9864.jpg", "_ANG9876.jpg", "_ANG9887.jpg", "_ANG9892.jpg"]
  },
  {
    titulo: "El Nota en vivo",
    subtitulo: "17-10-25",
    portada: "img/35lowres.png",
    carpeta: "visiones/El nota/img/",
    fotos: ["35.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "8.jpg", "9.jpg", "12.jpg", "13.jpg", "15.jpg", "17.jpg", "21.jpg", "24.jpg", "27.jpg", "31.jpg", "33.jpg", "41.jpg"]
  },
  {
    titulo: "Doble Seda",
    subtitulo: "17-10-25",
    portada: "img/_ANG3591lowres.png",
    carpeta: "visiones/Doble seda/img/",
    fotos: ["_ANG3591.jpg", "_ANG3487.jpg", "_ANG3502.jpg", "_ANG3504.jpg", "_ANG3506.jpg", "_ANG3513.jpg", "_ANG3509.jpg", "_ANG3540.jpg", "_ANG3545.jpg", "_ANG3553.jpg", "_ANG3592.jpg"]
  },
  {
    titulo: "la sombra de tus ramas",
    subtitulo: "",
    portada: "img/_ANG1777lowres.png",
    carpeta: "visiones/Naturaleza/img/",
    fotos: ["_ANG1777.jpg", "_ANG6916.jpg", "_ANG7016.jpg"]
  },
];
