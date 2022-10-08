// переписать код ниже с использованием конструкции switch…case
let numOrStr = prompt('input number or string');

switch(isNaN(numOrStr)|| numOrStr){
    case null:
        console.log('вы отменили')
        break;
    case  '':
        console.log('Empty String');
        break;
     case true:
        console.log(' number is Ba_NaN')
        break;
    default:
        console.log('OK!')
} 

// ...................................................................................

// task2 -loops

// Вывести на страницу в одну строку через запятую числа от 10 до 20
let str =''
for(let i=10; i<=20; i++){
    str += `, ${i}` 
} 
str = str.substring(1);
console.log(str)


//  Вывести квадраты чисел от 10 до 20
for(let i=10; i<=20; i++){
    let b = i*i;
    console.log(b)
} 

// Вывести таблицу умножения на 7
let a =7;
for(let k=1; k<=10; k++){
    let result = a*k
    console.log(result)
}

// Найти сумму всех целых чисел от 1 до 15
let r = 0;
for(let i=1; i<=15; i++){
    r+=i
}
console.log(`${r} - сумма всех целых чисел от 1 до 15`)

// Найти произведение всех целых чисел от 15 до 35
let mult =1;
for(let i =15; i<=35; i++){
    mult = mult*i;
}
console.log(`${mult} - произведение всех целых чисел от 15 до 35`)

// Найти среднее арифметическое всех целых чисел от 1 до 500
let average=0;
for(let i=1; i<=500; i++){
    average+=i
}
console.log(`${average/500} - среднее арифметическое всех целых чисел от 1 до 500`)

// Вывести сумму только четных чисел в диапазоне от 30 до 80
let s=0
for(let i=30; i<=80; i++){
    if(i%2==0){
        s+=i
    }
}
console.log(`${s} - суммa только четных чисел в диапазоне от 30 до 80 `)

// Вывести все числа в диапазоне от 100 до 200 кратные 3
for(let i =100; i<=200; i++){
    if(i%3==0){
        console.log(i)
    }
}

// Дано натуральное число. Найти и вывести на страницу все его делители.
// Определить количество его четных делителей
// Найти сумму его четных делителей
let count=0;
let sum=0;
let res =' ';
let num =+prompt('Input your number: ');
for(let i=0; i<=num; i++){
    if(num%i ==0){
        res += i+' '
        if(i%2==0){
            count++
            sum+=i
        }
}
}
console.log(`${res} - делители числа ${num}`)
console.log(`${count} - количество четных делителей`)
console.log(`${sum} - сумма четных делителей `)

// Напечатать полную таблицу умножения от 1 до 10
let result='\n '
for(let i=1; i<=10; i++){
    for (let j=1; j<=10; j++){
         result += (i*j)+ ' '
    } 
    result += '\n'
} 
console.log(result)

// ...................................................................

// task3 - loops2

// Bывести числа от 20 до 30 через пробел, используя шаг 0,5 (20 20,5 21 21,5….)
let strNumb= ' '
for(let i=20; i<=30; i=i+0.5){
   strNumb+=i+' '
}
console.log(strNumb)

// Один доллар стоит 27 гривен. Вывести данные с расчетом стоимости 10, 20, 30... 100 долларов
let currency =27;
for(let i=10; i<=100; i=i+10){
    let grn = currency*i
    console.log(`${i}$ = ${grn}грн`)
}

// Дано целое число. Вывести все целые числа от 1 до 100, квадрат которых не превышает числа N
let yourNum =+prompt('Input your number: ')
for(let i=1; i<=100; i++){
    let sqwr = i*i;
     if(sqwr<yourNum){
        console.log(i)
    }
}

// Дано целое число. Выяснить, является ли оно простым
let value = +prompt('Input your number: ')
for(let i=2;i<value;i++){
    if (value % i == 0){
        console.log('число не простое')
   }
}


// Дано некоторое число. Определить, можно ли получить это число путем возведения числа 3 в некоторую степень
let item = +prompt('Input your number: ')
for(let i=0; i<item; i++){
    if(Math.pow(3,i)==item){
        console.log(`${item} можно получить возведя в степень число 3`)
    }
}

