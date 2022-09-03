    

export function handleClickNav(burguer, list, li) {

    list.classList.toggle('active')
    
    li.childNodes.forEach((link, index) => {
        link.style.animation ? (link.style.animation = '') : (link.style.animation = `fade 0.7s ease forwards ${index / 7 + 0.3}s`)
    })
    

    burguer.classList.toggle('active')

}