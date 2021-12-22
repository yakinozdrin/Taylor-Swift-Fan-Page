// Countdown Red

function countDownRed() {
    var countDownDate = new Date("Dec 19, 2021 00:00:00").getTime();

    var x = setInterval(function () {

        var now = new Date().getTime();

        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("reloj").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("reloj").innerHTML = "SALIO!!";
        }
    }, 1000);
}

//Modal - Galería 

function imagenes() {
    var modal = document.getElementById('myModal');
    var images = document.getElementsByClassName('myImages');
    var modalImg = document.getElementById("img01");
    for (var i = 0; i < images.length; i++) {
        var img = images[i];
        img.onclick = function (evt) {
            modal.style.display = "block";
            modalImg.src = this.src;
        }
    }
    var span = document.getElementsByClassName("close")[0];
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    }
}

// Carousel - Vídeos 

function carousel() {
    showSlides(1, 0);
    showSlides(1, 1);
    showSlides(1, 2);
    showSlides(1, 3);
    showSlides(1, 4);
    showSlides(1, 5);
    showSlides(1, 6);
    showSlides(1, 7);
}

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) { slideIndex[no] = 1 }
    if (n < 1) { slideIndex[no] = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no] - 1].style.display = "block";
}

//Formulario 

function validacion() {
    event.preventDefault();
    
    //Nombre y Apellido
    var valor = document.forms["formulario"]["nombre"].value;
    if(!(/^(\b[a-zA-Z]+ ?)+$/.test(valor))) {
        document.forms["formulario"]["nombre"].value = "";
        document.getElementById('msjNombre').innerHTML = "*Nombre y/o Apellido no valido.";
        return false;
    }
    document.getElementById('msjNombre').innerHTML = "";

    //Mail
    valor = document.forms["formulario"]["correo"].value;
    if(!(/^[^<>()[\]\\,;:\%#^\s@\"$&!@]+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z0-9]+\.)+[a-zA-Z]{2,}))$/.test(valor))) {
        document.forms["formulario"]["correo"].value = "";
        document.getElementById('msjCorreo').innerHTML = "*Mail no valido.";
        return false;
    }
    document.getElementById('msjCorreo').innerHTML = "";

    //Fecha
    valor = document.getElementById("fecha").value;
    var year = (new Date(valor)).getFullYear();
    if(year < 1900) {
        document.getElementById("fecha").value = "";
        document.getElementById('msjFecha').innerHTML = "*Ingresa una fecha válida.";
        return false;
    }
    document.getElementById('msjFecha').innerHTML = "";

    function maximaFecha() {
        var fecha = document.getElementById("fecha");
        fecha.max = new Date().toISOString().split("T")[0];
    }

    //Pais
    valor = document.forms["formulario"]["menu"].value;
    if(valor == "") {
        document.getElementById('msjPais').innerHTML = "*Recorda seleccionar un país.";
        return false;
    }
    document.getElementById('msjPais').innerHTML = "";

    //Logica de enviado
    document.forms["formulario"]["nombre"].value = "";
    document.forms["formulario"]["correo"].value = "";
    document.getElementById("fecha").value = "";
    document.forms["formulario"]["menu"].value = ""; 

    var modal = document.getElementById("modalNewsletter");
    modal.style.display = "block";
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    return true;
}

