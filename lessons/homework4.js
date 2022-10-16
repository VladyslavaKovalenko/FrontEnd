// task1 - Создать массив, длину и элементы которого задаёт пользователь..............
// Отсортировать массив по возрастанию.
// Удалить элементы из массива с 2 по 4 (включительно!).

let lengthArr = +prompt('Input the length of your array: ')
const arr = []

for(let i=0; i<lengthArr; i++){
    arr[i] = +prompt('Input your array: ')
}
console.log(arr)
console.log(arr.sort())
let removed = arr.splice(1,3)
delete removed
console.log(arr)

// task2.............................................................................

const array =  [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

let count =0;
let countNeg = 0;

let countOddPos=0
let countEvenPos=0

let sum=0
let sumOdd=0;
let sumEven = 0;

let mult=1

let maxValue = Math.max(...array)
console.log(`${maxValue} - максимальный елемент массива
${array.indexOf(maxValue)} - индекс максимального элемента`)

let minValue = Math.min(...array)
console.log(`${minValue} - минимальный елемент массива
${array.indexOf(minValue)} - индекс минимального элемента`)

for (let i=0; i<array.length;i++){
    if(array[i]>0){
        count++
        sum +=array[i]
    } else if(array[i]<0){
        countNeg++
    } 
    if(array[i]%2!==0 && array[i]>0){
        countOddPos++
        sumOdd+=array[i]
    } else if(array[i]%2==0 && array[i]>0){
        countEvenPos++
        sumEven+=array[i]
    }
    if(array[i]>0){
        mult *=array[i]
    }
    if(array[i]<maxValue){
       array[i] = 0
    }
    
} 
console.log(`${count} - количество положительных чисел в массиве,
${sum} - сумма положительных чисел 
${countNeg} - количество отрицательных чисел в массиве
${countOddPos} - количество нечетных положительных элементов в массиве
${countEvenPos} - количество четных положительных элементов в массиве
${sumOdd} - сумма нечетных положительных чисел
${sumEven} - сумма четных положительных чисел
${mult} - произведение положительных чисел`)
console.log(array)

// task3.......................................................................
// Дан массив объектов. Вывести массив телефонных номеров пользователей,
//  у которых баланс более 2000 долларов. И найти сумму всех балансов пользователей

let users = [
    {
    "index": 0,
    "isActive": true,
    "balance": "$2,226.60",
    "name": "Eugenia Sawyer",
    "gender": "female",
    "phone": "+1 (840) 583-3207",
    "address": "949 John Street, Rose, Puerto Rico, 1857"
    },
    {
    "index": 1,
    "isActive": true,
    "balance": "$2,613.77",
    "name": "Pauline Gallegos",
    "gender": "female",
    "phone": "+1 (985) 593-3328",
    "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
    },
    {
    "index": 2,
    "isActive": false,
    "balance": "$3,976.41",
    "name": "Middleton Chaney",
    "gender": "male",
    "phone": "+1 (995) 591-2478",
    "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
    },
    {
    "index": 3,
    "isActive": true,
    "balance": "$1,934.58",
    "name": "Burns Poole",
    "gender": "male",
    "phone": "+1 (885) 559-3422",
    "address": "730 Seba Avenue, Osage, Alabama, 6290"
    },
    {
    "index": 4,
    "isActive": true,
    "balance": "$3,261.65",
    "name": "Mcfadden Horne",
    "gender": "male",
    "phone": "+1 (942) 565-3988",
    "address": "120 Scholes Street, Kirk, Michigan, 1018"
    },
    {
    "index": 5,
    "isActive": false,
    "balance": "$1,790.56",
    "name": "Suzette Lewis",
    "gender": "female",
    "phone": "+1 (837) 586-3283",
    "address": "314 Dunne Place, Bawcomville, Guam, 9053"
    }
    ]

let arrayOfPhone=[]
let sumOfBalance=0

for(let i=0; i<users.length; i++){
    let balance = users[i].balance.slice(1, users[i].balance.length).split(',').join('')
    let numOfBalance = Number(balance)

    if(numOfBalance>2000){
    arrayOfPhone.push(users[i].phone)    
    }
    sumOfBalance+=numOfBalance
}

console.log(arrayOfPhone)
console.log(`${sumOfBalance} - сумма всех балансов пользователей`)

// task4......................................................................................

// Реализуйте функцию removeElement(array, item), чтобы удалить элемент item из массива array.
const num = [1, 2, 3, 4, 5, 6, 7];

function removeElement(arr, elem){
    arr=array
    let indexEl = arr.indexOf(elem)
    if(indexEl!==-1){
        let newArr=arr.splice(indexEl, 1)
        return newArr
    } else{
        console.log('Такого значения в массиве нет')
    }
}

removeElement(num, 3);
console.log(num);

// task4...........................................................
// Дан массив с элементами разных типов. Создать функцию которая высчитывает среднее арифметическое только числовых элементов данного массива.

let myArr = [12, 'ddd', 4, true, 'dd', 20]
function average(array){
   
    let sum=0;
    let count=0;

    for(let i=0; i<array.length; i++){
        if(typeof(array[i])=="number"){
            sum+=array[i]
            count++
        }
    }
    let averValue= sum/count
    return averValue
}
console.log(average(myArr))

// Написать функцию doMath(x, znak, y), которая получает 3 аргумента: числа x и y, строку znak. В переменной znak может быть: +, -, *, /, %, ^ (степень).
let x = +prompt('Input x: ')
let znak = prompt('Input znak: ')
let y = +prompt('Input y: ')

function doZnak(x, znak, y){
    
   switch (znak){
        case '+':
            let sum = x+y
            alert(sum)
            break
        case '-':
            let min = x-y
           alert (min)
            break
        case '*':
            let mult = x*y
            alert (mult)
            break
        case '/':
            let div = x/y
            alert (div)
            break
        case '%':
            let divRem = x%y
            alert (divRem)
            break
        case '^':
            let sqw = Math.pow(x, y)
            alert (sqw)
            break
        default:
            alert('Неправильная математическая операция')
    }
}

doZnak(x, znak, y)

// Написать функцию заполнения пользовательскими данными двумерного массива
function fillArray(){
    let arr = [];
    let arrLength = +prompt("Введите количество массивов в массиве: ");

    for(let i = 0; i < arrLength; i++) {
        arr[i] = []
        let lengthEl = +prompt("Введите длинну внутреннего массива: ")
        for(let j=0; j<lengthEl; j++){
            let elem = prompt("Введите елементы внутреннего массива: ")
            arr[i].push(elem)
        }
    }
    console.log(arr);
}
fillArray()

// Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом
function removeSymb(str, arr){
   for(let i=0; i<arr.length; i++){
        if(str.includes(arr[i])){
            str = str.split(arr[i]).join('')
        }
   }
    console.log(str)  
}
removeSymb('hello world', ['l', 'd'])














