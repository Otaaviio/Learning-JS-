const pessoas = [
  { id: 1, nome: "Otávio" },
  { id: 2, nome: "Helena" },
  { id: 3, nome: "Beatriz" },
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//   const { id } = pessoa;
//   novasPessoas[id] = { ...pessoa };
// }

const novasPessoas = new Map();
for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id, { ...pessoa });
}

for(const pessoas of novasPessoas.values()) {
  console.log(pessoas)
}

console.log(novasPessoas);
