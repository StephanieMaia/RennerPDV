<?php
$db = new PDO('mysql:host=localhost;dbname=renner_pdv;charset=UTF8','root','elaborata');

$sql = "INSERT INTO produtos (

    codigo,
    nome,
    marca,
    preco,
    quantidade)
    VALUES (
    
    '" . $_POST['codigo'] . "',
    '" . $_POST['nome'] . "',
    '" . $_POST['marca'] . "',
    '" . $_POST['valor'] . "',
    '" . $_POST['quantidade'] . "'
                            )";

$retorno = $db->exec($sql);
if ($retorno > 0){
    $status['status'] = 'ok';
}else{
    $status['status'] = 'erro';
    $status['msg'] = 'não foi cadastrado';
}

echo json_encode($status);