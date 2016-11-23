<?php
$db = new PDO('mysql:host=localhost;dbname=renner_pdv;charset=UTF8','root','elaborata');
$id = $_GET["id"];
$sql = "DELETE FROM produtos WHERE id = $id";


$retorno = $db->exec($sql);
if ($retorno > 0){
    
    $status['status'] = 'ok';
}else{
    $status['status'] = 'erro';
    $status['msg'] = 'não foi possivel apagar o registro';
}

echo json_encode($status);