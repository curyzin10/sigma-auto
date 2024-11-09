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

// Obtém os dados da montadora
$cnpj = $_POST['cnpj'];
$razao_social = $_POST['razao_social'];
$marca = $_POST['marca'];
$contato = $_POST['contato'];
$telefone_comercial = $_POST['telefone_comercial'];
$celular = $_POST['celular'];

// Insere a montadora no banco de dados
$sql = "INSERT INTO montadoras (cnpj, razao_social, marca, contato, telefone_comercial, celular) VALUES ('$cnpj', '$razao_social', '$marca', '$contato', '$telefone_comercial', '$celular')";

if ($conn->query($sql) === TRUE) {
    echo "Montadora adicionada com sucesso!";
} else {
    echo "Erro: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
