/* Funcion para validar los campos vacios */
function validacionVacia() {
    var nombre = document.getElementById("inputNombre").value;
    var appellidoPaterno = document.getElementById("inputAPaterno").value;
    var appellidoMaterno = document.getElementById("inputAMaterno").value;
    var domicilio = document.getElementById("inputDomicilio").value;


    var llenoNombre = true,
        llenoApellidoP = true,
        llenoApellidoM = true,
        llenoEstado = true,
        llenoDimicilio = true;

    if (nombre === "") {
        llenoNombre = false;
        document.getElementById("inputNombre").style.borderColor = "red";
    } else {
        document.getElementById("inputNombre").style.borderColor = "#1896b6";
    }

    if (appellidoPaterno == "") {
        llenoApellidoP = false;
        document.getElementById("inputAPaterno").style.borderColor = "red";
    } else {
        document.getElementById("inputAPaterno").style.borderColor = "#1896b6";
    }

    if (appellidoMaterno == "") {
        llenoApellidoM = false;
        document.getElementById("inputAMaterno").style.borderColor = "red";
    } else {
        document.getElementById("inputAMaterno").style.borderColor = "#1896b6";

    }

    if (domicilio == "") {
        llenoDimicilio = false;
        document.getElementById("inputDomicilio").style.borderColor = "red";
    } else {
        document.getElementById("inputDomicilio").style.borderColor = "#1896b6";
    }

    if (selectEstadoB == false) {
        estado = document.getElementById("inputEstado").value;
        if (estado == "") {
            llenoEstado = false;
            estado = document.getElementById("inputEstado").style.borderColor = "red";
        } else {
            llenoEstado = true;
            estado = document.getElementById("inputEstado").style.borderColor = "#1896b6";
        }
    }

    if (llenoNombre == true && llenoApellidoP == true && llenoApellidoM == true && llenoDimicilio == true && llenoEstado == true) {
        document.getElementById("divCamposVacios").style.display = "none";
        return true;
    } else {
        document.getElementById("divCamposVacios").style.display = "flex";
        return false;
    }
}

/* Funcion para la validacion del genero */
function validacionSexo() {
    var hombre = document.getElementById("inputHombre");
    var mujer = document.getElementById("inputMujer");

    if (hombre.checked == true || mujer.checked == true) {
        document.getElementById("divGenero").style.display = "none";
        return true;
    } else {
        document.getElementById("divGenero").style.display = "flex";
        return false;
    }
}

/* Funcion para pasar el rfc a mayusculas */
function mayusculas(e) {
    e.value = e.value.toUpperCase();
}

/* Validacion del RFC */
function validacionRFC() {
    var rfc = document.getElementById("inputRFC").value;
    var letras = "ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
    var numeros = "1234567890";
    var indexRFC = 0;
    var index = 0;
    contadorLetras = 0;
    var contadorNumeros = 0;

    /* Contamos las letras que hay en el rgc */
    while (indexRFC < letras.length) {
        if (rfc.charAt(indexRFC) == letras.charAt(index)) {
            index++;
            contadorLetras++;
        } else {
            index++;
        }
        if (index == letras.length) {
            indexRFC++;
            index = 0;
        }
    }

    /* Contamos los numeros que hay en el rgc */
    indexRFC = 0;
    index = 0;
    while (indexRFC < numeros.length) {
        if (rfc.charAt(indexRFC) == numeros.charAt(index)) {
            index++;
            contadorNumeros++;
        } else {
            index++;
        }
        if (index == numeros.length) {
            indexRFC++;
            index = 0;
        }
    }

    /* Verificamos si el rfc cumple con los requisitos */
    if (contadorLetras == 4 && contadorNumeros == 6) {
        document.getElementById("divRFC").style.display = "none";
        document.getElementById("inputRFC").style.borderColor = "#1896b6";
        return true;
    } else {
        document.getElementById("divRFC").style.display = "flex";
        document.getElementById("inputRFC").style.borderColor = "red";
        return false;
    }
}

