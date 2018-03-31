const arr1 = [
  {"name":"chevy", "count": 2},
  {"name":"ford", "count": 5},
  {"name":"acura", "count": 3},
  {"name":"honda", "count": 16},
];

const newArr = search => {
  return arr1.filter(i => i.name == search);
}

console.log("Filter results:",newArr("ford"));


const arr2 = ['Bill', 'Joe', 'Emily', 'Andrea'];
const newStudents = ['Andrew', 'Tasha', 'Carol', 'George'];

const addNewStudent = (array, newArray) => {
  return [...array, ...newArray];
}

console.log(addNewStudent(arr2, newStudents));