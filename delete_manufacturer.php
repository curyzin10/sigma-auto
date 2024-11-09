<?php
// Conexão com o banco de dados
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "rede_sigma"; 

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Obtém o ID da montadora
$id = $_POST['id'];

// Remove a montadora do banco de dados
$sql = "DELETE FROM montadoras WHERE id = $id";

if ($conn->query($sql) === TRUE) {
    echo "Montadora removida com sucesso!";
} else {
    echo "Erro: " . $conn->error;
}

$conn->close();
?>
