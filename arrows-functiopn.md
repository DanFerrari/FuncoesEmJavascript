Objetivos

`sintaxe arrow function`


const helloWorld = function(){
    return "Hello World"; 
}


const helloWord = () =>{

return "Hello World";
}




**Quando temos somente uma linha de instruções na arrow function dispensamos as chaves e o return, pois deste modo ele ja vai retornar o valor**
exemplo:
const helloWorld = () => "hello World";


**caso exista somente um parametro pode dispensar os parentese**
exemplo
`mais de um poarametro`
const soma = (a,b) => a + b;
soma(4,6);
//10

`somente um parametro`
const soma = a => a;
soma (4);
//4

*ARROW FUNCTION NÃO FAZ HOISTING*

FUNCOES COMUNS FAZEM HOISTING, POREM AS ARROWS FUNCTIONS NÃO



[OUTRAS-RESTRIÇÕES]


`"this" sempre sera o objeto global.metodos para modificar seu valor nao irao funcionar`;

`nao existe o objeto "arguments"`;

`O construtur (ex: new MeuObjeto()) támbem não pode ser utilizado`.



