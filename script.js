const box1 = document.querySelector('.box-1')
const box2 = document.querySelector('.box-2')
const box3 = document.querySelector('.box-3')
const box4 = document.querySelector('.box-4')
const box5 = document.querySelector('.box-5')
const box6 = document.querySelector('.box-6')
const box7 = document.querySelector('.box-7')
const box8 = document.querySelector('.box-8')
const box9 = document.querySelector('.box-9')
const box10 = document.querySelector('.box-10')
const box11 = document.querySelector('.box-11')
const fullMenu = document.querySelector('.full-menu-img')

const boxDescription1 = document.querySelector('.box-description-1' )
const boxDescription2 = document.querySelector('.box-description-2' )
const boxDescription3 = document.querySelector('.box-description-3' )
const boxDescription4 = document.querySelector('.box-description-4' )
const boxDescription5 = document.querySelector('.box-description-5' )
const boxDescription6 = document.querySelector('.box-description-6' )
const boxDescription7 = document.querySelector('.box-description-7' )
const boxDescription8 = document.querySelector('.box-description-8' )
const boxDescription9 = document.querySelector('.box-description-9' )
const boxDescription10 = document.querySelector('.box-description-10' )
const boxDescription11 = document.querySelector('.box-description-11' )

box1.addEventListener('click', moveBox1 = () => {
    box1.classList.toggle('active')
    boxDescription1.classList.toggle('active-description')
})
box2.addEventListener('click', moveBox2 = () => {
    box2.classList.toggle('active')
    boxDescription2.classList.toggle('active-description')
})
box3.addEventListener('click', moveBox3 = () => {
    box3.classList.toggle('active')
    boxDescription3.classList.toggle('active-description')
})
box4.addEventListener('click', moveBox4 = () => {
    box4.classList.toggle('active')
    boxDescription4.classList.toggle('active-description')
})
box5.addEventListener('click', moveBox5 = () => {
    box5.classList.toggle('active')
    boxDescription5.classList.toggle('active-description')   
})
box6.addEventListener('click', moveBox6 = () => {
    box6.classList.toggle('active')
    boxDescription6.classList.toggle('active-description')  
})
box7.addEventListener('click', moveBox7 = () => {
    box7.classList.toggle('active')
    boxDescription7.classList.toggle('active-description')  
})
box8.addEventListener('click', moveBox8 = () => {
    box8.classList.toggle('active')
    boxDescription8.classList.toggle('active-description')  
})
box9.addEventListener('click', moveBox9 = () => {
    box9.classList.toggle('active')
    boxDescription9.classList.toggle('active-description')  
})
box10.addEventListener('click', moveBox10 = () => {
    box10.classList.toggle('active')
    boxDescription10.classList.toggle('active-description')  
})
box11.addEventListener('click', moveBox11 = () => {
    box11.classList.toggle('active')
    boxDescription11.classList.toggle('active-description')  
})
fullMenu.addEventListener('click', bigFullMenu = () => {
    fullMenu.classList.toggle('active-menu')
})