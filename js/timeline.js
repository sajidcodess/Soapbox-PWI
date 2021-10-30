// ================Timeline-page===========
const showHistories = document.querySelectorAll('.post-history p')


showHistories.forEach(item => {
    item.addEventListener('click', (e) => {
        if(!e.target.classList.contains('active')) {
            e.target.classList.add('active')
        } else {
            e.target.classList.remove('active')
        }
    })
})