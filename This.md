Objetivo

`Apresentar a palavra this e seu uso`

`Como aplicar métodos para manipular seu valor`

A palavra reservada this é referencia de contexto.

No exeplo, this refere-se ao objeto pessoa.

Exemplo:

const pessoa = {
firstName: "Andre",
lastName: "Soares",
id: 1,
fullName:function(){
    return this.firstName+""+this.lastName;
},
getId:function(){
    return this.id;
}
};


pessoa.fullName();
// "Andre Soares"

pessoa.getId();
//3



Seu valor pode mudar de acordo com o lugar no codigo onde foi chamada


[CONTEXTO]          [REFERENCIA]
em um objeto(metodo) --  Proprio objeto dono do metodo
Sozinha -- Objeto global(em navegadores,window)
Funcao -- objeto global
Evento -- elemento que recebeu o evento


`Manipulando valor de this`

# Call

const pessoa = {
    nome: 'Miguel',

};

const animal = {
    nome: 'Murphy',
};

function getSomething(){
    console.log(this.nome);
}

getSomenthing.call(pessoa);

*Quando usamos call neste exemplo, estamos indicando qual o objeto que o this vai selecionar para referenciar*

# Apply

const pessoa = {
    nome: 'Miguel',
};
const animal = {
    nome: 'Godi',
};

function getSomething(){
console.log(this.nome);
}

getSomething.apply(animal);

// Godi



`É possivel passar parametros para essa funcao dentro de um array`


*A diferença entre o call e o apply, é que enquanto o call manda os argumentos de forma separada o apply manda em forma de array*
Exemplo:

const myObj = {
num1: 2;
num2: 4;
};
function soma(a,b){
    console.log(this.num1 +  this.num2 + a +b );
}

soma.apply(myObj,[1,5]);

//12


 # Bind

 `Clona a estrutura da funcao onde é chamada e aplica o valor do objeto passado como parametro.`

 const retonraNomes = function(){
return this.nome;
 };

 let bruno = retornaNomes.bind ({nome: 'Bruno'});

 bruno();

 //bruno



