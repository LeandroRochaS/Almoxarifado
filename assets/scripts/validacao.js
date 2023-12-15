function validarFormulario() {
  erros = 0;
  console.log("Validando formulário...");
  event.preventDefault();

  const inputs = document.querySelectorAll("input[name='validated']");

  // Valida os campos obrigatórios
  inputs.forEach((input) => {
    if (input.required || input.value == "" || input.value == null) {
      console.log("Campo obrigatório não preenchido: " + input.id);
      exibirErro(input.id, "Campo obrigatório");
      erros++;
    } else {
      console.log("Campo obrigatório preenchido: " + input.id);
      ocultarErro(input.id);
    }
  });

  // Validar sections
  const selections = document.querySelectorAll("select");
  selections.forEach((select) => {
    console.log(select.value);
    if (select.value == "" || select.value == 0 || select.value == -1) {
      console.log("select obrigatória não preenchida: " + select.id);
      exibirErro(select.id, "");
      erros++;
    } else {
      console.log("select obrigatória preenchida: " + select.id);

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
