//DECLARED VARIABLES
const btn_previous=document.querySelector('.btn_previous')
const btn_next=document.querySelector('.btn_next')
const btn_submit=document.querySelector('.btn_submit')
const quiz_text=document.querySelector('.quiz_text')
const button=document.querySelector('.button')
const question=document.querySelector('.question')
console.log(question)
let score=0
const quiz_questions=[
       {
            question:'Who is the mother of Jesus? ',
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
            correctAns:"Jonathan"
       },

       {
            question:'Follow me, I will make you fishers of ________',
            option:['Women', 'Fishes', 'Men', 'Prawn'],
            correctAns:"Men"
       }

]
// function options(arr){
//         for(let i=0; i< arr.lenth) {
          
//         }
        
//     }
    // console.log(options(quiz_questions[0].option))
    // console.log(quiz.option)
console.log(quiz_questions[0].option)
let resettButton=(e)=>{
    // function options(arr){
    //     arr.forEach(function(element,index){
    //         let eachOption=element 
    //     });
    // }
    // options(quiz_questions[index].option)
    // console.log(qu.option)
   score=0
   quiz_text.innerHTML=`
                <div class="take-quiz">
                    <p>1. Who is the mother of Jesus</p>
                    <p class='question'>a. Jane</p>
                    <p>b. Mary</p>
                    <p>c. Gonta</p>
                    <p>d. Racheal</p>
                </div> 
                <div class="buton">
                    <button class="btn_previous">Previous</button>
                    <button class="btn_submit">Submit</button>
                    <button class="btn_next">Next</button>
                </div>
   
   `

}
button.addEventListener('click', resettButton)
const optionSelected=()=>{
   question.classList.add('question', "design")

}
question.addEventListener('click', optionSelected)