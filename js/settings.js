// ===============settings-page========
const dropdown = document.querySelector('.dropdown')
const dropList = document.querySelectorAll('.timezone ul')
const listItems = document.querySelectorAll('.timezone li')

dropdown.addEventListener('click', () => {
    dropList.forEach(item => {
        item.classList.toggle('active')
        listItems.forEach(listItem => {
            listItem.addEventListener('click', () => {
                item.classList.remove('active')
            })
        })
    })
})