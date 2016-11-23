$(document).ready(function() {  //lê todos os documentos ao final de td

    carregaRegistros();


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
    $('#bt-cadastrar').click(function() {
        var temErro = false;
        
        $('input, select').each(function (idx, elem){          //campo por campo
            var valor = $(elem).val();
              $(elem).parents('.form-group').removeClass('has-error')
            
            if (valor == ""){
                temErro = true;
                $(elem).parents('.form-group').addClass('has-error')
            }
           
        });
        
        if (temErro == true){        //todos os campos juntos
            
        }else{
             $('#form-produto').submit(); ///chama o submit primeiro e depois da o alerta para não replicar a mensagem para o usúario.
              $('input, select').each(function (idx, elem){    
                  $(elem).val("");
        });
    }
       
    });
    $('#form-produto').submit(function(evento) { //mostra o alert para o usúario
        evento.preventDefault(); //para não redirecionar, passar por debaixo dos panos
        var dados = {
            codigo: $('#codigo').val(),
            nome: $('#nome').val(),
            marca: $('#marca').val(),
            valor: $('#valor').val(),
            quantidade: $('#quantidade').val()

        };
        $.post("/model/cadastro.php", dados, function(retorno) { //função de callback para permanecer na mesma página

            var obj_retorno = JSON.parse(retorno); //transformando mensagem de texto (status ok em cadastro.php) em objeto

            if (obj_retorno.status === "ok") {
                $('#cadastro-produto').modal('hide');
                carregaRegistros();
                $('#alert-produto').removeClass('hide');
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
function carregaRegistros() {
    $.getJSON('/model/produtos.php', function(retorno) {
        $('#lista-produtos tbody').empty();

        var total = 0;

        retorno.forEach(function(obj, idx) {
            total += parseInt(obj.quantidade); //mudando string para inteiro

            var tr = '<tr obj-id="'+ obj.id +'">'
                    + "<td>" + obj.codigo + "</td>"
                    + "<td>" + obj.nome + "</td>"
                    + "<td>" + obj.marca + "</td>"
                    + "<td>R$ " + formataValor(obj.preco) + "</td>"
                    + "<td>" + obj.quantidade + "</td>"
                    + '<td><button type="button" class="bt-deletar btn btn-danger">'
                    + '<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>'   //botão excluir(glif)
            + '<td><button type="button" class="bt-deletar btn btn-success">'
                    + '<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>'
                    + '</button>'
                    + "</td>";
            "  </tr>";
            $('#lista-produtos tbody').append(tr);
        });

        $('#quantidade-total').html(total);

        $('.bt-deletar').click(function() { 
            var tr = $(this).parent().parent(); //pegando id
            var id = tr.attr('obj-id');
            var dados = {
              id: id  
            };
            $.getJSON('/model/deletar.php', dados, function(retorno){
                
                 if (retorno.status === "ok") {
                carregaRegistros();
                $('#alert-produto').removeClass('hide');
                $('#alert-produto').html('O Produto foi removido com sucesso!')
            }
                
            });
        });

    });

}