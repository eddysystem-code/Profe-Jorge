// =====================================
// BOTON CALCULAR
// =====================================

const btnCalcular = document.getElementById("calcular");

btnCalcular.addEventListener("click", function () {

    // =====================================
    // CAPTURAR DATOS
    // =====================================

    const tipoVehiculo = document
        .getElementById("tipoVehiculo")
        .value
        .toLowerCase()
        .trim();

    const placa = document
        .getElementById("placa")
        .value
        .toUpperCase()
        .trim();

    const fechaIngreso = document
        .getElementById("fechaIngreso")
        .value;

    const fechaSalida = document
        .getElementById("fechaSalida")
        .value;

    const dineroCliente = Number(
        document.getElementById("dineroCliente").value
    );

    // =====================================
    // VALIDAR CAMPOS VACIOS
    // =====================================

    if (
        tipoVehiculo === "" ||
        placa === "" ||
        fechaIngreso === "" ||
        fechaSalida === "" ||
        dineroCliente <= 0
    ) {
        alert("Debe completar todos los campos");
        return;
    }

    // =====================================
    // VALIDAR TIPO VEHICULO
    // =====================================

    if (
        tipoVehiculo !== "automovil" &&
        tipoVehiculo !== "moto"
    ) {
        alert("Tipo de vehículo inválido");
        return;
    }

    // =====================================
    // VALIDAR PLACAS
    // =====================================

    const placaAuto = /^[A-Z]{3}[0-9]{3}$/;

    const placaMoto = /^[A-Z]{3}[0-9]{2}[A-Z]$/;

    if (tipoVehiculo === "automovil") {

        if (!placaAuto.test(placa)) {
            alert("Placa de automóvil inválida");
            return;
        }

    }

    if (tipoVehiculo === "moto") {

        if (!placaMoto.test(placa)) {
            alert("Placa de moto inválida");
            return;
        }

    }

    // =====================================
    // CONVERTIR FECHAS
    // =====================================

    const ingreso = new Date(fechaIngreso);
    const salida = new Date(fechaSalida);

    // =====================================
    // VALIDAR FECHAS
    // =====================================

    if (salida <= ingreso) {
        alert(
            "La fecha de salida debe ser mayor que la fecha de ingreso"
        );
        return;
    }

    // =====================================
    // VALIDAR HORARIO
    // =====================================

    const horaIngreso = ingreso.getHours();
    const horaSalida = salida.getHours();

    if (horaIngreso < 5 || horaIngreso >= 12) {

        alert(
            "La hora de ingreso debe estar entre 5:00 AM y 12:00 PM"
        );

        return;
    }

    if (horaSalida < 5 || horaSalida >= 12) {

        alert(
            "La hora de salida debe estar entre 5:00 AM y 12:00 PM"
        );

        return;
    }

    // =====================================
    // CALCULAR TIEMPO
    // =====================================

    const diferencia = salida - ingreso;

    const minutos =
        diferencia / (1000 * 60);

    // =====================================
    // TARIFA
    // =====================================

    let tarifa;

    if (tipoVehiculo === "automovil") {
        tarifa = 125;
    } else {
        tarifa = 95;
    }

    // =====================================
    // CALCULAR TOTAL
    // =====================================

    let total = minutos * tarifa;

    // =====================================
    // PICO Y PLACA
    // =====================================

    const diaMes = ingreso.getDate();

    const ultimoDigito =
        parseInt(
            placa.charAt(
                placa.length - 1
            )
        );

    let tienePicoPlaca = false;

    // Día par y placa par

    if (
        diaMes % 2 === 0 &&
        ultimoDigito % 2 === 0
    ) {
        tienePicoPlaca = true;
    }

    // Día impar y placa impar

    if (
        diaMes % 2 !== 0 &&
        ultimoDigito % 2 !== 0
    ) {
        tienePicoPlaca = true;
    }

    // =====================================
    // DESCUENTO
    // =====================================

    if (
        tipoVehiculo === "automovil" &&
        tienePicoPlaca
    ) {
        total = total * 0.75;
    }

    // =====================================
    // AJUSTAR A MULTIPLOS DE 50
    // =====================================

    total =
        Math.ceil(total / 50) * 50;

    // =====================================
    // VALIDAR DINERO
    // =====================================

    if (dineroCliente < total) {

        alert(
            `Faltan $${total - dineroCliente}`
        );

        return;
    }

    // =====================================
    // CALCULAR CAMBIO
    // =====================================

    let cambio =
        dineroCliente - total;

    let cambioOriginal =
        cambio;

    const denominaciones = [
        100000,
        50000,
        20000,
        10000,
        5000,
        2000,
        1000,
        500,
        200,
        100,
        50
    ];

    let detalleCambio = "";

    for (let i = 0; i < denominaciones.length; i++) {

        let cantidad =
            Math.floor(
                cambio / denominaciones[i]
            );

        if (cantidad > 0) {

            detalleCambio +=
                `${cantidad} x $${denominaciones[i]}<br>`;

            cambio =
                cambio % denominaciones[i];
        }

    }

    // =====================================
    // MOSTRAR RESULTADOS
    // =====================================

    document
        .getElementById("resultado")
        .innerHTML = `

        <h2>Total a pagar: $${total}</h2>

        <p>
            Tiempo:
            ${minutos.toFixed(0)}
            minutos
        </p>

        <p>
            Cambio:
            $${cambioOriginal}
        </p>

        <h3>Devolver:</h3>

        ${detalleCambio}

    `;

});