// Имеется текстовое поле на странице. При фокусировке на этом поле сбоку появляется <div> с информацией. При пропаже фокуса - <div> так же пропадает
const form = document.getElementById('focus')
const text = document.getElementById('text')

form.addEventListener('mouseover', function(){
    text.innerHTML = 'This is field';
})
form.addEventListener('mouseout', function(){
    text.innerHTML = '';
})


// В папке images есть изображения 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. Вывести изображение из этой папки полученное случайным образом (Math.random)
window.onload = function(){
    const img = Math.floor(Math.random() * 9)
 document.querySelector('img').src = 'images/' + img + '.jpg'
}

// Вывести таблицу 10 × 10, заполненную числами от 1 до 100 (таблица создаётся динамически)
const table = document.createElement("table");
const tbBody = document.createElement("tbody");

function createTable() {
    for (let x = 0; x < 10; x++) {
        const row = document.createElement("tr");
      for (let y = 0; y < 10; y++) {
        const cell = document.createElement("td");
        let text = document.createTextNode((x + 10 * y) + 1);
        cell.appendChild(text);
        row.appendChild(cell);
      }
      tbBody.appendChild(row);
    }
    table.appendChild(tbBody);
    document.body.appendChild(table);
    table.setAttribute("border", "1");
  }
createTable()