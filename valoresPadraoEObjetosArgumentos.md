Parametros
# Objetivo

1-`Ensinar como manipular parametros de uma função`
2-`Técnicas para lidar com números indefinidos de parâmetros`


*Valores Padrao*
formas de definir valores padrao nos parametros, no exemplo abaixo são formas de definir um valor padrao caso o valor de num seja undefined.

[pre-ES2015]:

function exponencial(array,num){
    if (num === undefined){
        num = 1;
    }

    const result = [];

    for (let i = 0; i < array.length;i++){
        result.push(array[i] ** num);
    }
    return result;
}
exponencial({1,2,3,4})
//{1,2,3,4}

[pos-ES2015]

function exponencial(array,num = 1){
   const result = [];

    for (let i = 0; i < array.length;i++){
        result.push(array[i] ** num);
    }
    return result;
}
exponencial({1,2,3,4})
//{1,2,3,4}



*Objeto "arguments"*

Um array com todos os parametros passados quando a funcao foi invocada.

exemplo

function findMax() {
    let max = -Infinity;

    for (let i = 0; i < arguments.length;i++){
        if (arguments[i] > max){
            max = arguments[i];
        }
   }
   return max;
}

//findMax(1,2,3,6,90,1)
90 
