# Funções autoinvocavel

[IIFE] (Immediately Invoked Function Expression)

`Uma funcao anonima entre parenteses,seguida por outro par de parenteses,que representa uma chamada.`

{
    function(){
        let name = "digital innovation one"
        return name;
    }
    } ();

// digital inovation one

também pode ser utilizada com parametros ou armazenada em uma variavel

exemplo:

(
function(a,b){
return a + b;
}
) (1,2);

// 3

exemplo 2 :

const soma3 = (
function(){
    return a + b;
}
) (1,2);
console.log(soma3) // 3

 ## Callbacks

 `Basicamente é uma funcao passada como argumento para outra`

 **Utilizando callbacks, você tem maior controle da ordem de chamadas**


exemplo:

const calc = function(operacao,num1,num2){
    return operacao(num1, num2);
}

const soma = function(num1,num2){
    return num1 + num2;
    }

const sub = function(num1,num2){
    return num1 - num2;
}

const resultSoma = calc(soma,1,2);
const resultSub = calc(sub,1,2);

console.log(resultSub); //-1
console.log(resultSoma);// 3

