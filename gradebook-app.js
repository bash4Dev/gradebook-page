// Step 1

// function getAverage(scores) {
// }

//   console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
//   console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

// Step 2

function getGrade(score) {

  if (score === 100) {
    return "A++";
  } else if (score >= 99) {
    return "A";
  } else if (score >= 89) {
    return "B";
  } else if (score >= 79) {
    return "C";
  } else if (score >= 69) {
    return "D";
  } else {
    return "F";
  }
}

// Here are some function calls for testing

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

// Step 3

// function hasPassingGrade(score) {

// }

// console.log(hasPassingGrade(100));
// console.log(hasPassingGrade(53));
// console.log(hasPassingGrade(87));

// Step 4

// function studentMsg(totalScores, studentScore) {

// }
// console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));