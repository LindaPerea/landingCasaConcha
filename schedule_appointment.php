<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $date = $_POST['date'];
    $time = $_POST['time'];

    // Validar y sanitizar datos
    $name = filter_var($name, FILTER_SANITIZE_STRING);
    $email = filter_var($email, FILTER_VALIDATE_EMAIL);
    $phone = filter_var($phone, FILTER_SANITIZE_STRING);
    $date = filter_var($date, FILTER_SANITIZE_STRING);
    $time = filter_var($time, FILTER_SANITIZE_STRING);

    if ($name && $email && $phone && $date && $time) {
        // Aquí puedes enviar un correo, guardar en base de datos, etc.
        // Por ejemplo, enviar un correo:
        $to = 'tucorreo@dominio.com';
        $subject = 'Nueva solicitud de cita';
        $message = "Nombre: $name\nCorreo: $email\nTeléfono: $phone\nFecha: $date\nHora: $time";
        $headers = 'From: ' . $email;

        if (mail($to, $subject, $message, $headers)) {
            echo 'La cita ha sido agendada correctamente.';
        } else {
            echo 'Hubo un problema al enviar la solicitud. Por favor, inténtalo de nuevo.';
        }
    } else {
        echo 'Por favor, completa todos los campos correctamente.';
    }
} else {
    echo 'Método de solicitud no válido.';
}
?>
