//Loop Mastery - Create multiplication tables using nested loops and while
// loops to understand different iteration patterns

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i] * 2);
}

let i = 0;
do {
  console.log(arr[i] * 3);
  i++;
} while (i < arr.length);
