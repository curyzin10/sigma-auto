<?php
// Conexão com o banco de dados
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "rede_sigma"; 

$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Consulta para listar vendedores
$sql = "SELECT * FROM vendedores";
$result = $conn->query($sql);

$vendedores = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $vendedores[] = $row;
    }
}

$conn->close();

// Retorna os dados como JSON
header('Content-Type: application/json');
echo json_encode($vendedores);
?>
