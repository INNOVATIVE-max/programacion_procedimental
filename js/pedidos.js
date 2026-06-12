document.getElementById("formulario-pedidos").addEventListener("submit", function(event) {
    event.preventDefault();

    let tipo_movimiento = document.getElementById("tipo_movimiento").value;
    let fecha_corte = document.getElementById("fecha_corte").value.trim();
    let categoria = document.getElementById("categoria_contable").value;
    let metodo_pago = document.getElementById("metodo_pago").value;
    let concepto = document.getElementById("concepto").value.trim();
    let valor_total = document.getElementById("valor_total").value.trim();
    let email = document.getElementById("email").value.trim();

    if (tipo_movimiento === "" || tipo_movimiento === "Seleccione") {
        alert("Por favor, seleccione el tipo de movimiento.");
        return;
    }

    if (fecha_corte === "") {
        alert("Por favor, seleccione la fecha de corte.");
        return;
    }

    if (categoria === "" || categoria === "Seleccione") {
        alert("Por favor, seleccione una categoría válida.");
        return;
    }

    if (metodo_pago === "" || metodo_pago === "Seleccione") {
        alert("Por favor, seleccione el método de pago.");
        return;
    }

    if (concepto === "") {
        alert("Por favor, ingrese el concepto del pedido.");
        return;
    }

    if (valor_total === "" || isNaN(valor_total) || Number(valor_total) <= 0) {
        alert("Por favor, ingrese un valor total válido y mayor a cero.");
        return;
    }

    if (email === "" || !email.includes("@") || !email.includes(".")) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return;
    }

    alert("¡Pedido registrado con éxito!");
    document.getElementById("formulario-pedidos").reset();
});