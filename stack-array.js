class Stack {
  constructor() {
    this.items = []
  }
  
  /** Método responsável pela adição de novos elementos no topo da pilha */
  push(element) {
    this.items.push(element)
  }
  
  /** Método responsável pela remoção do último elemento adicionado ao topo da pilha */
  pop() {
    return this.items.pop()
  }
  
  /** Método responsável por devolver o item que está no topo da pilha */
  peek() {
    return this.items[this.items.length - 1]
  }
}