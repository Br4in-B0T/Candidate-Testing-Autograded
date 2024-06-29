const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
//New

//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ", 
  "True or false: 5 kilometer == 5000 meters? ", 
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "];
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3" ];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Hello & Welcome\nPlease Enter Your Name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  // console.log(question);
  // candidateAnswer = input.question("Enter Answer Here: ");
  for (let i = 0; i < questions.length; i++){
    console.log("\n"+questions[i]);
    candidateAnswers.push(input.question("Enter Answer Here: "));
  }

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  // if (candidateAnswer === correctAnswer){
  //   console.log("Great Job! That's the correct answer.");
  // } else {
  //   console.log("The answer submitted was incorrect.");
  // }
  let correct = 0;
  let incorrect = 0;
  for (let i = 0; i < questions.length; i++){
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
      console.log(`\nYour answer for question ${i}: ${candidateAnswers[i]}\nThe correct answer for question ${i} is: ${correctAnswers[i]} `);
      correct += 1;
      console.log(correct);
    } else {
      console.log(`\nYour answer for question ${i}: ${candidateAnswers[i]}\nThe correct answer for question ${i} is: ${correctAnswers[i]} `);
      
    }
  }

  let grade;  //TODO 3.2 use this variable to calculate the candidates score.
  
  let percent = ((correct/5) * 100);
  if (percent >= 80){
    grade = percent;
    console.log(`\nCongrats! You passed the Quiz with a ${percent}%`);
  } else {
    grade = percent;
    console.log(`\nIt looks like you failed the Quiz with a ${percent}%. Keep Studying!`)
  }

  console.log(questions);
  console.log();
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(`\nGreetings ${candidateName}, lets get started on todays Quiz! `);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
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