//Loop Mastery - Create multiplication tables using nested loops and while
// loops to understand different iteration patterns

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
for (let i = 1; i <= 12; i++) {
  let rowOutput = "";

  for (let j = 1; j <= 12; j++) {
    rowOutput += (i * j).toString().padStart(4, " ");
  }

  console.log(rowOutput);
  // console.log(arr[i] * 2);
}

let i = 1;
while (i <= 12) {
  let j = 1;
  let rowOutput = "";

  while (j <= 12) {
    rowOutput += (i * j).toString().padStart(4, " ");
    j++;
  }

  console.log(rowOutput);
  i++;
}

// Array Methods Practice - Work with a student dataset to practice filter,
// map, reduce, sort, some, and every methods for data transformation
// and analysis

const students = [
  { id: 1, name: "Alice", grade: 85, subject: "Math", isActive: true },
  { id: 2, name: "Bob", grade: 42, subject: "History", isActive: true },
  { id: 3, name: "Charlie", grade: 92, subject: "Math", isActive: false },
  { id: 4, name: "Diana", grade: 78, subject: "Science", isActive: true },
  { id: 5, name: "Evan", grade: 55, subject: "History", isActive: false },
];

passingStudents = students.filter((student) => student.grade >= 60);
console.log(passingStudents);

const studentNames = students.map((students) => students.name);
console.log(studentNames);

const totalClassScore = students.reduce((accumulator, student) => {
  return accumulator + student.grade;
}, 0);

console.log(totalClassScore);
