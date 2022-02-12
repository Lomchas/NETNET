import { populares, SeriesAnime, SeriesCrimenes, masSimilares } from './data.js';




function showPeliculas(containers, array, genero) {
    let frag = document.createDocumentFragment();
    let container = document.querySelector(containers);

    array.forEach((element, index) => {
        const contImg = document.createElement('div');
        const Img = document.createElement('img');
        Img.classList.add('imgs');
        contImg.setAttribute('id', `${genero}-${index}`);
        contImg.classList.add('img-Peliculas');
        Img.setAttribute('src', element.src);
        contImg.appendChild(Img);
        frag.appendChild(contImg);
        container.appendChild(frag);
    })
}

function aggEnlace(Contenedor, enlace, cont2, elementChild) {
    let contenedorAgg = document.querySelector(cont2);
    let elementoHijo = document.getElementById(elementChild);
    let cont = document.getElementById(Contenedor);
    let aEtiqueta = document.createElement('a');
    aEtiqueta.setAttribute('href', enlace);
    aEtiqueta.appendChild(cont);
    contenedorAgg.insertBefore(aEtiqueta, elementoHijo);
}

showPeliculas(".peliculasPopulares", populares, "populares");
showPeliculas(".seriesJaponesas", SeriesAnime, "seriesJapo");
showPeliculas(".seriesCrimenes", SeriesCrimenes, "seriesCrimen");
aggEnlace('populares-1', "./pelicula1.html", ".peliculasPopulares", "populares-2");
aggEnlace('seriesJapo-0', "./pelicula2.html", ".seriesJaponesas", "seriesJapo-1");
aggEnlace('seriesCrimen-1', "./pelicula3.html", ".seriesCrimenes", "seriesCrimen-2");





