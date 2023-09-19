
    console.log("Ingresé a bloquear");
    bloquerDivs();
    document.getElementById("slide-caja").style.display = "block";
    document.getElementById("Incio").style.display = "block";


    
    /* LISTADO DE JSON */
    listPost = [
        {titulo:"Prueba de titulo 1",
        publicado: "Publicado el dia 14 de junio del 2022",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, officiis excepturi sed assumenda magni quibusdam nostrum dolor"},
        {titulo:"Prueba de titulo 2",
        publicado: "Publicado el dia 14 de junio del 2022",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, officiis excepturi sed assumenda magni quibusdam nostrum dolor"},
        {titulo:"Prueba de titulo 3",
        publicado: "Publicado el dia 14 de junio del 2022",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, officiis excepturi sed assumenda magni quibusdam nostrum dolor"},
        {titulo:"Prueba de titulo 4",
        publicado: "Publicado el dia 14 de junio del 2022",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, officiis excepturi sed assumenda magni quibusdam nostrum dolor"},
        {titulo:"Prueba de titulo 5",
        publicado: "Publicado el dia 14 de junio del 2022",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, officiis excepturi sed assumenda magni quibusdam nostrum dolor"},
    ]

    listPost.forEach(element => {
        const cajaContacto = document.querySelector(".caja-lateral");
        const h4 = document.createElement("h4");
        h4.textContent = element.titulo;
        cajaContacto.appendChild(h4)
        const h5 = document.createElement("h5")
        h5.textContent = element.publicado;
        cajaContacto.appendChild(h5)
        const p = document.createElement("p")
        p.textContent = element.text; 
        cajaContacto.appendChild(p)
    }); 

function bloquerDivs(){
    document.getElementById("reloj").style.display = "none";
    document.getElementById("SobreMi").style.display = "none";
    document.getElementById("contacto").style.display = "none";
    document.getElementById("slide-caja").style.display = "none";
    document.getElementById("Incio").style.display = "none";
} 


function changeFondo(cadena){
    if(cadena === "rojo"){
        console.log("Rojo");
        document.getElementById('body').style.background = 'url(./css/img/fondos/fondo1.jpeg)';
    }else if(cadena === "verde"){
        console.log("Verde");
        document.getElementById('body').style.background = 'url(./css/img/fondos/fondo2.jpg)';
    }else if(cadena === "Azul"){
        console.log("Azul");
        document.getElementById('body').style.background = 'url(./css/img/fondos/fondo3.jpg)';
    }
}

function habilitar(cadenaSelect) {
    console.log(cadenaSelect);
    if(cadenaSelect === "inicio"){
        bloquerDivs();
        document.getElementById("Incio").style.display = "block";
        document.getElementById("slide-caja").style.display = "block";

    }else if(cadenaSelect === "reloj"){
        bloquerDivs();
        document.getElementById("reloj").style.display = "block";

        const cajaReloj = document.querySelector(".reloj");
        const h1 = document.createElement("h1");
        var hora = new Date();
        h1.textContent = " "+hora.getHours() + ":"+ hora.getMinutes() +":"+hora.getSeconds()+" ";
        cajaReloj.appendChild(h1) 

    }else if(cadenaSelect === "sobreMi"){
        bloquerDivs();
        document.getElementById("SobreMi").style.display = "block";

    }else if(cadenaSelect === "contactos"){
        bloquerDivs();
        document.getElementById("contacto").style.display = "block";
    }
}

function contacto(){
    if(typeof(Storage)!='undefined'){
        console.log("localstorage disponible");
    }else{
        console.log("localstorage no disponible");
    }

    var form = document.getElementById('contacto');
    console.log(form.elements[0].value);

    localStorage.setItem("nombre","Aplicaciones web");   

}






