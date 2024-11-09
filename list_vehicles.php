<?php
include 'db_connection.php';

$sql = "SELECT * FROM veiculos";
$result = $conn->query($sql);

$veiculos = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $veiculos[] = $row;
    }
}
echo json_encode($veiculos);

$conn->close();
?>
