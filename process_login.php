<?php
$email = $_POST['email'];
$password = $_POST['password'];

// Database connection
$conn = new mysqli('localhost', 'root', '', 'signup');

if ($conn->connect_error) {
    die('Connection Failed : ' . $conn->connect_error);
}

$stmt = $conn->prepare("INSERT INTO sign (email, password) VALUES (?, ?)");
$stmt->bind_param("ss", $email, $password);

$stmt->execute();

echo "Registration Successful.";

$stmt->close();
$conn->close();
?>
