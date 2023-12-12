function validarFormulario() {
  console.log("Validando formulário...");
  event.preventDefault();

  var idDepartamento = document.getElementById("idDepartamento");
  var departamento = document.getElementById("departamento");
  var dataRequisicao = document.getElementById("dataRequisicao");
  var idFuncionario = document.getElementById("idFuncionario");
  var NomeFuncionario = document.getElementById("NomeFuncionario");
  var cargo = document.getElementById("cargo");
  var categoriaMotivo = document.getElementById("categoriaMotivo");
  var Motivo = document.getElementById("Motivo");
  var prioridade = document.querySelectorAll(
    'input[name="prioridade"]:checked'
  );
  var CodigoProduto = document.getElementById("CodigoProduto");
  var DescricaoProduto = document.getElementById("DescricaoProduto");
  var Estoque = document.getElementById("Estoque");
  console.log(prioridade.value);

  var inputs = [
    idDepartamento,
    departamento,
    dataRequisicao,
    idFuncionario,
    NomeFuncionario,
    cargo,
    categoriaMotivo,
    Motivo,
    CodigoProduto,
    DescricaoProduto,
    Estoque,
  ];

  inputs.forEach(function (elemento) {
    if (elemento.value == "" || elemento.value == null) {
      exibirError(elemento.id);
    } else {
      ocultarError(elemento.id);
    }
  });

  console.log("Validando campos obrigatórios...");

  if (
    typeof CodigoProduto.value != "number" ||
    CodigoProduto.value < 0 ||
    CodigoProduto.value == null
  ) {
    console.log("Código do produto inválido");
    exibirError("CodigoProduto");

    /*et errorProduto = document.getElementById("grupoProdutoError");

    let pProduto = (document.createElement("p").innerText =
      "Código do produto inválido");
    errorProduto.appendChild(pProduto);
    */
  }

  if (
    typeof Estoque.value != "number" ||
    Estoque.value < 0 ||
    Estoque.value == null
  ) {
    console.log("Código do produto inválido");
    exibirError("Estoque");
    /*
    let errorProduto = document.getElementById("grupoProdutoError");

    let pProduto = (document.createElement("p").innerText =
      "Código do produto inválido");
    errorProduto.appendChild(pProduto);
    */
  }

  console.log("Formulário validado com sucesso.");

  return true;
}

function exibirError(idElemento) {
  const elemento = document.getElementById(idElemento);
  elemento.style.display = "block";
  elemento.style.border = "1px solid red";
}

carregarCategorias();

function ocultarError(idElemento) {
  const elemento = document.getElementById(idElemento);
  elemento.style.display = "none";
  elemento.style.border = "1px solid #ccc";
}

function carregarCategorias() {
  const selectCategoria = document.getElementById("categoriaMotivo");
  selectCategoria.innerHTML = "";

  const optionFirst = document.createElement("option");
  optionFirst.value = -1;
  optionFirst.text = "";
  selectCategoria.appendChild(optionFirst);

  categorias.forEach(function (categoria) {
    let option = document.createElement("option");
    option.value = categoria.idCategoria;
    option.text = categoria.Descricao;
    selectCategoria.add(option);
  });
}

function carregarMotivos() {
  const selectMotivo = document.getElementById("Motivo");
  selectMotivo.innerHTML = "";

  const optionFirst = document.createElement("option");
  optionFirst.value = -1;
  optionFirst.text = "";
  selectMotivo.appendChild(optionFirst);

  const valorCategoria = document.getElementById("categoriaMotivo");
  const motivosFiltrados = motivos.filter(
    (m) => m.idCategoria == valorCategoria.value
  );
  console.log(valorCategoria);
  console.log(motivosFiltrados);

  motivosFiltrados.forEach(function (motivo) {
    let option = document.createElement("option");
    option.value = motivo.idMotivo;
    option.text = motivo.Descricao;
    selectMotivo.add(option);
  });
}

document
  .getElementById("categoriaMotivo")
  .addEventListener("change", function () {
    carregarMotivos();
  });

document.getElementById("CodigoProduto").addEventListener("blur", function () {
  const idProduto = document.getElementById("CodigoProduto").value;
  const produtoFiltrado = produtos.filter((p) => p.idProduto == idProduto);

  if (produtoFiltrado.length == 0) {
    document.getElementById("DescricaoProduto").value = "";
    document.getElementById("Estoque").value = "";
    return;
  }
  document.getElementById("DescricaoProduto").value =
    produtoFiltrado[0].Descricao;
  document.getElementById("Estoque").value = produtoFiltrado[0].Estoque;

  acimaDe10(produtoFiltrado[0].Estoque, produtoFiltrado[0].EstoqueMinimo);
});

function acimaDe10(estoque, estoqueMinimo) {
  let porcentagemEstoque = estoqueMinimo * 0.1;
  let corEstoque = document.getElementById("corEstoque");
  console.log(porcentagemEstoque);
  if (estoque > porcentagemEstoque) {
    corEstoque.style.backgroundColor = "#00D222";
  }
  if (estoque < porcentagemEstoque) {
    corEstoque.style.backgroundColor = "#FBF215";
  }
  if (estoque < estoqueMinimo) {
    corEstoque.style.backgroundColor = "#92030C";
  }
}

var divCorEstoque = document.getElementById("corEstoque");

divCorEstoque.addEventListener("mouseover", function () {
  document.querySelector(".modalEstoque").style.display = "block";
});

divCorEstoque.addEventListener("mouseout", function () {
  document.querySelector(".modalEstoque").style.display = "none";
});
