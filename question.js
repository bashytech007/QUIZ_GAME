//The Question Object
const quiz_questions=[
       {
            question:'What is the mother of Jesus? ',
            option:['Jane', 'Martha', 'Racheal', 'Deborah'],
            correctAns:"Mary"
       },

       {
            question:'Jesus was Born in ___________',
            option:['Neboth', 'Nile River', 'Bethlehem', 'Ezra'],
            correctAns:"Bethlehem"
       },

       {
            question:'David was the son of _________',
            option:['Jesse', 'Daniel', 'Solomon', 'Jacob'],
            correctAns:"Jesse"
       },

       {
            question:'_________ is the friend of David',
            option:['Matthew', 'Simon', 'Nathaniel', 'Jonathan'],
            correctAns:'Jonathan'
       },

       {
            question:'Follow me, I will make you fishers of ________',
            option:['Women', 'Fishes', 'Men', 'Prawn'],
            correctAns:"Men"
       }

]

//DECLARED VARIABLES
let score=0
let currentQuestionIndex = 1;
const btn_previous=document.querySelector('.btn_previous')
const btn_next=document.querySelector('.btn_next')
const btn_submit=document.querySelector('.btn_submit')
const quiz_text=document.querySelector('.quiz_text')
const question=document.querySelectorAll('.question')
const take_quiz=document.querySelector('.take_quiz')
const currentQuestion = quiz_questions[currentQuestionIndex];
const questionArea = document.querySelector('.Question');
const optionsArea = document.querySelector('.options');
console.log(questionArea)

 console.log(take_quiz)


//This function creates button  
function createOptions(){
        currentQuestion.option.forEach(eachOption => {
        const button = document.createElement('button');
        button.textContent = eachOption;
        button.classList.add('question')
     //    optionsArea.innerHTML=""
        optionsArea.appendChild(button)
       button.addEventListener('click', function (e){     
       let selectedOption=e.target
       selectedOption.classList.add('question', 'active')
       quiz_text.innerHTML=""
          let newContainer=document.createElement('div')
          newContainer.classList.add('take')
          let displayButton=document.createElement('div')
           displayButton.classList.add('neww')
          let previousButton=document.createElement('button')     
          let nextButton=document.createElement('button')
          

          previousButton.textContent='Previous'
          nextButton.textContent='Next'
          nextButton.classList.add('button')
          nextButton.classList.add('button', 'btn_next' )
          previousButton.classList.add('button')
          previousButton.classList.add('button', 'btn_next' )
          quiz_text.appendChild(newContainer)
          quiz_text.appendChild(displayButton)
          displayButton.appendChild(previousButton) 
          displayButton.appendChild(nextButton) 
          

    if(selectedOption.textContent === currentQuestion.correctAns){
       score++
        newContainer.innerHTML=`
               <p>Wow! Your answer is correct 🤩😂 Your current score is ${score}</p>
    
               `
             }
        else {
          newContainer.innerHTML=`
         <p>Wow! Your answer is incorrect 😭😭 Your current score is ${score}</p>
    
    `
        }
//          currentQuestionIndex++;
//          console.log(currentQuestionIndex)
//     setTimeout(loadQuestion, 1000);
    displayButton.addEventListener(click, (e)=>{
      window.location.href="index.html"

    }


)
        
     
     //  newButton.addEventListener("click",function(){
     //      let upated=currentQuestionIndex++;
     //      console.log(currentQuestionIndex)
     //      loadQuestion() ;
    
     //  })

      
 })

 
})
}
createOptions()

//This function loads the question and options
function loadQuestion(){
    
    if (currentQuestionIndex < quiz_questions.length){
        const currentQuestion = quiz_questions[currentQuestionIndex];
        questionArea.textContent = currentQuestion.question;
        optionsArea.innerHTML = '';

        createOptions()

  
    // } else {
    //     displayScore();
    // }
      
}
}

loadQuestion() 

