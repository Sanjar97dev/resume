const h3 = document.querySelector('h3')
const inputs = document.querySelectorAll('input')
const jasooBtn = document.querySelector('.create')
const root = document.querySelector('#root')


jasooBtn.onclick= (e)=> {
    e.preventDefault()
    showInfo()
    if (inputs[0].value.trim() != '' && inputs[1].value.trim() !== '') {
        root.style.display='block'
    } else {
        root.style.display='none'
    }
}

function showInfo() {
   h3.innerHTML=`${inputs[0].value} ${inputs[1].value}`
   root.innerHTML=`
   <h2>Кесип: ${inputs[2].value}</h2>
   <h4>Тел: ${inputs[3].value}</h4>
   <img src='${inputs[4].value}'/>
   `
};