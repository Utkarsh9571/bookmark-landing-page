const menu = document.querySelector('.nav-open')
const hamburger = document.querySelector('.icon-hamburger')
const iconClose = document.querySelector('.icon-close')

hamburger.addEventListener('click', ()=>{
    menu.style.transform = "translateX(0)"
})
iconClose.addEventListener('click', ()=>{
    menu.style.transform = "translateX(750px)"
})


const firstFeatureBtn = document.querySelector('.simple')
const secondFeatureBtn = document.querySelector('.searching')
const thirdFeatureBtn = document.querySelector('.sharing')
 
const firstDiv= document.querySelector('.one-click') 
const secondDiv= document.querySelector('.intelligent-search') 
const thirdDiv= document.querySelector('.share-bookmarks') 

firstFeatureBtn.addEventListener('click', ()=>{
    firstFeatureBtn.classList.add('active')
    secondFeatureBtn.classList.remove('active')
    thirdFeatureBtn.classList.remove('active')

    firstDiv.classList.remove('hidden')
    secondDiv.classList.add('hidden')
    thirdDiv.classList.add('hidden')
})

secondFeatureBtn.addEventListener('click', ()=>{
    firstFeatureBtn.classList.remove('active')
    secondFeatureBtn.classList.add('active')
    thirdFeatureBtn.classList.remove('active')

    firstDiv.classList.add('hidden')
    secondDiv.classList.remove('hidden')
    thirdDiv.classList.add('hidden')
})

thirdFeatureBtn.addEventListener('click', ()=>{
    firstFeatureBtn.classList.remove('active')
    secondFeatureBtn.classList.remove('active')
    thirdFeatureBtn.classList.add('active')

    firstDiv.classList.add('hidden')
    secondDiv.classList.add('hidden')
    thirdDiv.classList.remove('hidden')
})

firstFeatureBtn.click();

const allQuestions = document.querySelectorAll('.question')
const allAnswers = document.querySelectorAll('.answer')

allQuestions.forEach((questions, index) =>{
    questions.addEventListener('click', ()=>{
        /*allQuestions.forEach(ques => ques.classList.remove('selected'));*/
        questions.classList.toggle('selected');

        allAnswers[index].classList.toggle('hidden');
        // Close other open answers if needed (optional)
        allQuestions.forEach((otherQuestion, otherIndex) => {
            if (otherQuestion !== questions && otherQuestion.classList.contains('selected')) {
                otherQuestion.classList.remove('selected');
                allAnswers[otherIndex].classList.add('hidden');
            }
        });
    })
})


const form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
    if(!form.checkValidity()){
        e.preventDefault()
    }
    form.classList.add ('was-validated')
})



console.log()