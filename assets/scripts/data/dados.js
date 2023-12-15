// dados.js
const categorias = [
  {
    idCategoria: 1,
    Descricao: "Gestão",
  },
  {
    idCategoria: 2,
    Descricao: "Cliente",
  },
  {
    idCategoria: 3,
    Descricao: "RP",
  },
];

const motivos = [
  {
    idMotivo: 1,
    Descricao: "Planejamento",
    idCategoria: 1,
  },
  {
    idMotivo: 2,
    Descricao: "Financeiro",
    idCategoria: 1,
  },
  {
    idMotivo: 3,
    Descricao: "Financeiro",
    idCategoria: 2,
  },
];

const produtos = [
  {
    idProduto: 1,
    Descricao: "Papel A4",
    Estoque: 10,
    Preco: 20,
    EstoqueMinimo: 5,
  },
  {
    idProduto: 2,
    Descricao: "Mel doce",
    Estoque: 1,
    Preco: 10,
    EstoqueMinimo: 15,
  },
  {
    idProduto: 3,
    Descricao: "Bala Fini",
    Estoque: 10,
    Preco: 3,
    EstoqueMinimo: 15,
  },
  {
    idProduto: 4,
    Descricao: "Jujuba",
    Estoque: 50,
    Preco: 1,
    EstoqueMinimo: 30,
  },
];

const funcionarios = [
  {
    idFuncionario: 1,
    Nome: "João Silva",
    Cargo: "Gerente",
    idDepartamento: 1,
  },
  {
    idFuncionario: 2,
    Nome: "Maria Souza",
    Cargo: "Vendedor",
    idDepartamento: 1,
  },
  {
    idFuncionario: 3,
    Nome: "José Santos",
    Cargo: "Auxiliar",
    idDepartamento: 3,
  },
  {
    idFuncionario: 4,
    Nome: "José Alves",
    Cargo: "Auxiliar",
    idDepartamento: 3,
  },
];

const departamentos = [
  {
    idDepartamento: 1,
    Descricao: "Administração",
  },
  {
    idDepartamento: 2,
    Descricao: "Comercial",
  },
  {
    idDepartamento: 3,
    Descricao: "Financeiro",
  },
];

const requisicoes = [
  {
    numeroDaRequisicao: 1,
    idDepartamento: 1,
    dataRequisicao: new Date(),
    idFuncionario: 1,
    categoriaMotivo: 1,
    motivo: 1,
    nivelDePrioridade: 1,
    idProdutosRequitidos: [1, 2],
  },
  {
    numeroDaRequisicao: 2,
    idDepartamento: 2,
    dataRequisicao: new Date(),
    idFuncionario: 2,
    categoriaMotivo: 2,
    motivo: 2,
    nivelDePrioridade: 2,
    idProdutosRequitidos: 2,
  },
  {
    numeroDaRequisicao: 3,
    idDepartamento: 3,
    dataRequisicao: new Date(),
    idFuncionario: 3,
    categoriaMotivo: 3,
    motivo: 3,
    nivelDePrioridade: 3,
    idRequisicaoProdutos: 3,
  },
];

const prioridade = [
  {
    idPrioridade: 1,
    Descricao: "Baixa",
  },
  {
    idPrioridade: 2,
    Descricao: "Média",
  },
  {
    idPrioridade: 3,
    Descricao: "Urgente",
  },
];

function getAllCategorias() {
  return categorias;
}

// Função para obter todas as requisições
function getAllRequisicoes() {
  return requisicoes;
}

// Função para obter todos os produtos
function getAllProdutos() {
  return produtos;
}

function saidaDeProdutos(idProduto, quantidade) {
  produtos[idProduto - 1].Estoque -= quantidade;
}

function getAllMotivos() {
  return motivos;
}
