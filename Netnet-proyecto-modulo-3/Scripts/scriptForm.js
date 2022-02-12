let formulario = document.querySelector('form');
let btnSubmit = document.getElementById('btn-enviar');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
})

btnSubmit.addEventListener('click', () => {
    let nombre = document.getElementById('inputName').value;
    let apellido = document.getElementById('inputLastName').value;
    let email = document.getElementById('inputEmail').value;
    let contraseña = document.getElementById('inputPassword').value;
    let array = [];
    let UsuarioObject = {
        Nombre: nombre,
        Apellido: apellido,
        Email: email,
        Password: contraseña
    }

    array.push(UsuarioObject);
    let arrayOk = JSON.stringify(array);
    localStorage.setItem('Usuarios_Netnet', arrayOk);
    let traerArrayLStorage = JSON.parse(localStorage.getItem('Usuarios_Netnet'));


    mostrarValidaciones(traerArrayLStorage);

})


function mostrarValidaciones(array) {
    const container = document.getElementById('validaciones');
    array.forEach((element) => {
        let title = document.createElement('h2');
        let span1 = document.createElement('span');
        let span2 = document.createElement('span');
        let h4Name = document.createElement('h4');
        let h4LastName = document.createElement('h4');
        let h4Email = document.createElement('h4');
        let h4Password = document.createElement('h4');
        title.textContent = `Señor ${element.Nombre} ${element.Apellido} su registro se completo con exito`;
        title.classList.add('tituloValidaciones');
        span1.textContent = `Nombre: ${element.Nombre}`
        h4Name.append(span1);
        span2.textContent = `Apellido: ${element.Apellido}`
        h4LastName.append(span2);
        h4Email.textContent = `Email: ${element.Email}`
        h4Password.textContent = `Contraseña: **********`
        container.append(title, h4Name, h4LastName, h4Email, h4Password);
        container.style.display = 'block';
    })
}


// btnEnviar.addEventListener('click', () => {
//     const nom = document.getElementById('nameInput').value;
//     const apell = document.getElementById('lastNameInput').value;
//     const tel = document.getElementById('phoneInput').value;
//     const dir = document.getElementById('addressInput').value;
//     const coment = document.getElementById('CommentInput').value;
//     let usuario = [];
//     let usr = {
//         nombre: nom,
//         apellido: apell,
//         telefono: tel,
//         direccion: dir,
//         comentarios: coment
//     }

//         usuario.push(usr);
//         let usuarioEnviable = JSON.stringify(usuario);
//         localStorage.setItem("InfoUsuario", usuarioEnviable);
//         let traerInfoUsuario = localStorage.getItem("InfoUsuario");
//         let infoUsuarioObject = JSON.parse(traerInfoUsuario);

//         mostarInfoUsuario(infoUsuarioObject);

//     })


//     function mostarInfoUsuario(infoObeject){
//         infoObeject.forEach((element) => {
//             let ubicacion = document.querySelector(".validaciones")
//             let title = document.createElement('h4');
//             let lista = document.createElement('ul');
//             let itemLi1 = document.createElement('li');
//             let itemLi2 = document.createElement('li');
//             let itemLi3 = document.createElement('li');
//             let itemLi4 = document.createElement('li');
//             let itemLi5 = document.createElement('li');
//             let {nombre, apellido, telefono, direccion, comentarios} = element;
//             title.classList.add('tituloValidacion');
//             title.textContent = `Señor ${nombre} su registro ha sido Completado`;
//             itemLi1.textContent = `Nombre: ${nombre}`
//             itemLi2.textContent = `Apellido: ${apellido}`
//             itemLi3.textContent = `Telefono: ${telefono}`
//             itemLi4.textContent = `Direccion: ${direccion}`
//             itemLi5.textContent = `Comenatarios: ${comentarios}`
//             lista.append(itemLi1, itemLi2, itemLi3, itemLi4, itemLi5);
//             ubicacion.append(title, lista);
//             console.log(lista)

//         });
//     }



