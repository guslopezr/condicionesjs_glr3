/*
let opcion1 = document.querySelector('#selecc1').value;
let opcion2 = document.querySelector('#selecc2').value;
let opcion3 = document.querySelector('#selecc3').value;
claveUsuario = opcion1 + opcion2 + opcion3
console.log(claveUsuario);

*/


btn.onclick = (event) => {
    let opcion1 = document.querySelector('#selecc1').value;
    let opcion2 = document.querySelector('#selecc2').value;
    let opcion3 = document.querySelector('#selecc3').value;
    claveUsuario = opcion1 + opcion2 + opcion3
    console.log(claveUsuario);
    if (claveUsuario == 911) {
        console.log("okokok");
        document.getElementById("respuesta").innerHTML = "¡Clave correcta! Acceso autorizado.";
    } else if (claveUsuario == 714) {
        console.log("okok");
        document.getElementById("respuesta").innerHTML = "Descubriste la segunda. Acceso Autorizado";
    } else {
        console.log("a la mierda");
        document.getElementById("respuesta").innerHTML = "Clave incorrecta, acceso no autorizado";
    }
}


/*

    event.preventDefault();
    // show the selected index
    alert(sb.selectedIndex);
};

/*
addEventListener.click; {
    opcion1 = document.getElementById("selecc1").options[0].text;
    console.log(opcion1);

}
*/