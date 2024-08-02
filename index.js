//DECLARED VARIABLES
const btn_previous=document.querySelector('.btn_previous')
const btn_next=document.querySelector('.btn_next')
const btn_submit=document.querySelector('.btn_submit')
const quiz_text=document.querySelector('.quiz_text')
const reset=document.querySelector('.reset')
const question=document.querySelectorAll('.question')
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




// const showQuestion=()=>{


// }
let resettButton =(e)=>{
const question=document.querySelectorAll('.question')
console.log(question)
   score=0
   quiz_text.innerHTML=""
   quiz_text.innerHTML=`
            <div class="take-quiz">
                    <p class="Question">1. Who is the mother of Jesus</p>
                    <div class="options">
                    <button class='question'>a. Jane</button>
                    <button class='question'>b. Mary</button>
                    <button class='question'>c. Gonta</button>
                    <button class='question'>d. Racheal</button>
                    </div>
                    
                </div> 
                <div class="buton">
                    <button class="btn_previous">Previous</button>
                    <button class="btn_submit">Submit</button>
                    <button class="btn_next">Next</button>
                </div>   
   
   `
   
}
 reset.addEventListener('click',resettButton )

// This function removes active class from all other buttons
const removeActiveClass=(arr)=>{
    arr.forEach(btn=> btn.classList.remove('active'))
}
 removeActiveClass(question)
 const optionSelected=()=>{
   removeActiveClass(question)
   button.classList.add("active")

}

question.forEach(button => {
    const optionSelected=()=>{
   removeActiveClass(question)
   button.classList.add("active")

}
    button.addEventListener('click',optionSelected )
});




// const showQuestion=()=>{
    
// }