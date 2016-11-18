$(document).ready(function() {

    $.getJSON('/model/produtos.php', function(retorno) {
        $('#lista-produtos tbody').empty();
        
        var total = 0;

        retorno.forEach(function(obj, idx) {
            total += parseInt(obj.quantidade);

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

    //código para permitir que sejam digitados apenas numeros.

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
    $('#form-produto').submit();
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
