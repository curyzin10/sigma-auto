<?php
include 'db_connection.php';

$id = $_POST['id'];

$sql = "DELETE FROM veiculos WHERE id='$id'";
if ($conn->query($sql) === TRUE) {
    echo "Veículo removido com sucesso!";
} else {
    echo "Erro: " . $conn->error;
}

$conn->close();
?>
