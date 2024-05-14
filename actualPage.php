<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if(isset($_POST['fullName']) && isset($_POST['loginUsername']) && isset($_POST['loginPassword'])) {
    $fullName = $_POST['fullName'];
    $username = $_POST['loginUsername'];
    $password = password_hash($_POST['loginPassword'], PASSWORD_DEFAULT); // Hashing the password

    $data = "Full Name: $fullName\nUsername: $username\nPassword: $password\n";
    file_put_contents('data.txt', $data, FILE_APPEND);

    header("Location: HOME PAGE.html"); // Ensure this points to the correct HTML file
    exit;
} else {
    echo "Error: All fields are required.";
}
?>