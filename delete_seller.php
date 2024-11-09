<?php
include 'db_connection.php';

$id = $_POST['id'];

$sql = "DELETE FROM vendedores WHERE id='$id'";
if ($conn->query($sql) === TRUE) {
    echo "Vendedor removido com sucesso!";
} else {
    echo "Erro: " . $conn->error;
}

$conn->close();
?>
