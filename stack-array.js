class Stack {
  constructor() {
    this.items = []
  }
  
  /** Método responsável pela adição de novos elementos no topo da pilha */
  push(element) {
    this.items.push(element)
  }
  
  /** Método responsável por devolver e remover o último elemento adicionado ao topo da pilha */
  pop() {
    return this.items.pop()
  }
  
  /** Método responsável por devolver o item que está no topo da pilha */
  peek() {
    return this.items[this.items.length - 1]
  }
  
  /** Método responsável por retornar true se a pilha estiver vazia e false caso o tamanho da pilha for maior que 0 */
  isEmpty() {
    return this.items.length === 0
  }
  
  /** Método responsável por verificar o número de elementos na pilha */
  size() {
    return this.items.length
  }
  
  /** Método responsável pela remoção de todos os elementos */
  clear() {
    this.items = []
  }
}