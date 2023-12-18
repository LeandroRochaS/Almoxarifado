function listarProdutos() {
  produtos.forEach((element) => {
    let tabela = document.getElementById("tabela-list-body");

    let linha = document.createElement("tr");

    let divProduto = document.createElement("td");
    let divDescricao = document.createElement("td");
    divProduto.setAttribute("class", "codigo");
    divDescricao.setAttribute("class", "descricao");
    let divQuantidade = document.createElement("td");
    let divUnidade = document.createElement("td");
    let divPreco = document.createElement("td");
    let divTotal = document.createElement("td");

    let totalValorEstoque = element.Preco * element.Estoque;
    divProduto.textContent = element.idProduto;
    divDescricao.textContent = element.Descricao;
    divQuantidade.textContent = element.Estoque;
    divUnidade.textContent = element.unidade; // Substitua com a unidade real, se aplicável
    divPreco.textContent = element.Preco;
    divTotal.textContent = totalValorEstoque;

    linha.appendChild(divProduto);
    linha.appendChild(divDescricao);
    linha.appendChild(divQuantidade);
    linha.appendChild(divUnidade);
    linha.appendChild(divPreco);
    linha.appendChild(divTotal);
    tabela.appendChild(linha);
    atualizarTotalList(totalValorEstoque);
  });
}

function showListProducts() {
  document.getElementById("listProdutos").style.display = "block";
}

document.getElementById("fecharList").addEventListener("click", () => {
  document.getElementById("listProdutos").style.display = "none";
});

let totalList = 0;
function atualizarTotalList(valor) {
  let totalGeralElement = document.getElementById("totalListGeral");
  totalList += valor;
  totalGeralElement.textContent = totalList;
}

listarProdutos();
