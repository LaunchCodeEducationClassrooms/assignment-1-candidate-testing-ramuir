const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = 'Sally Ride';
let candidateAnswer = '';
let questions = ["Who was the first American woman in space? ","True or False: 5000 meters = 5 kilometers. ","(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ","What is the minimum crew size for the International Space Station (ISS)? "] ;
let correctAnswers = ["Sally Ride", "True", "40", "Trajectory", "3"] ;
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name? ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i=0;i<questions.length;i++){
    let answer = input.question(`${i+1})${questions[i]}`);
    candidateAnswers.push(answer);
    console.log(`Your Answer: ${candidateAnswers[i]}`);
    console.log(`Correct Answer: ${correctAnswers[i]}`);
    console.log("");
  }

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  // if (candidateAnswer === correctAnswer){
  //   console.log("That is correct!");
  // } 
  // else if (candidateAnswer.toLowerCase() == correctAnswer.toLowerCase()){
  //   console.log("That is correct!");
  // }
  // else{
  //   console.log("That is not correct!");
  // }
  
   let intersection = correctAnswers.filter(x => candidateAnswers.includes(x));
   

  let grade = (intersection.length / correctAnswers.length) * 100;
  console.log(`>>> Overall Grade: ${grade}% (${intersection.length} of 5 responses correct) <<<`);
  if(intersection.length<4){
    console.log(">>>Status: FAILED <<<");
  }else{
    console.log(">>> Status: PASS <<<");
  }

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Candidate Name: ${candidateName}!`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};