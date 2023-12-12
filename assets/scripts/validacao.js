function validarFormulario() {
  console.log("Validando formulário...");
  event.preventDefault();

  const inputs = document.querySelectorAll("input");

  // Valida os campos obrigatórios
  inputs.forEach((input) => {
    if (input.required || input.value == "") {
      console.log("Campo obrigatório não preenchido: " + input.id);
      exibirErro(input.id, "Campo obrigatório");
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
    } else {
      console.log("select obrigatória preenchida: " + select.id);

      ocultarErro(select.id);
    }
  });

  // Valida os campos numéricos
  const camposNumericos = ["CodigoProduto", "Estoque"];
  camposNumericos.forEach((campo) => {
    if (
      document.getElementById(campo).value == "" ||
      document.getElementById(campo).value == null
    ) {
      exibirErro(campo, "Valor inválido");
    } else {
      ocultarErro(campo);
    }
  });

  console.log("Formulário validado com sucesso.");
  salvar();
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
