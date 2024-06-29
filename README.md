# Gradebook Page

## Step one

- A teacher has finished grading their students' tests and needs your help to calculate the average score for the class.

- Complete the getAverage function which takes in an array of test scores and returns the average score.

- The average is calculated by adding up all the scores and dividing by the total number of scores.

- Example Code
    - average = sum of all scores / total number of scores

- A couple of function calls have been provided for you so you can test out your code.

### Tips

- You can use a loop to iterate over the scores array and add up all the scores.

- You can use the length property to get the total number of scores.


## Step two

- Now the teacher needs your help converting the student score to a letter grade.

- Complete the getGrade function that takes a number score as a parameter. Your function should return a string representing a letter grade based on the score.

- Here are the scores and their corresponding letter grades:

        - Score Range	Grade
        - 100	"A++"
        - 90 - 99	"A"
        - 80 - 89	"B"
        - 70 - 79	"C"
        - 60 - 69	"D"
        - 0 - 59	"F"


## Step three

- The teacher is really happy with the program you have created so far. But now they want to have an easy way to check if a student has a passing grade. A passing grade is anything that is not an "F".

- Complete the function hasPassingGrade that takes a student score as a parameter. Your function should return true if the student has a passing grade and false if they do not.

- Tips

    - Use the getGrade function to get the student's grade. Then check if the grade is passing or not.