/* Funcion para la validacion del correo */
function validacionCorreo() {
    correo = document.getElementById("inputCorreo").value;
    caractares = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

    if (!caractares.exec(correo)) {
        document.getElementById("inputCorreo").style.borderColor = "red";
        document.getElementById("divCorreo").style.display = "flex";
        return false;
    } else {
        document.getElementById("inputCorreo").style.borderColor = "#1896b6";
        document.getElementById("divCorreo").style.display = "none";
        return true;
    }
}

/* Funcion para la validacion del pais */
var selectEstadoB = false;

function validarPais() {
    var pais = document.getElementById("selectPais").value;

    console.log(pais);


    if (pais == "seleccion") {
        document.getElementById("divErrorPais").style.display = "block";
        document.getElementById("errorPais").style.display = "block";
    } else {
        document.getElementById("divErrorPais").style.display = "none";
        document.getElementById("errorPais").style.display = "none";
    }

    if (pais == "Mexico") {
        document.getElementById("divEstadoInput").style.display = "none";
        document.getElementById("divEstadoSelect").style.display = "flex";
        console.log("Se selcciono mexico");
        selectEstadoB = true;

    } else {
        document.getElementById("divEstadoSelect").style.display = "none";
        document.getElementById("divEstadoInput").style.display = "flex";
        selectEstadoB = false;
    }

}

/* Funcion para la validacion del select de estado */
function validacionEstadoDelSelect() {
    if (selectEstadoB == true) {
        var estadoSelect = document.getElementById("selectEstado").value;
        if (estadoSelect == "seleccion") {
            document.getElementById("divErrorPais").style.display = "block";
            document.getElementById("errorEstado").style.display = "block";
        } else {
            document.getElementById("divErrorPais").style.display = "none";
            document.getElementById("errorEstado").style.display = "none";
        }
    }
}

/* Funcion para validar los gustos */
function validacionGustos() {
    var checkbox = document.getElementsByName("checkBox");
    var contador = 0;

    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            contador++;
        }
    }

    if (contador < 2) {
        document.getElementById("divGustoError").style.display = "flex";
        return false;
    } else {
        document.getElementById("divGustoError").style.display = "none";
        return true;
    }
}

/* Funcion par mostrar los generos musicales */

function obtenerGenerosMusicales() {
    var checkbox = document.getElementById("checkboxMusica");
    const http = new XMLHttpRequest;
    const url = './generosMusicales.html';

    if (checkbox.checked) {
        http.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("h2Musica").style.display = "block";
                document.getElementById("divGenerosMusicales").style.display = "flex";
                document.getElementById("divGenerosMusicales").innerHTML = this.responseText;
            }
        }

        http.open("GET", url);
        http.send();
    } else {
        document.getElementById("h2Musica").style.display = "none";
        document.getElementById("divGenerosMusicales").style.display = "none";
    }
}

/* Funcion paara la validacion de los generos musicales */
function validacionGustosMusicales() {
    var checkbox = document.getElementById("checkboxMusica");

    if (checkbox.checked) {
        console.log("Check activo");
        var checkbox = document.getElementsByName("checkboxGeneroMusica");
        var contador = 0;

        for (var i = 0; i < checkbox.length; i++) {
            if (checkbox[i].checked) {
                contador++;
            }
        }


        if (contador < 2) {
            document.getElementById("divErrores").style.display = "flex";
            document.getElementById("errorGenerosMusicales").style.display = "flex";
            return false;
        } else {
            document.getElementById("divErrores").style.display = "none";
            document.getElementById("errorGenerosMusicales").style.display = "none";
            return true;
        }

    } else {
        console.log("Check no activo");
    }
}

/* Funcion para validar todas las validaciones */
function validacion() {
    var respuestaCampos = validacionVacia();
    var respuestaSexo = validacionSexo();
    var respuestaRFC = validacionRFC();
    var respuestaCorreo = validacionCorreo();
    var respuestaGustos = validacionGustos();
    validacionGustosMusicales();

    if (respuestaCampos == true && respuestaSexo == true && respuestaRFC == true && respuestaCorreo == true && respuestaGustos == true) {
        document.getElementById("divErrores").style.display = "none";
        document.getElementById("divExito").style.display = "flex";

    } else {
        document.getElementById("divExito").style.display = "none";
        document.getElementById("divErrores").style.display = "block";
        alert("Revise los campos por favor");
    }
}