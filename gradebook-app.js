// Step 1

function getAverage(scores) {
    let total = 0;
    
    for (let score of scores) {
        // Add each score to the total
        total = total + score;
    }
    // Calculate the average
    let average = total / scores.length;
    return average;
}
console.log(getAverage([12, 57, 67, 38]));

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
console.log(getGrade(76));
console.log(getGrade(100));
console.log(getGrade(46));

// Step 3

function hasPassingGrade(score) {
  let passingGrade = getGrade(score) !== "F";
  return passingGrade;
}

console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));

// Step 4

function studentMsg(totalScores, studentScore) {
  let sum = 0;
  sum += totalScores;
  let classAverage = sum / totalScores.length;

  if (getGrade(studentScore) !== "F") {
    return `Class average: ${classAverage}. "\n" Your grade: ${studentScore}. You passed the course.`
  } else {
    return `Class average: ${classAverage}. Your grade: ${studentScore}. You failed the course.`
  }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));