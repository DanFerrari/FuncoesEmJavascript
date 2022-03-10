Objetivos

`Ensinar como utilizar algumas das mais famosas declarações do javascript.`

[if-else]
*declaracao1* dentro de if
Ocorre caso a condicao seja verdadeira

*declaracao2* dentro de else
Ocorre caso a condicao seja falsa

function numeroPositivo(num){

let resultado;

if(num < 0){
    resultado = false;
}
else{
    resultado = true;
}

return resultado
}

numeroPositivo(2)
// true

numeroPositivo(-9)
//false

Switch Case

function getAnimal(id){
    switch(id){
case 1:
    return "cão";
    case 2:
        return "gato";
            case 3:
                return "passaro";
                    default:
                        return "peixe";
}
}


getAnimal(1) //cão
