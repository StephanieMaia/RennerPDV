$(document).ready(function() {  //lê todos os documentos ao final de td

    $.getJSON('/model/produtos.php', function(retorno) {
        $('#lista-produtos tbody').empty();
        
        var total = 0;

        retorno.forEach(function(obj, idx) {           
            total += parseInt(obj.quantidade); //mudando string para inteiro

            var tr = "<tr>"
                    + "<td>" + obj.codigo + "</td>"
                    + "<td>" + obj.nome + "</td>"
                    + "<td>" + obj.marca + "</td>"
                    + "<td>R$ " + formataValor(obj.preco) + "</td>"
                    + "<td>" + obj.quantidade + "</td>";
            "  </tr>";
            $('#lista-produtos tbody').append(tr);
        });
        
        $('#quantidade-total').html(total);
        
    });

    //código para permitir que sejam digitados apenas números.

    $('#codigo, #valor, #quantidade').keydown(function(key) {
        console.log(key.keyCode);
        if (key.keyCode >= 48 && key.keyCode <= 57) {           
            return true;
        } else if (key.keyCode === 8 || key.keyCode === 9) {

        } else {
            return false;

        }

    });
    //código para permitir que sejam digitados apenas numeros.
$('#bt-cadastrar').click(function(){
    $('#form-produto').submit(); ///chama o submit primeiro e depois da o alerta para não replicar a mensagem para o usúario.
});
    $('#form-produto').submit(function(evento){ //mostra o alert para o usúario
        evento.preventDefault(); //para não redirecionar, passar por debaixo dos panos
        var dados = {
            
        };
        $.post("/model/cadastro.php", dados, function(retorno){ //função de callback para permanecer na mesma página
           
            var obj_retorno = JSON.parse(retorno); //transformando mensagem de texto (status ok em cadastro.php) em objeto
         
            if (obj_retorno.status == "ok"){
                alert("cadastrado com sucesso! ") //se status esta ok, mostra mensagem
            }
        });
    });
});

//formatando o valor e adicionando zero no final.
function formataValor(valor) {
    var partes = valor.toString().split('.');
    if (partes[1] === undefined) {
        partes[1] = '00';
    }
    if (partes[1].length < 2) {
        partes[1] += '0';
    }
    var retorno = partes[0] + ',' + partes[1];

    return retorno;
}
