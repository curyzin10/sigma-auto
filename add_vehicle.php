<?php
include 'db_connection.php';

// Recebe os dados enviados via POST
$chassi = $_POST['chassi'];
$placa = $_POST['placa'];
$marca = $_POST['marca'];
$modelo = $_POST['modelo'];
$ano_fabricacao = $_POST['ano_fabricacao'];
$ano_modelo = $_POST['ano_modelo'];
$cor = $_POST['cor'];
$preco = $_POST['preco'];

// Validação básica
if (empty($modelo) || empty($preco)) {
    echo "Erro: todos os campos são obrigatórios.";
    exit;
}

// Insere no banco de dados com prepared statements para segurança
$stmt = $conn->prepare("INSERT INTO veiculos (chassi, placa, marca, modelo, ano_fabricacao, ano_modelo, cor, preco) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");

// Verifica se a preparação da query foi bem-sucedida
if (!$stmt) {
    die("Erro na preparação da query: " . $conn->error);
}

// Define os tipos de dados para cada variável (exemplo: "s" para string, "i" para inteiro, "d" para decimal)
$stmt->bind_param("ssssiiid", $chassi, $placa, $marca, $modelo, $ano_fabricacao, $ano_modelo, $cor, $preco);

// Executa a query e verifica se houve sucesso
if ($stmt->execute()) {
    echo "Veículo adicionado com sucesso!";
} else {
    echo "Erro: " . $stmt->error;
}

// Fecha a declaração e a conexão
$stmt->close();
$conn->close();
?>
