## Estrutura

*Definicao comum de uma funcao*

**Variaveis criadas dentro de uma funcao apenas podem ser utilizadas dentro dela.**

ex:
function `nomeDaFuncao([parametros]){
    *instruções*
}

`Quando invocamos o `[return]`,a funcao para de ser executada`

**ele retorna o valor que vai vir apos ele, vc pode escolher se retorna o valor ou nao**
Este valor vc pode usar em outras operações ou funcoes



## Funcao anonima

`Funções que representam expressões`

**Uma variavel pode armazenar uma função**

exemplo:

const soma =  function (a,b){ return a + b;
}

soma(1,2) //3
soma(5,4) //9
