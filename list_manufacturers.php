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

// Consulta para listar montadoras
$sql = "SELECT * FROM montadoras";
$result = $conn->query($sql);

$montadoras = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $montadoras[] = $row;
    }
}

$conn->close();

// Retorna os dados como JSON
header('Content-Type: application/json');
echo json_encode($montadoras);
?>
