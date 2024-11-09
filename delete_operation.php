<?php
include 'db_connection.php';

$id = $_POST['id'];

$sql = "DELETE FROM operacoes WHERE id='$id'";
if ($conn->query($sql) === TRUE) {
    echo "Operação removida com sucesso!";
} else {
    echo "Erro: " . $conn->error;
}

$conn->close();
?>

