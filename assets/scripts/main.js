
function inputAdicionarCorAoFocar(){
    var listaInputs = document.querySelectorAll('input[type="text"');
    console.log(listaInputs.length)
    listaInputs.forEach(function(campo){
        campo.addEventListener('focus', function(){
            campo.style.backgroundColor="lightblue";
        });

        campo.addEventListener('blur', function(){
            campo.style.backgroundColor="white";
        });


    });
}

inputAdicionarCorAoFocar();