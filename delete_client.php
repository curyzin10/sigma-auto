<?php
include 'db_connection.php';

$id = $_POST['id'];

$sql = "DELETE FROM clientes WHERE id='$id'";
if ($conn->query($sql) === TRUE) {
    echo "Cliente removido com sucesso!";
} else {
    echo "Erro: " . $conn->error;
}

$conn->close();
?>