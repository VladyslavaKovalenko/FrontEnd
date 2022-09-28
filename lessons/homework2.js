// task1 - math operation

let num1 =parseFloat(prompt('Input the first number: '))
let num2 =parseFloat(prompt('Input the second number: '))
alert(`${num1}+${num2} = ${num1+num2}
${num1}-${num2} = ${num1-num2}
${num1}*${num2} = ${num1*num2}
${num1}/${num2} = ${num1/num2}`)

// task2 - calculator
let operation = prompt('Input the math operetaion: ')
let firstNum = parseFloat(prompt('Input the first number: '))
let secondNum =parseFloat(prompt('Input the second number: '))
if (operation == 'add'){
    alert(`${firstNum+secondNum}`)
} else if( operation == 'sub'){
    alert(`${firstNum-secondNum}`)
} else if( operation == 'mult'){
    alert(`${firstNum*secondNum}`)
}else if( operation == 'div'){
    alert(`${firstNum/secondNum}`)
} else{
    alert('operation is not definied')
}

// task3 - from hours to seconds
let hours = parseFloat(prompt('Input the hours: '))
let sec = hours*3600
alert(`${sec}`)

// task4 - average
let a = parseFloat(prompt('Input the first number: '))
let b = parseFloat(prompt('Input the second number: '))
let c = parseFloat(prompt('Input the third number: '))
let average = (a+b+c)/3
alert(`${average}`)
