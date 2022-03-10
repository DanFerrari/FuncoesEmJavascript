#  for

`Loop dentro de elementos iteraveis (arrays,strings).`

function multiplicaPorDois(arr){
let multiplicados = [];

for(let i = 0; i < arr.length; i++){
multiplicados.push(arr[i]* 2);

}
return multiplicados;
}

const meusNumeros = [2,33,456,356,40];
multiplicadosPorDois(meusNumeros);

// 4,66,912,712,80

# For in

`Loop entre propriedades enumeraveis de um objeto.`

exemplo

function forInExemplo(obj){

for(prop in obj){
    console.log(prop);
}
}



const meuObjeto = {
nome: "Joao",
idade:"20",
cidade:"Salvador"
}

forInExemplo(meuObjeto);
//nome
//idade
//cidade

---------------------------
]
unction forInExemplo(obj){

for(prop in obj){
    console.log(obj[prop]);
}
}



const meuObjeto = {
nome: "Joao",
idade:"20",
cidade:"Salvador"
}

forInExemplo(meuObjeto);
//Joao
//20
//Salvador
,



# for of

`Loop entre estruturas iteraveis(arrays,strings)`.

function logLetras(palavra){
    for(letra of palavra){
        console.log(letra);
    }
}
const palavra = "abacaxi";

logLetras(palavra)


//a
//b
//a
//c
//a
//x
//i

# while

Executa instruções ate que a condicao se torne falsa

function exemploWhile(){



    let num=0;

    while(num <= 5){


console.log(num);
num++;

    }

}


exemploWhile()

//0
//1
//2
//3
//4
//5

# do while


Executa instruções até que a condição se torne falsa.

Porem a primeira execução sempre ocorre.

