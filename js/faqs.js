// ==================faqs-page================
const questions = document.querySelectorAll('.question')
 console.log(questions)

questions.forEach(question => {
    question.addEventListener('click', (e) => {
        console.log(e.target)
        if(!e.target.classList.contains('active')) {
            e.target.classList.add('active')
        } else {
            e.target.classList.remove('active')
        }
    })
})