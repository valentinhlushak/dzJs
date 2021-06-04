// события
// №2

// let array = [];
// function del() {
//     array.pop()    
// }
// let element=function() {
//     let div = document.createElement('div');
//     div.prepend('вставляем текст');
//     array.push(div);  
// }
// console.log(array);


// DOM

// №3

// <input type="button" onclick="countRabbits()" value="Считать кроликов!"></input>
// function showMessage(text, color, top, left) {
//   let div = document.createElement('div');
//   div.innerHTML = text;
//   div.style.background = color;
//   div.style.top = top;
//   div.style.left = left;
//   div.style.position = 'fixed';
//   document.body.prepend(div)
// }
// showMessage("hello", "green", "30px", "40px");
// showMessage("app", "grey", "100px", "200px");


// №4


// let ul = document.createElement('ul');
// let arrayNumber = [];
// document.body.append(ul);
// while (true) {
//   let asc = prompt('Введите число!');
//   if (asc === '') {
//     break;
//   }
//   arrayNumber.push(+asc);
//   let li = document.createElement('li');
//   let sum = 0;

//   for (let i = 0; i < arrayNumber.length; i++) {
//     const element = arrayNumber[i];
//     sum += element;
//   }
//   li.innerHTML = sum;
//   ul.append(li);
// }

// дополнительные задания
// №1
// function hide() {
//     hd.hidden = true;
// }

// №2
// function cancel(event) {
//     event.preventDefault();
//     alert('переход по умолчанию отменен');
// };

// способ-2
// function canc() {
//     alert('переход не выполнен')
// };

// №3

// function link() {
//     let clone = document.getElementById('clone');
//     let a = clone.cloneNode(true);
//     clone.appendChild(a);
// }

// №4

// function click() {
//     let img1=document.getElementById('img1');
//     let b= img1.cloneNode(true);
//     img1.appendChild(b);
// }

 