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

  const radioPrioridadeMarcado = document.querySelector(
    'input[name="prioridade"]:checked'
  );

  if (radioPrioridadeMarcado == null) {
    document.querySelector(".radioPrioridade").style.background = "red";
  } else {
    document.querySelector(".radioPrioridade").style.background =
      "rgba(214, 214, 214, 0.21)";
  }
  // Validar sections
  const selections = document.querySelectorAll("select");
  selections.forEach((select) => {
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
  elemento.style.background = "#e30000";

  // Adiciona ou atualiza uma mensagem de erro
  let errorElement = document.getElementById(idElemento + "Error");
  if (!errorElement) {
    errorElement = document.createElement("p");
    errorElement.classList.add("error");
    errorElement.id = idElemento + "Error";

    elemento.parentNode.appendChild(errorElement);

    setTimeout(() => {
      elemento.parentNode.removeChild(errorElement);
    }, 5000);
  }

  errorElement.innerText = mensagem;
}

function ocultarErro(idElemento) {
  const elemento = document.getElementById(idElemento);
  elemento.style.background = "rgba(214, 214, 214, 0.21)";

  // Remove a mensagem de erro se existir
  let errorElement = document.getElementById(idElemento + "Error");
  if (errorElement) {
    errorElement.remove();
  }
}
