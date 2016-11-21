<?php
$id = $_GET["id"];
$sql = "DELETE FROM produtos WHERE id = $id";

echo $sql;