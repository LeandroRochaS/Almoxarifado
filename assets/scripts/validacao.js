function validarFormulario() {
  erros = 0;
  event.preventDefault();

  let inputs = document.querySelectorAll("input[name='validated']");
  const inputDate = document.getElementById("dataRequesicao");

  inputs = [...inputs, inputDate];

  // Valida os campos obrigatórios
  inputs.forEach((input) => {
    if (input.required || input.value == "" || input.value == null) {
      exibirErro(input.id, "Campo obrigatório");
      erros++;
    } else {
      ocultarErro(input.id);
    }
  });

  // Validar sections
  const selections = document.querySelectorAll("select");
  selections.forEach((select) => {
    console.log(select.value);
    if (select.value == "" || select.value == 0 || select.value == -1) {
      exibirErro(select.id, "");
      erros++;
    } else {
      ocultarErro(select.id);
    }
  });

  if (erros == 0) return true;
  else return false;
}

function exibirErro(idElemento, mensagem) {
  const elemento = document.getElementById(idElemento);
  elemento.style.border = "1px solid red";

  // Adiciona ou atualiza uma mensagem de erro
  let errorElement = document.getElementById(idElemento + "Error");
  if (!errorElement) {
    errorElement = document.createElement("p");
    errorElement.classList.add("error");
    errorElement.id = idElemento + "Error";

    elemento.parentNode.appendChild(errorElement);
  }

  errorElement.innerText = mensagem;
}

function ocultarErro(idElemento) {
  const elemento = document.getElementById(idElemento);
  elemento.style.border = "1px solid #ccc";

  // Remove a mensagem de erro se existir
  let errorElement = document.getElementById(idElemento + "Error");
  if (errorElement) {
    errorElement.remove();
  }
}
