import { masSimilares } from './data.js';




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

showPeliculas(".peliculasMasSimilares", masSimilares, "peliculasMasSimilares");

