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

// Obtém os dados da operação
$tipo = $_POST['tipo'];
$cliente_id = $_POST['cliente_id'];
$veiculo_id = $_POST['veiculo_id'];
$vendedor_id = $_POST['vendedor_id'];
$valor = $_POST['valor'];

// Insere a operação no banco de dados
$sql = "INSERT INTO operacoes (tipo, cliente_id, veiculo_id, vendedor_id, valor) VALUES ('$tipo', '$cliente_id', '$veiculo_id', '$vendedor_id', '$valor')";

if ($conn->query($sql) === TRUE) {
    echo "Operação adicionada com sucesso!";
} else {
    echo "Erro: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
