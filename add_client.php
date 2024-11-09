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

// Obtém os dados do cliente
$cpf = $_POST['cpf'];
$nome = $_POST['nome'];
$endereco = $_POST['endereco'];
$telefone_residencial = $_POST['telefone_residencial'];
$celular = $_POST['celular'];
$renda = $_POST['renda'];

// Insere o cliente no banco de dados
$sql = "INSERT INTO clientes (cpf, nome, endereco, telefone_residencial, celular, renda) 
        VALUES ('$cpf', '$nome', '$endereco', '$telefone_residencial', '$celular', '$renda')";

if ($conn->query($sql) === TRUE) {
    echo "Cliente adicionado com sucesso!";
} else {
    echo "Erro: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
