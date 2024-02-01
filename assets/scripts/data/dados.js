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
    unidade: "Un",
  },
  {
    idProduto: 2,
    Descricao: "Mel doce",
    Estoque: 8,
    Preco: 10,
    EstoqueMinimo: 10,
    unidade: "Un",
  },
  {
    idProduto: 3,
    Descricao: "Bala Fini",
    Estoque: 9,
    Preco: 3,
    EstoqueMinimo: 10,
    unidade: "Un",
  },
  {
    idProduto: 4,
    Descricao: "Jujuba",
    Estoque: 50,
    Preco: 1,
    EstoqueMinimo: 30,
    unidade: "Un",
  },
  {
    idProduto: 5,
    Descricao: "Lápis HB",
    Estoque: 25,
    Preco: 2,
    EstoqueMinimo: 10,
    unidade: "Un",
  },
  {
    idProduto: 6,
    Descricao: "Caderno 100 folhas",
    Estoque: 15,
    Preco: 15,
    EstoqueMinimo: 5,
    unidade: "Un",
  },
  {
    idProduto: 7,
    Descricao: "Régua 30cm",
    Estoque: 30,
    Preco: 1.5,
    EstoqueMinimo: 10,
    unidade: "Un",
  },
  {
    idProduto: 8,
    Descricao: "Caneta azul",
    Estoque: 20,
    Preco: 1.2,
    EstoqueMinimo: 8,
    unidade: "Un",
  },
  {
    idProduto: 9,
    Descricao: "Apontador",
    Estoque: 8,
    Preco: 0.5,
    EstoqueMinimo: 4,
    unidade: "Un",
  },
  {
    idProduto: 10,
    Descricao: "Borracha",
    Estoque: 40,
    Preco: 0.8,
    EstoqueMinimo: 20,
    unidade: "Un",
  },
  {
    idProduto: 11,
    Descricao: "Cola Bastão",
    Estoque: 12,
    Preco: 2.5,
    EstoqueMinimo: 6,
    unidade: "Un",
  },
  {
    idProduto: 12,
    Descricao: "Estojo",
    Estoque: 18,
    Preco: 5,
    EstoqueMinimo: 8,
    unidade: "Un",
  },
  {
    idProduto: 13,
    Descricao: "Tesoura",
    Estoque: 7,
    Preco: 3.5,
    EstoqueMinimo: 3,
    unidade: "Un",
  },
  {
    idProduto: 14,
    Descricao: "Pasta L de plástico",
    Estoque: 22,
    Preco: 4,
    EstoqueMinimo: 12,
    unidade: "Un",
  },
  {
    idProduto: 15,
    Descricao: "Grampeador",
    Estoque: 5,
    Preco: 8,
    EstoqueMinimo: 2,
    unidade: "Un",
  },
  {
    idProduto: 16,
    Descricao: "Cartolina A3",
    Estoque: 30,
    Preco: 1.5,
    EstoqueMinimo: 15,
    unidade: "Un",
  },
  {
    idProduto: 17,
    Descricao: "Caneta vermelha",
    Estoque: 15,
    Preco: 1.2,
    EstoqueMinimo: 6,
    unidade: "Un",
  },
  {
    idProduto: 18,
    Descricao: "Apagador",
    Estoque: 10,
    Preco: 2,
    EstoqueMinimo: 4,
    unidade: "Un",
  },
  {
    idProduto: 19,
    Descricao: "Folha sulfite",
    Estoque: 100,
    Preco: 0.5,
    EstoqueMinimo: 50,
    unidade: "Un",
  },
  {
    idProduto: 20,
    Descricao: "Clips metálicos",
    Estoque: 50,
    Preco: 0.3,
    EstoqueMinimo: 20,
    unidade: "Un",
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
  {
    idFuncionario: 5,
    Nome: "Ana Oliveira",
    Cargo: "Analista",
    idDepartamento: 2,
  },
  {
    idFuncionario: 6,
    Nome: "Carlos Rocha",
    Cargo: "Desenvolvedor",
    idDepartamento: 2,
  },
  {
    idFuncionario: 7,
    Nome: "Amanda Lima",
    Cargo: "Analista de Marketing",
    idDepartamento: 4,
  },
  {
    idFuncionario: 8,
    Nome: "Lucas Fernandes",
    Cargo: "Analista Financeiro",
    idDepartamento: 4,
  },
  {
    idFuncionario: 9,
    Nome: "Fernanda Oliveira",
    Cargo: "Designer",
    idDepartamento: 5,
  },
  {
    idFuncionario: 10,
    Nome: "Pedro Mendes",
    Cargo: "Engenheiro",
    idDepartamento: 5,
  },
  {
    idFuncionario: 11,
    Nome: "Julia Costa",
    Cargo: "Analista de Recursos Humanos",
    idDepartamento: 6,
  },
  {
    idFuncionario: 12,
    Nome: "Rafaela Santos",
    Cargo: "Estagiário",
    idDepartamento: 6,
  },
  {
    idFuncionario: 13,
    Nome: "Miguel Oliveira",
    Cargo: "Técnico de Suporte",
    idDepartamento: 7,
  },
  {
    idFuncionario: 14,
    Nome: "Patrícia Souza",
    Cargo: "Analista de Qualidade",
    idDepartamento: 7,
  },
  {
    idFuncionario: 15,
    Nome: "Gustavo Silva",
    Cargo: "Coordenador de Projetos",
    idDepartamento: 8,
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
  {
    idDepartamento: 4,
    Descricao: "Marketing",
  },
  {
    idDepartamento: 5,
    Descricao: "Design e Engenharia",
  },
  {
    idDepartamento: 6,
    Descricao: "Recursos Humanos",
  },
  {
    idDepartamento: 7,
    Descricao: "Suporte e Qualidade",
  },
  {
    idDepartamento: 8,
    Descricao: "Projetos",
  },
];

// Certifique-se de adicionar um ID único para cada novo departamento

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
