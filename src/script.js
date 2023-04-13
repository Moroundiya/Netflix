var questionContainer = document.querySelectorAll(".FAQ_question_and_answer_container");
for (let i=0;i<questionContainer.length;i++) {
    questionContainer[i].addEventListener("click",(event)=>{
            event.target.childNodes.item(1).classList.toggle('displayAnswer');        
    })
}