//DECLARED VARIABLES
const reset=document.querySelector('.reset')

//This function takes the user to a new page
function goToNewPage(){
  window.location.href="question.html"
}

let resettButton =(e)=>{
  goToNewPage()
   
}

 reset.addEventListener('click',resettButton )


