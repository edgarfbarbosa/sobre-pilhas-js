class Stack {
  constructor() {
    /** this.count é uma propriedade responsável por ajudar a manter o controle do tamanho da pilha */
    this.count = 0
    this.items = []
  }
  
  push(element) {
    this.items[this.count] = element
    this.count++
  }
  
  size() {
    return this.count
  }
  
  isEmpty() {
    return this.count === 0
  }
  
  /**
  * Método responsável por devolver e remover o último elemento adicionado ao topo da pilha.
  * @returns {*} O elemento removido, ou undefined se a pilha estiver vazia.
  */
  pop() {
    /** Verificando se a pilha está vazia */
    if (this.isEmpty()) return undefined
    
    /** Realizando o decremento da propriedade count */
    this.count--
    
    /** Armazenando o valor que estava no topo da pilha */
    const result = this.items[this.count]
    
    /** Removendo o elemento do topo da pilha */
    delete this.items[this.count]
    
    /** Devolvendo o elemento que foi do topo da pilha removido */
    return result
  }
  
  /**
  * Método responsável por devolver o item que está no topo da pilha.
  * @returns {*} O elemento que está no topo da pilha, ou undefined se a pilha estiver vazia.
  */
  peek() {
    /** Verificando se a pilha está vazia */
    if (this.isEmpty()) return undefined
    
    /** Devolvendo o elemento do topo da pilha */
    return this.items[this.count - 1]
  }
  
  clear() {
    while (!this.isEmpty()) {
      this.pop()
    }
  }
  
  /**
  * Método responsável por exibir o conteúdo da pilha.
  * Retorna uma string representando o conteúdo da pilha.
  * @returns {string} Uma string representando o conteúdo da pilha.
  */
  toString() {
    /** Verificando se a pilha está vazia, se estiver, devolve uma string vazia */
    if (this.isEmpty()) return ''
    
    /** Armazenando o valor que está no topo da pilha */
    let objString = `${this.items[0]}`
    
    /** Percorre todos os itens na pilha e adiciona o item à string 'objString', separado por vírgula */
    for (let i = 0; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`
    }
    
    return objString
  }
}