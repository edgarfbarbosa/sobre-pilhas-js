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
}