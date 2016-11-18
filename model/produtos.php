
<?php

$db = new PDO('mysql:host=localhost;dbname=renner_pdv;charset=UTF8','root','elaborata');

$sql = "select * from produtos
         order by nome ASC";

$retorno = $db->query($sql);

$produtos = $retorno->fetchAll(PDO::FETCH_ASSOC);



echo json_encode($produtos);

