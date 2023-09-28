<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $body = htmlspecialchars($_POST["body"]);
    
    // $to = "rbru-metrika@yandex.ru";  // Почтовый адрес назначения
    $to = "rbru-ka@yandex.ru";  // Почтовый адрес назначения
    $subject = "Сообщение с формы";  // Тема письма
    
    // Сообщение
    $message = "Имя: " . $name . "\n\n" . "Сообщение:\n" . $body;
    
    // Дополнительные заголовки
    $headers = "From: webmaster@example.com" . "\r\n" .
               "Reply-To: " . $name . "\r\n" .
               "X-Mailer: PHP/" . phpversion();
    
    // Отправка письма
    if (mail($to, $subject, $message, $headers)) {
        echo "Сообщение успешно отправлено!";
    } else {
        echo "Ошибка при отправке сообщения.";
    }
} else {
    echo "Доступ запрещен.";
}
?>
