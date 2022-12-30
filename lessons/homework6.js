// console.log('test')
let name = document.querySelector('#name')
let pressure = document.querySelector('.pressure')
let description = document.querySelector('.desc')
let humidity = document.querySelector('.humidity')
let speed = document.querySelector('.speed')
let temp = document.querySelector('.temp')
let deg = document.querySelector('.deg')
let icon = document.querySelector('.icon')
let input = document.querySelector('.input_text')
let button = document.querySelector('.button')


button.addEventListener('click', function(name){
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=metric&APPID=5d066958a60d315387d9492393935c19')
  .then(response => response.json())
  .then(value => {
    console.log(value)
    let tempData = value.main.temp
    temp.innerHTML='Temperature: '+ tempData

    let pressData = value.main.pressure
    pressure.innerHTML='Pressure: '+ pressData

    let descrData = value['weather'][0]['description']
    description.innerHTML='Description: '+ descrData

    let humData = value.main.humidity
    humidity.innerHTML='Humidity: '+ humData

    let speedData = value.wind.speed
    speed.innerHTML='Speed: '+ speedData

    let degData = value.wind.deg
    deg.innerHTML='Deg: '+ degData

    let img = document.createElement("IMG");
    img.setAttribute('src', 'http://openweathermap.org/img/w/10d.png' ) 
    icon.appendChild(img)
  })
  .catch(e => console.log( 'catch', e))
})

