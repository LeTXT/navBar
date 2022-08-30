
export const handleClickNav = () => {
    const list = document.querySelector('.list')
    const li = document.querySelectorAll('li')
    const burguer = document.querySelector('.burguer')

    list.classList.toggle('active')
    
    li.forEach((link, index) => {
        link.style.animation ? (link.style.animation = '') : (link.style.animation = `fade 0.7s ease forwards ${index / 7 + 0.3}s`)
    })

    burguer.classList.toggle('active')

}