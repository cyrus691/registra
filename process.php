<?php
$servername = "localhost";
$username ="root";
$password="";
$dbname="Logindetails";

$conn = mysqli_connect($servername,$username,$password,$dbname);
if(!$conn){
    die("connection failed".mysqli_connect_error());
}else{
    echo"connected successfully";
}
$name = $_POST["username"];
$email = $_POST["email"];
$password = $_POST["password"];
$password = $_POST["password2"];
$sql ="INSERT INTO logincredentials"(username,email,password,password2)VALUES('$name','$email','$password','$password2');
mysqli_query($conn,$sql);
echo"data saved successfully";
mysqli_close($conn);

?>