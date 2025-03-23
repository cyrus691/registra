<?php
// Start the session to keep track of logged-in users
session_start();

// Database connection details
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Logindetails";

// Connect to the database
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check if the connection was successful
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Check if the form has been submitted for registration
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["register"])) {
    // Get the data from the registration form
    $name = $_POST["username"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $password2 = $_POST["password2"];

    // Check if the passwords match
    if ($password != $password2) {
        echo "<script>alert('Passwords do not match!'); window.location.href='registration.html';</script>";
        exit(); // Stop the script if passwords don't match
    }

    // Hash the password to make it more secure
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Prepare and execute the query to insert user data into the database
    $sql = "INSERT INTO logincredentials (username, email, password) VALUES ('$name', '$email', '$hashed_password')";
    if (mysqli_query($conn, $sql)) {
        echo "<script>alert('Registration successful!'); window.location.href='login.html';</script>";
    } else {
        echo "<script>alert('Error: " . mysqli_error($conn) . "'); window.location.href='registration.html';</script>";
    }
}

// Check if the form has been submitted for login
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["login"])) {
    // Get the data from the login form
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Check if the user exists in the database
    $sql = "SELECT username, password FROM logincredentials WHERE email='$email'";
    $result = mysqli_query($conn, $sql);

    // If the user is found, check the password
    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);

        // Verify the entered password against the hashed password in the database
        if (password_verify($password, $row["password"])) {
            $_SESSION["username"] = $row["username"]; // Store the username in session
            echo "<script>alert('Login successful!'); window.location.href='home.php';</script>";
        } else {
            echo "<script>alert('Invalid email or password.'); window.location.href='login.html';</script>";
        }
    } else {
        echo "<script>alert('Invalid email or password.'); window.location.href='login.html';</script>";
    }
}

// Close the database connection
mysqli_close($conn);
?>
