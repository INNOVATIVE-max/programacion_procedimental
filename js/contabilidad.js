document.getElementById("formulario-contabilidad").addEventListener("submit", function(event) {
    event.preventDefault();

    let fecha_de_corte = document.getElementById("fecha_de_corte").value.trim();
    let campo = document.getElementById("campo").value;
    let egresos = document.getElementById("egresos").value.trim();
    let concepto = document.getElementById("concepto").value.trim();
    let valor_total = document.getElementById("valor_total").value.trim();

    if (fecha_de_corte === "") {
        alert("Por favor, seleccione la fecha de corte.");
        return;
    }

    if (campo === "" || campo === "Seleccione") {
        alert("Por favor, seleccione un campo válido.");
        return;
    }

    if (egresos === "" || isNaN(egresos) || Number(egresos) < 0) {
        alert("Por favor, ingrese un valor de egresos válido (igual o mayor a cero).");
        return;
    }

    if (concepto === "") {
        alert("Por favor, ingrese el concepto del movimiento.");
        return;
    }

    if (valor_total === "" || isNaN(valor_total) || Number(valor_total) <= 0) {
        alert("Por favor, ingrese un valor total válido y mayor a cero.");
        return;
    }

    alert("¡Movimiento contable registrado con éxito!");
    document.getElementById("formulario-contabilidad").reset();
});