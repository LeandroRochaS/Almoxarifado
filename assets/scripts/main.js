
function inputAdicionarCorAoFocar(){
    var listaInputs = document.querySelectorAll('input[type="text"');
  
    listaInputs.forEach(function(campo){
        campo.addEventListener('focus', function(){
            campo.style.backgroundColor="lightblue";
        });

        campo.addEventListener('blur', function(){
            campo.style.backgroundColor="white";
        });


    });
}



function carregarCategoriaMotivos(){
    var selectCategoria = document.getElementById('categoriaMotivo');
    selectCategoria.innerHTML="";
    
    var optionVazia = document.createElement("option");
    optionVazia.value = -1;
    optionVazia.text ="";
    selectCategoria.add(optionVazia);

    categoriasDados.forEach(function(categoria) {
      
        var option = document.createElement("option");    
        option.value = categoria.codigo;
        option.text = categoria.nomeCategoria;
        selectCategoria.add(option);
    });

}

function carregarMotivos(){
    var selectCategoria = document.getElementById('Motivo');
    selectCategoria.innerHTML="";

    let idCat = document.getElementById('categoriaMotivo').value;
    let motivosFiltrados = motivoDados.filter(function(item){
        return item.idCategoria==idCat;
    });

    motivosFiltrados.forEach(function(itemMotivo) {
      
        var option = document.createElement("option");    
        option.value = itemMotivo.codigo;
        option.text = itemMotivo.motivo;
        selectCategoria.add(option);
    });
}

// document.getElementById("btnInserirItens").addEventListener('click',function(){

// });

inputAdicionarCorAoFocar();
carregarCategoriaMotivos();
document.getElementById('categoriaMotivo').addEventListener('change',function(){
    carregarMotivos();
});

console.log(categoriasDados)
console.log(motivoDados.filter(function(itens){
    return itens.idCategoria==1
}));