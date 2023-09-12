document.addEventListener("DOMContentLoaded", function () {
    const solicitudForm = document.getElementById("solicitudForm");
    solicitudForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Obtén los valores de los campos
        const nombre = document.getElementById("nombre").value;
        const monto = parseFloat(document.getElementById("monto").value);
        const plazo = parseInt(document.getElementById("plazo").value);

        // Realiza validaciones
        if (nombre.trim() === "") {
            alert("Por favor, ingresa tu nombre completo.");
            return;
        }

        if (isNaN(monto) || monto <= 0) {
            alert("Por favor, ingresa un monto válido.");
            return;
        }

        if (isNaN(plazo) || plazo <= 0) {
            alert("Por favor, ingresa un plazo válido.");
            return;
        }

        // Si todas las validaciones son exitosas, puedes enviar el formulario
        solicitudForm.submit();
    });
});
