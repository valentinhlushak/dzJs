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


//Домашка объекты, функции, время


// (10)зд3:

// let circle = {
//     radius: 20,
//     color: 'red',
//     calculateCircumference() {
//     let pi = 3.14;
//     let lengthCircle = 2 * pi * this.radius;
//         console.log(lengthCircle);
//     }
// }
// circle.calculateCircumference();


// дз(10)зд4;

// let message = {
//     text:"" ,
//     getMessage(argument) {
//         this.text = argument;
//     },
//     showMessage() {
//         alert(this.text)
//     }
// }
// message.getMessage("fghj");
// message.showMessage();


// Дз(10) №5


// let rectangle = {
//     height: 230,
//     width: 430,
//     getArea() {
//         return this.height*this.width
//     }

// }
// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.getArea());

// let obj = {
//     name:"ivan"
// }
// function isEmpty(obj) {
//     if (Object.keys(obj).length > 0) {
//         return false;

//     } else {
//         return true;
//     }
// }
// console.log(isEmpty(obj));

// Дз(10)№6


// let obj = {
//     name:"ivan"
// }
// function isEmpty(obj) {
//     if (Object.keys(obj).length > 0) {
//         return false;

//     } else {
//         return true;
//     }
// }
// console.log(isEmpty(obj));

// Дз(10 продолжение) №5
// let arr = ['Tony', 'Stark', 1, 45, 2, 5, 34, 9, 11];
// let [nameTony, nameStark, ...number] = arr;
// console.log(nameTony);
// console.log(nameStark);

// function arraySum(number) {
//   let sum = 0;
//   for (let i = 0; i < number.length; i++) {
//     sum += number[i];
//   }
//   console.log(sum);
// }
// arraySum(number);


// дз(11)ЗАДАЧА

// var date1 = new Date('6/10/2009');
// var date2 = new Date('5/09/2016');
// var data3 = parseInt(date2 - date1);

// alert(data3);


// задание (12)№1

// function printMessage(hello, name) {
//     alert(hello +","+name);
// }
// setInterval(printMessage, 2000, "Ну здравствуй", "Петя");

// или так:

// let printMessage= setInterval(() => alert("Привет"+","+"Peter"), 1500);

// задание (12)№2

// function timer() {
//     alert('Прошло 5 секунд');
// }
// setTimeout(timer,5000)

// задание (12)№3

// function printNumber(from, to) {
//     for (let i = from; i <= to; i++){
//         alert(i)
//     }
// }
// printNumber(2, 5);

// 2-й вариант:

// function printNumbers(from, to) {
//   let current = from;

//   let timerId = setInterval(function () {
//     alert(current);
//     if (current == to) {
//       clearInterval(timerId);
//     }
//     current++;
//   }, 1000);
// }

// printNumbers(2, 10);

// задание (12)№4

// let btn = document.createElement('button');
// btn.id = 'loading';
// btn.innerHTML = 'начать загрузку';
// document.body.append(btn);
// console.log(btn);

// btn.addEventListener('click', func);
// function func() {
//   btn.innerHTML = 'идет загрузка';
//   btn.disabled = true;

//   setTimeout(() => {
//     btn.innerHTML = 'начать загрузку';
//     btn.disabled = false;
//   }, 5000);
// }
 
