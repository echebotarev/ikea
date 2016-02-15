<?php
    if (!isset($_POST['name']) or empty($_POST['name'])) {
		$error1 = "Имя?<br />";
	} else $error1 = NULL;

	if (!isset($_POST['email']) or empty($_POST['email'])) {
		$error2 = "Email?<br />";
	} else $error2 = NULL;

	if (!isset($_POST['phone']) or empty($_POST['phone'])) {
		$error4 = "Телефон?<br />";
	} else $error4 = NULL;

	if (empty($error1) and empty($error2) and empty($error3) and empty($error4)) {
		$headers = "Content-type: text/html; Charset=UTF-8";

		$name = $_POST['name'];
		$email = $_POST['email'];
		$phone = $_POST['phone'];
		$wishes = $_POST['wishes'];
		$message = "<p>Имя: {$name},</p> <p>email: {$email},</p> <p>Телефон: {$phone},</p> <p>сообщение: {$_POST['wishes']}</p>";
		if (mail("9111721308@mail.ru", "Заявка", $message, $headers)) {
			echo "Отправлено!";
		} else echo "Ошибка!";
	} else {
		echo $error1.$error2.$error4;
	}
?>