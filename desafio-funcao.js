const alunos = [{
    nome:'joao',
    nota:5,
    turma: '1b',
},
 {
    nome:'sofia',
    nota:9,
    turma: '1b',
},
 {
    nome:'Paulo',
    nota:6,
    turma: '1b',
},
{
    nome:'miguel',
    nota:3,
    turma: '1b',
},



]




function alunoAprovados(arr,media){

let aprovados = [];

for(let i = 0; i < arr.length; i++){

const {nota,nome } = arr[i];

if(nota >= media){
    aprovados.push(nome);
}
}
return aprovados;


}
console.log(alunoAprovados(alunos,5));