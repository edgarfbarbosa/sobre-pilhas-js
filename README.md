# Referência para entender Pilhas com JavaScript

## O que é a Estrutura de Dados Pilha?

<p>

A Estrutura de Dados **Pilha** (_Stack_) apresenta algumas semelhanças com os Arrays, porém, ela nos oferece mais controle sobre a adição e remoção dos elementos.

</p>

<p>

Uma pilha é uma coleção ordenada de itens que obedece ao princípio LIFO (_Last In, First Out_), em tradução livre, o último a entrar é o primeiro a sair. Ou seja, os elementos não podem ser adicionados ou removidos fora de ordem, o último elemento adicionado é sempre o primeiro a ser removido. Para entender melhor, imagine uma pilha de livros.

</p>

## Criando uma Pilha usando Arrays

<p>

Segue abaixo nossa classe construtora e os métodos disponíveis em uma pilha.

```
class Pilha {
  constructor() {
    this.itens = []
  }
}
```

</p>

### Métodos disponíveis em uma Pilha (_Stack_)

#### Método push()

O método `push()` é responsável pela adição de um ou mais elementos no topo da pilha.

```
push(elemento) {
  this.itens.push(elemento)
}
```

#### Método pop()

O método `pop()` remove e devolve o elemento que está no topo da pilha.

```
pop() {
  return this.itens.pop()
}
```

#### Método peek()

O método `peek()` devolve como informação o elemento que está no topo da pilha.

```
peek() {
  return this.itens[this.itens.length - 1]
}
```

#### Método isEmpty()

O método `isEmpty()` é responsável por retornar `true` se a pilha estiver vazia e `false` caso o tamanho da pilha seja maior que 0.

```
isEmpty() {
  return this.itens.length === 0
}
```

#### Método size()

O método `size()` devolve o número de elementos contidos na pilha.

```
size() {
  return this.itens.length
}
```

#### Método clear()

O método `clear()` é responsável pela remoção de todos os elementos da pilha.

```
clear() {
  this.itens = []
}
```

## Exemplo Prático de uma Pilha em JavaScript usando Arrays

<p>

Conhecendo nossa classe construtora e os métodos disponíveis em uma pilha (_stack_), a classe `Pilha` foi construída da seguinte maneira:

</p>

```
class Pilha {
  constructor() {
    this.itens = []
  }

  push(elemento) {
    this.itens.push(elemento)
  }

  pop() {
    return this.itens.pop()
  }

  peek() {
    return this.itens[this.itens.length - 1]
  }

  isEmpty() {
    return this.itens.length === 0
  }

  size() {
    return this.itens.length
  }

  clear() {
    this.itens = []
  }
}
```
