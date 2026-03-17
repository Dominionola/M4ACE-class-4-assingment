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
