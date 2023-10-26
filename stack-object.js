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
}