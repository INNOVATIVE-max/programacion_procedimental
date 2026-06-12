document.getElementById("formulario-inventarios").addEventListener("submit", function(event) {
    event.preventDefault();

    let ubicacion = document.getElementById("ubicacion").value.trim();
    let cantidad = document.getElementById("cantidad").value.trim();
    let comentarios = document.getElementById("comentarios").value.trim();

    if (ubicacion === "") {
        alert("Por favor, ingrese la ubicación del producto.");
        return;
    }

    if (cantidad === "" || isNaN(cantidad) || Number(cantidad) <= 0 || !Number.isInteger(Number(cantidad))) {
        alert("Por favor, ingrese una cantidad válida (número entero mayor a cero).");
        return;
    }

    if (comentarios === "") {
        alert("Por favor, ingrese un comentario o descripción del estado del inventario.");
        return;
    }

    alert("¡Inventario registrado con éxito!");
    document.getElementById("formulario-inventarios").reset();
});