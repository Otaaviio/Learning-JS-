let alunos = ['Maria', 'Luiz', 'Joao']

alunos[4] = 'Jonata';
alunos[3] = 'Gabriel';
console.log(alunos)

alunos.push("Leonardo") 
// adiciona por último
console.log(alunos)

alunos.unshift("Joaquim")
// adiciona em primeiro
console.log(alunos)

let removido = alunos.pop();
// remove o último
console.log(alunos);
console.log(removido);
delete alunos[2]

console.log(alunos[50])

console.log(alunos.slice(0, 3))

console.log(typeof alunos);
console.log(alunos instanceof Array);

alunos = 1234
console.log(typeof alunos);
console.log(alunos instanceof Number);