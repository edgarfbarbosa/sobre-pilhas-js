# Referência para entender Pilhas com JavaScript

<p>

A Estrutura de Dados **Pilha** (_stack_) apresenta algumas semelhanças com os Arrays, porém, ela nos oferece mais controle sobre a adição e remoção dos elementos.

</p>

<p>

Uma pilha é uma coleção ordenada de itens que obedece ao princípio LIFO (_Last In, First Out_), em tradução livre, o último a entrar é o primeiro a sair. Ou seja, os elementos não podem ser adicionados ou removidos fora de ordem, o último elemento adicionado é sempre o primeiro a ser removido. Para entender melhor, imagine uma pilha de livros.

</p>

## Métodos disponíveis em uma pilha (_stack_)

### Método push()

O método `push()` é responsável pela adição de um ou mais elementos no topo da pilha.

```
push() {
  this.items.push()
}
```

### Método pop()

O método `pop()` remove e devolve o elemento que está no topo da pilha.

```
pop() {
  return this.items.pop()
}
```

### Método peek()

O método `peek()` devolve como informação o elemento que está no topo da pilha.

```
peek() {
  return this.items[this.items.length - 1]
}
```

### Método isEmpty()

O método `isEmpty()` é responsável por retornar `true` se a pilha estiver vazia e `false` caso o tamanho da pilha seja maior que 0.

```
isEmpty() {
  return this.items.length === 0
}
```

### Método size()

O método `size()` devolve o número de elementos contidos na pilha.

```
size() {
  return this.items.length
}
```

### Método clear()

O método `clear()` é responsável pela remoção de todos os elementos da pilha.

```
clear() {
  this.items = []
}
```
