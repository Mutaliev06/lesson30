//Получить узел `html`
console.log(document.documentElement);
// Пользуясь узлом `document.body` получить узлы `<b>` и `<i>`.
let b = document.body.firstElementChild.firstElementChild.firstElementChild;
console.log(b);
let i = document.body.firstElementChild.lastElementChild.firstElementChild;
console.log(i);
// Поменять цвет текста  `<b>` на красный, а  `<i>` на коричневый.
b.style.color = 'red';
i.style.color = 'brown';
// Получить текстовый узел  ‘интукод’ находящийся внутри тега `<title>`, и поменять его на 'intocode’.
let text = document.head.firstElementChild.firstChild;
text.data = 'intocode';
console.log(text);
/* Изменить содержимое `<li>` с текстом 
    - ‘lorem’ на ‘html’
    - ‘Ex!’ на ‘css’
    - ‘Animi’ на ‘git’
    - 'Doloremque’ на ‘js’
    */
let li = document.getElementById('list');
li.firstElementChild.firstChild.data = 'html';
li.firstElementChild.nextElementSibling.firstChild.data = 'css';
li.lastElementChild.previousElementSibling.firstChild.data = 'git';
li.lastElementChild.firstChild.data = 'js';

/* Для узла `<ul>` 
    - изменить фоновый цвет
    - убрать маркеры
    - убрать `margin` и `padding`
    - Увеличить размер шрифта
    */
let ul = document.getElementById('list');
ul.style.backgroundColor = 'green';
ul.style.listStyleType = 'none';
ul.style.margin = 0;
ul.style.padding = 0;
ul.style.fontSize = 24;
console.log(ul);