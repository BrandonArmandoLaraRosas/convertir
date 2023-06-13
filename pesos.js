function convertirPesosADolares() {
    var tipoCambio=parseFloat(document.getElementById("tipo-cambio").value);
    var cantidadPesos=parseFloat(document.getElementById("cantidad-pesos").value);

    if(!isNaN(tipoCambio) && !isNaN(cantidadPesos)){
        var cantidadDolares = cantidadPesos / tipoCambio;
        document.getElementById("cantidad-dolares").value = cantidadDolares.toFixed(2);
    } else{
        alert("por favor ingrese un valor valido");
    }
    
}
function convertirDolaresAPesos() {
    var tipoCambio = parseFloat(document.getElementById("tipo-cambio").value);
    var cantidadDolares = parseFloat(document.getElementById("cantidad-dolares").value);

    if(!isNaN(tipoCambio) && !isNaN(cantidadDolares)) {
        var cantidadPesos = cantidadDolares * tipoCambio;
        document.getElementById("cantidad-pesos").value = cantidadPesos.toFixed(2);
    } else {
        alert("por favor ingrese un valor valido")
    }
}
function limpiarCampos() {
    document.getElementById("cantidad-pesos").value="";
    document.getElementById("cantidad-dolares").value="";
    document.getElementById("tipo-cambio").value="";
}