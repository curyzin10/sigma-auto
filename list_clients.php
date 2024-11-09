<?php
// Conexão com o banco de dados
$servername = "localhost"; // ou o endereço do seu servidor
$username = "root"; // usuário padrão do MySQL
$password = ""; // senha do usuário
$dbname = "rede_sigma"; // nome do seu banco de dados

$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Consulta para listar clientes
$sql = "SELECT * FROM clientes";
$result = $conn->query($sql);

$clientes = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $clientes[] = $row;
    }
}

$conn->close();

// Retorna os dados como JSON
header('Content-Type: application/json');
echo json_encode($clientes);
?>
