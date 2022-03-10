# Arrays

*Spread*:uma forma de lidar separadamente com elementos

O que era parte de um array se torna um elemento independente.

ex: function sum(x,y,z){
    return x + y + z;
}

const numbers = [1,2,3];

console.log(sum(...numbers));

`no caso o spread é utilizado para separar elementos de um array de forma mais facil, ele é utilizado quando vc esta chamando uma funcao`

sintaxe-> 
const nomes = [alfredo,miguel,angela];

console.log(...nomes);

//alfredo
//miguel
//angela




*Rest*:combina os argumentos em um array

Oque era um elemento independente se torna parte de um array.Ele é utilizado quando declaramos a funcao.

function confereTamanho(...args){
    console.log(args.length)
}

confereTamanho() //0
confereTamanho(1,2) // 2
confereTamanho(3,4,5) //3


# Objetos

*Object Destructuring*

Entre chaves{},podemos filtrar apenas os dados que nos interessam em um objeto.

const user = {
id:42,
displayName: 'jdoe',
fullName:{
    firtsName: 'John',
    lastName: 'Doe'
}
};

function userId({id}) {
    return id;
}
function getFullName({fullName:{firstName: first,lastName: last}}){
    return `${first} ${last}`;
}

userId(user)
//42

getFullName(user)
//John Doe

