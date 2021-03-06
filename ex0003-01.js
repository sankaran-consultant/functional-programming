var animals = [
  { species: 'fish', gender: 'male',    name: 'Deborah',    _id: '576fd6e9cf165226104bd2e2', },
  { species: 'dog', gender: 'female',    name: 'Macias',    _id: '576fd6e9a268397358d21646', },
  { species: 'frog', gender: 'male',    name: 'Mckee',    _id: '576fd6e97e6dd7f772b0b718', },
  { species: 'cat', gender: 'male',    name: 'Donna',    _id: '576fd6e905b46734e87ed252', },
  { species: 'dog', gender: 'male',    name: 'Morin',    _id: '576fd6e9e049e7c862f29bc5', },
  { species: 'cat', gender: 'male',    name: 'Sheena',    _id: '576fd6e97c66172ad8df9663', },
  { species: 'dog', gender: 'female',    name: 'Stevens',    _id: '576fd6e9eeebff173895af6b', },
  { species: 'frog', gender: 'female',    name: 'Guy',    _id: '576fd6e90b23a8a470030236', },
  { species: 'cat', gender: 'female',    name: 'Kane',    _id: '576fd6e974e6cbd609e008f6', },
  { species: 'dog', gender: 'male',    name: 'Kara',    _id: '576fd6e96e41daa122baaa66', },
  { species: 'dog', gender: 'male',    name: 'George',    _id: '576fd6e9aef91c56c614db05', },
  { species: 'fish', gender: 'female',    name: 'Santos',    _id: '576fd6e90772c09c45753907', },
  { species: 'frog', gender: 'male',    name: 'Vonda',    _id: '576fd6e9f28eeb594ef51a07', },
  { species: 'fish', gender: 'female',    name: 'Lindsey',    _id: '576fd6e9a8b269097f9e3b4c', },
  { species: 'cat', gender: 'male',    name: 'Olson',    _id: '576fd6e9d19e72ad3981ad64', },
];

// Filter with for loop

var dogs = [];

for (var i = 0; i < animals.length; i++) {
  if (animals[i].species === 'dog') {
    dogs.push(animals[i]);
  }
}

console.log(dogs);

// Using Filter
console.log('using filter');
var isDog = function (a) { return a.species === 'dog'; };

var otherAnimals = function (a) { return a.species !== 'dog'; };

console.log(animals.filter(isDog));
console.log(animals.filter(otherAnimals));

// Let us just print the names
console.log(
  animals
  .filter(isDog)
  .map(function (dog) {return dog.name;}));
