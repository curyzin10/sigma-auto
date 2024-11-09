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

// Obtém os dados do vendedor
$codigo = $_POST['codigo'];
$usuario = $_POST['usuario'];

// Insere o vendedor no banco de dados
$sql = "INSERT INTO vendedores (codigo, usuario) VALUES ('$codigo', '$usuario')";

if ($conn->query($sql) === TRUE) {
    echo "Vendedor adicionado com sucesso!";
} else {
    echo "Erro: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
