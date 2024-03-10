const hour=document.querySelector('.hour')
const minute=document.querySelector('.minute')
const seconds=document.querySelector('.seconds')

setInterval(()=>{
    const date=new Date()
    let gethour=date.getHours()
    let getminutes=date.getMinutes()
    let getSeconds=date.getSeconds()
    hour.style.transform=`rotate(${30*gethour + getminutes /2}deg)`
    minute.style.transform=`rotate(${6*getminutes}deg)`
    seconds.style.transform=`rotate(${getSeconds*6}deg)`
},1000)
