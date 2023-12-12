class CategoriaController {
  // Exemplo de função para obter todas as categorias
  static getAllCategorias() {
    return window.dados.categorias;
  }

  // Exemplo de função para obter motivos por categoria
  static getMotivosByCategoria(idCategoria) {
    return window.dados.motivos.filter(
      (motivo) => motivo.idCategoria === idCategoria
    );
  }
}

export default CategoriaController;
