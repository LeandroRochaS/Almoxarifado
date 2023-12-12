carregarCategorias();

let nomeElement = document.getElementById("NomeFuncionario");

nomeElement.addEventListener("keyup", encontrarFuncionarios);

document.getElementById("idDepartamento").addEventListener("change", () => {
  let idDepartamento = document.getElementById("idDepartamento").value;
  if (idDepartamento != "") {
    carregarDepartamento(idDepartamento);
  }
});

document.getElementById("NomeFuncionario").addEventListener("blur", () => {
  searchResults.innerHTML = "";
});

function encontrarFuncionarios() {
  console.log("passou aqui");
  let idDepartamento = document.getElementById("idDepartamento").value;
  if (idDepartamento == "" || idDepartamento == null) {
    exibirErro("idDepartamento", "Selecione um departamento");
    return;
  }

  let nome = document.getElementById("NomeFuncionario").value;
  console.log(nome);
  const filtrarPorDepartamento = funcionarios.filter(
    (func) => func.idDepartamento == idDepartamento
  );
  const results = filtrarPorDepartamento.filter((func) =>
    func.Nome.toLowerCase().includes(nome.toLowerCase())
  );
  console.log(results);
  displayResults(results);
}

function carregarDepartamento(idDepartamento) {
  var inputDepartamento = document.getElementById("departamento");
  const departamentoFiltrado = departamentos.filter(
    (d) => d.idDepartamento == idDepartamento
  );
  if (departamentoFiltrado.length == 0) {
    exibirErro("idDepartamento", "Departamento não encontrado");
    inputDepartamento.value = "";
    return;
  }
  inputDepartamento.value = departamentoFiltrado[0].Descricao;
  console.log(inputDepartamento.value);
  ocultarErro("idDepartamento");
}

function displayResults(results) {
  const searchResults = document.getElementById("searchResults");
  searchResults.innerHTML = "";

  // Exibir novos resultados
  results.forEach((result) => {
    const li = document.createElement("li");
    li.classList.add("result-item");
    li.textContent = result.Nome;

    li.addEventListener("click", () => {
      document.getElementById("NomeFuncionario").value = result.Nome;
      document.getElementById("idFuncionario").value = result.idFuncionario;
      searchResults.innerHTML = "";
    });

    searchResults.appendChild(li);
  });
}

// ----------------- CATEGORIAS E MOTIVOS ----------------- //

function carregarCategorias() {
  const selectCategoria = document.getElementById("categoriaMotivo");
  selectCategoria.innerHTML = "";

  const optionFirst = document.createElement("option");
  optionFirst.value = -1;
  optionFirst.text = "";
  selectCategoria.appendChild(optionFirst);

  getAllCategorias().forEach(function (categoria) {
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

// ----------------- PRODUTOS ----------------- //

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

const itensDaSecao = [];

function adicionarProduto() {
  event.preventDefault();
  const idProduto = document.getElementById("CodigoProduto").value;
  const produtoFiltrado = produtos.find((p) => p.idProduto == idProduto);

  if (!produtoFiltrado) {
    alert("Produto não encontrado");
    return;
  }

  const descricaoProduto = document.getElementById("DescricaoProduto").value;
  const quantidade = document.getElementById("Estoque").value; // Suponho que você queira usar o campo Estoque
  const preco = produtoFiltrado.Preco;
  const total = quantidade * preco;

  const novoItem = {
    idProduto,
    descricaoProduto,
    quantidade,
    preco,
    total,
  };

  itensDaSecao.push(novoItem);

  let tabelaCodigo = document.getElementById("tabelaCodigo");
  let tabelaDescricao = document.getElementById("tabelaDescricao");
  let tabelaQuantidade = document.getElementById("tabelaQuantidade");
  let tabelaUnidade = document.getElementById("tabelaUnidade");
  let tabelaPreco = document.getElementById("tabelaPreco");
  let tabelaTotal = document.getElementById("tabelaTotal");

  // Criar elementos das novas divs
  const divProduto = document.createElement("p");
  const divDescricao = document.createElement("p");
  const divQuantidade = document.createElement("p");
  const divUnidade = document.createElement("p");
  const divPreco = document.createElement("p");
  const divTotal = document.createElement("p");

  divProduto.textContent = idProduto;
  divDescricao.textContent = descricaoProduto;
  divQuantidade.textContent = quantidade;
  divUnidade.textContent = `1`; // Substitua com a unidade real, se aplicável
  divPreco.textContent = preco;
  divTotal.textContent = total;

  tabelaCodigo.appendChild(divProduto);
  tabelaDescricao.appendChild(divDescricao);
  tabelaQuantidade.appendChild(divQuantidade);
  tabelaUnidade.appendChild(divUnidade);
  tabelaPreco.appendChild(divPreco);
  tabelaTotal.appendChild(divTotal);

  atualizarTotal();
}

function atualizarTotal() {
  let total = 0;

  for (const item of itensDaSecao) {
    total += item.total;
  }
  document.getElementById("totalItens").textContent = total;
}

// ----------------- REQUISIÇÃO ----------------- //
function salvarRequisicao() {
  event.preventDefault();

  const idMotivo = document.getElementById("Motivo").value;
  const motivoFiltrado = motivos.find((m) => m.idMotivo == idMotivo);
  console.log("passou aqui");

  const idCategoria = document.getElementById("categoriaMotivo").value;
  const categoriaFiltrada = categorias.find(
    (c) => c.idCategoria == idCategoria
  );
  console.log("passou ali");

  const idProduto = document.getElementById("CodigoProduto").value;
  const produtoFiltrado = produtos.find((p) => p.idProduto == idProduto);
  console.log("passou cá");

  const idFuncionario = document.getElementById("idFuncionario").value;
  console.log(idFuncionario);
  const funcionarioFiltrado = funcionarios.find(
    (f) => f.idFuncionario == idFuncionario
  );
  console.log("passou lá");

  const nmrRequisisao = document.getElementById("inpNumero").value;
  console.log(nmrRequisisao);

  const idDepartamento = document.getElementById("idDepartamento").value;
  console.log(idDepartamento);

  const dataRequesicao = document.getElementById("dataRequesicao").value;
  console.log(dataRequesicao);

  const nivelDePrioridade = document.querySelector(
    'input[name="prioridade"]:checked'
  ).value;
  console.log(nivelDePrioridade);
  console.log(funcionarioFiltrado);
  console.log(categoriaFiltrada);
  console.log(motivoFiltrado);
  console.log(nivelDePrioridade);
  console.log(itensDaSecao);

  const novoPedido = {
    nmrRequisisao,
    idDepartamento,
    dataRequesicao,
    funcionarioFiltrado,
    categoriaFiltrada,
    motivoFiltrado,
    nivelDePrioridade,
    itensDaSecao,
  };

  console.log(novoPedido);
  alert("Pedido salvo com sucesso!");
}

function cancelarRequisicao() {
  event.preventDefault();

  location.reload();
  alert("Pedido cancelado com sucesso!");
}
