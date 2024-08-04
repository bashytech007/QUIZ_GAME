// The Question Object
const quiz_questions = [
     {
          question: 'What is the mother of Jesus? ',
          option: ['Jane', 'Martha', 'Racheal', 'Deborah'],
          correctAns: "Mary"
      },
      {
          question: 'Jesus was Born in ___________',
          option: ['Neboth', 'Nile River', 'Bethlehem', 'Ezra'],
          correctAns: "Bethlehem"
      },
      {
          question: 'David was the son of _________',
          option: ['Jesse', 'Daniel', 'Solomon', 'Jacob'],
          correctAns: "Jesse"
      },
      {
          question: '_________ is the friend of David',
          option: ['Matthew', 'Simon', 'Nathaniel', 'Jonathan'],
          correctAns: 'Jonathan'
      },
      {
          question: 'Follow me, I will make you fishers of ________',
          option: ['Women', 'Fishes', 'Men', 'Prawn'],
          correctAns: "Men"
      }
 ];
 
 // DECLARED VARIABLES
 let score = 0;
 let currentQuestionIndex = 0;
 const quizContainer = document.querySelector('.quiz_container');
 const questionArea = quizContainer.querySelector('.Question');
 const optionsArea = quizContainer.querySelector('.options');
 const quiz_text = quizContainer.querySelector('.quiz_text');
 const btn_previous = quizContainer.querySelector('.btn_previous');
 const btn_next = quizContainer.querySelector('.btn_next');
 const btn_submit = quizContainer.querySelector('.btn_submit');
 
 function createOptions() {
     if (!optionsArea) {
         console.error('Options area not found');
         return;
     }
     optionsArea.innerHTML = "";
     const currentQuestion = quiz_questions[currentQuestionIndex];
     currentQuestion.option.forEach(eachOption => {
         const button = document.createElement('button');
         button.textContent = eachOption;
         button.classList.add('question');
         optionsArea.appendChild(button);
         button.addEventListener('click', handleOptionClick);
     });
 }
 
 function handleOptionClick(e) {
     const selectedOption = e.target;
     const currentQuestion = quiz_questions[currentQuestionIndex];
     
     quiz_text.innerHTML = "";
     let newContainer = document.createElement('div');
     newContainer.classList.add('take');
     
     if (selectedOption.textContent === currentQuestion.correctAns) {
         score++;
         newContainer.innerHTML = `<p>Wow! Your answer is correct 🤩😂 Your current score is ${score}</p>`;
     } else {
         newContainer.innerHTML = `<p>Wow! Your answer is incorrect 😭😭 Your current score is ${score}</p>`;
     }
     
     quiz_text.appendChild(newContainer);
 
     document.querySelectorAll('.question').forEach(btn => btn.disabled = true);
 
     setTimeout(() => {
         currentQuestionIndex++;
         if (currentQuestionIndex < quiz_questions.length) {
             loadQuestion();
         } else {
             displayScore();
         }
     }, 2000);
 }
 
 function loadQuestion() {
     console.log('Loading question:', currentQuestionIndex);
     if (currentQuestionIndex < quiz_questions.length) {
         const currentQuestion = quiz_questions[currentQuestionIndex];
         if (questionArea) {
             questionArea.textContent = currentQuestion.question;
         } else {
             console.error('Question area not found');
         }
         quiz_text.innerHTML = "";
         createOptions();
     } else {
         displayScore();
     }
 }
 
 function displayScore() {
     quizContainer.innerHTML = `<h2>Quiz completed! Your final score is ${score} out of ${quiz_questions.length}</h2>`;
 }
 
 btn_next.addEventListener('click', () => {
     currentQuestionIndex++;
     if (currentQuestionIndex < quiz_questions.length) {
         loadQuestion();
     } else {
         displayScore();
     }
 });
 
 btn_previous.addEventListener('click', () => {
     if (currentQuestionIndex > 0) {
         currentQuestionIndex--;
         loadQuestion();
     }
 });
 
 // Initial load
 document.addEventListener('DOMContentLoaded', () => {
     loadQuestion();
 });