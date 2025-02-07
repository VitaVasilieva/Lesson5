// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const student = {
//   name: "Jake",
//   specialty: "Economy",
//   GPA: 8.9,
//   missedClasses: 3,
//   info: function () {
//     console.group("Info");
//     console.log(`My name is ${this.name}`);
//     console.log(`My specialty ${this.specialty}`);
//     console.log(`My GPA ${this.GPA}`);
//     console.log(`My missed classes ${this.missedClasses} absenteeism`);
//     console.groupEnd();
//   },
// };
// // student.info();

// const student2 = {
//   name: "Michael",
//   specialty: "Financier",
//   GPA: 10.2,
//   missedClasses: 0,
// };
// student.info.bind(student2)();
// student.info.call(student2);
// student.info.apply(student2);

// const student3 = {
//   name: "Jon",
//   specialty: "Biology",
//   GPA: 7.0,
//   missedClasses: 15,
// };
// student.info.bind(student3)();
// student.info.call(student3);
// student.info.apply(student3);

// const student4 = {
//   name: "Meri",
//   specialty: "Economy",
//   GPA: 11.0,
//   missedClasses: 1,
// };
// student.info.bind(student4)();
// student.info.call(student4);
// student.info.apply(student4);

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// function btnHtml() {
//   alert("Мова розмітки для веб-сторінок");
// }

// document.querySelector("#button-html").addEventListener("click", btnHtml);

// function btnCss() {
//   console.log("Мова стилів для веб-сторінок");
// }
// document.querySelector("#button-css").addEventListener("click", btnCss);

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4

// const shop = {
//   productNane: "productNane",
//   price: "price",
//   count: "count",
//   info: function () {
//     console.log(`Фрукт ${this.productNane}`);
//     console.log(`Ціна товару ${this.price} грн`);
//   },
// };
// const fruit = {
//   productNane: "banana",
//   price: 30,
//   count: 4.5,
// };

// const fruit2 = {
//   productNane: "cherry",
//   price: 58,
//   count: 1.3,
// };

// const fruit3 = {
//   productNane: "apple",
//   price: 89,
//   count: 3.4,
// };
// shop.info.bind(fruit3)();
// shop.info.bind(fruit)();
