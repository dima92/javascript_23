// var a = 5
// let b = 10
// const c = 13
// console.log(a)
// console.log(b)
// console.log(c)
// a = 8
// b = 41
// c = 30
// console.log(a)
// console.log(b)
// console.log(c)

// const a = 100;
// a = 20;
// console.log(a);
//
// console.log(a)
// let a = 15;
// console.log(a);
//
// console.log(a);
// var a;
// a = 10;
// console.log(a)

// const products = () => {
//   const productName = 'телефон LG';
//   const productPrice = 500;
//   const productQuantity = 3;
//   let resultCost = productPrice * productQuantity;
//
//   console.log(`Вы купили ${productName} (${productQuantity} шт.) по ${productPrice} ₽. Всего было потрачено: ${resultCost} ₽`)
// }
//
// products()

// console.log(typeof 'Hello');
// console.log(typeof 10);
// console.log(typeof {});
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof true);
// console.log(typeof []);
// console.log(typeof (() => {
// }));

// console.log(10 == 10);
// console.log(10 != 10);
// console.log(12 == 'Привет');
// console.log(10 < 11);
// console.log(12 > 20);
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false || true);
// console.log(true || false);
// console.log(true || true);
// console.log(10 <= 10);
// console.log(18 <= 20);
// console.log(50 >= 50);
// console.log(51 >= 50);
// console.log({} === {})
// console.log({} == {})

// let a, b;
// a = 2
// b = 3
// console.log(a > b)

// let a = 41
// if (a % 2 === 0) {
//   console.log('Четное')
// } else {
//   console.log('Нечетное')
//   a++
//   console.log(a)
// }

// const Digits = () => {
//   for (let i = 0; i < 1000; i++) {
//     if ((i % 2 !== 0) || (i % 12 === 0)) {
//       console.log(i);
//     }
//   }
// }
//
// Digits()

// const arr = [1, 10, 15, -100, -23, 19, 15032]
// console.table(arr)
// const newArr = arr.map(el => ((el * 25 / 100) + el))
// console.table(newArr)

// function sayHello(name) {
//   if (name) return console.log(`Hello, ${name}!`)
//   return console.log('Hello, someone!')
// }

// const sayHello = (name) => {
//   if (name) return console.log(`Hello, ${name}!`)
//   return console.log('Hello, someone!')
// }
//
// sayHello('Dmitry')

// function calc(a, b, operation) {
//   switch (operation) {
//     case '+':
//       return a + b;
//       break;
//     case '-':
//       return a - b;
//       break;
//     case '*':
//       return a * b;
//       break;
//     case '/':
//       return a / b;
//       break;
//     default:
//       break;
//   }
// }
//
// console.log(calc(1, 2, '+')); // 3
// console.log(calc(1, 2, '-')); // -1
// console.log(calc(2, 2, '*')); // 4
// console.log(calc(4, 2, '/')); // 2

// let age = 30
// let category = age >= 18 ? 'Взрослый' : 'Детский'
//
// console.log(age)
// console.log(category)

// let a = 7
// let b = 10
// let c = a > b ? a : b
// console.log(c)

// const john = {
//   name: 'John',
//   age: 30,
//   pet: 'Barsik'
// }
//
// const ann = {
//   name: 'Ann',
//   age: 28,
//   pet: 'Murka'
// }
//
// const people = (obj) => {
//   console.log(`Меня зовут ${obj.name}, мне ${obj.age}, у меня есть питомец ${obj.pet}`)
// }
//
// people(john)
//
// const incrementAge = (obj) => {
//   console.log(obj.age + 1)
// }
//
// incrementAge(ann)
//
// console.table(Object.entries(john));

// function sum(array) {
//   let total = 0;
//   for (let i = 0; i < array.length; i++) {
//     total += array[i]
//   }
//   console.log(total)
// }
//
// const arr = [1, 50, 20, 75, 90];
//
// sum(arr); // 236

// const names = []
// names.push('Dmitry', 'Alex', 'Petr', 'Margarita', 'Angelika')
// console.log(names)
// names.splice(0, 1)
// names.splice(names.length - 1, 1)
// console.log(names)

// const container = document.querySelector('#names')
//
// const names = ['Bob', 'Klar', 'Petya', 'Ilya', 'Viktoriya'];
//
// function render() {
//   for (let i = 0; i < names.length; i++) {
//     container.insertAdjacentHTML('beforeend', toHTML(names[i]))
//   }
// }
//
// render()
//
// function toHTML(name) {
//   return `<li>${name}</li>`
// }

// const obj = {
//   age: 22,
//   favColor: 'red',
//   height: 188,
//   pet: 'dog',
//   money: 12300
// };
//
// const {age, favColor, height, pet, money} = obj
//
// console.log(age)
// console.log(favColor)
// console.log(height)
// console.log(pet)
// console.log(money)

// const obj = {
//   age: 22,
//   favColor: 'red',
//   height: 188,
//   pet: 'dog',
//   money: 12300
// };
//
// const updateObj = {
//   age: 23,
//   favColor: 'blue',
//   money: 11450
// };
//
// const obj2 = Object.assign(obj, updateObj)
//
// console.log(obj2);

// const isPrimeNumber = num => {
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false
//   }
//   return num > 1
// }
//
// console.log(isPrimeNumber(23));

// function func(num, min, max) {
//   if (num < min) {
//     return min ** 2
//   } else if (num > max) {
//     return max ** 2
//   } else if (num < max - (max - min) / 2) {
//     return num ** 2
//   } else {
//     return Math.floor(num)
//   }
// }
//
// console.log(func(3, 1, 10)); // 9
// console.log(func(15, 1, 10)); // 100
// console.log(func(5, 1, 10)); // 25
// console.log(func(8.5, 1, 10)); // 8

// function isPerfectNumber(number) {
//   let temp = 0;
//   for (let i = 1; i <= number / 2; i++) {
//     if (number % i === 0) {
//       temp += i;
//     }
//   }
//
//   if (temp === number && temp !== 0) {
//     console.log("It is a perfect number.");
//   } else {
//     console.log("It is not a perfect number.");
//   }
// }
//
// console.log(isPerfectNumber(6));   // true
// console.log(isPerfectNumber(28));  // true
// console.log(isPerfectNumber(12));  // false
// console.log(isPerfectNumber(16));  // false

// function getNumberDigit(number, digitPosition) {
//   if (digitPosition < 0) {
//     return undefined;
//   }
//
//   let remainder = Math.abs(number);
//   let count = 0;
//
//   while (remainder >= 1) {
//     if (count === digitPosition) {
//       return remainder % 10;
//     }
//
//     remainder = Math.floor(remainder / 10);
//     count++;
//   }
//
//   return undefined;
// }
//
// console.log(getNumberDigit(123, 0)); // 1
// console.log(getNumberDigit(123, 1)); // 2
// console.log(getNumberDigit(123, 2)); // 3
// console.log(getNumberDigit(1, 2)); // undefined

// const article = document.querySelector('article')
//
// const car = {
//   name: 'Hendai Solaris',
//   type: 'sedan',
//   maxSpeed: '320',
//   color: 'red',
// }
//
// const render = () => {
//  const arr =  Array.from(car)
//   console.log(...arr)
//   for (let i = 0; i < arr.length; i++) {
//     article.insertAdjacentHTML('beforeend', toHTML(arr[i]))
//   }
// }
//
// render()
//
// function toHTML(car) {
//   return `
//      <div>
//         <h2>${car.name}</h2>
//         <span>${car.type}</span>
//     </div>
//     <div>
//         <span>Maximum speed:</span>
//         <span>${car.maxSpeed}</span>
//     </div>
//     <div>
//         <span>Color:</span>
//         <span>${car.color}</span>
//     </div>
//   `
// }

// const sentence = "Hello, how are you?";
//
// const countWords = (str) => {
//   return str.split(' ').length
// }
//
// console.log(countWords(sentence)); // 4

// const fullName = "John Doe";
//
// const getInitials = name =>
//   name
//     .split(' ')
//     .map(el => `${el.slice(0, 1).toUpperCase()}.`)
//     .join('')
//
// const initials = getInitials(fullName);
// console.log(initials); // "J. D."

// const generateGoogleString = (times = 0) => `G${'o'.repeat(Math.max(2, times))}gle`
//
// console.log(generateGoogleString(4));
// console.log(generateGoogleString(0));
// console.log(generateGoogleString(-2));

// const str = "Hello, Привет!";
//
// const countVowels = (s) => {
//   const vowel_list = 'aeiouAEIOUауеоиАУЕОИ'
//   let vcount = 0
//
//   for (let i = 0; i < s.length; i++) {
//     if (vowel_list.indexOf(s[i]) !== -1) {
//       vcount++
//     }
//   }
//   return vcount
// }
//
// console.log(countVowels(str)); // 4

// const sumNumbers = (...args) => {
//   let result = 0;
//   for (let i = 0; i <= args.length; i++) {
//     result += i
//   }
//   return result;
// }
//
// const result1 = sumNumbers(1, 2, 3, 4, 5);
// console.log(result1); // 15
//
// const result2 = sumNumbers(10, 20, 30);
// console.log(result2); // 60

// const findMaxValue = (arr) => {
//   if (arr.length === 0) return undefined;
//   return Math.max.apply(null, arr)
// }
//
// const numbers1 = [1, 2, 3, 4, 5];
// const max1 = findMaxValue(numbers1);
// console.log(max1); // 5
//
// const numbers2 = [10, 20, 5, 30, 15];
// const max2 = findMaxValue(numbers2);
// console.log(max2); // 30
//
// const emptyArray = [];
// const maxEmpty = findMaxValue(emptyArray);
// console.log(maxEmpty); // undefined

// const calculateAverage = (arr) => {
//   if (arr.length === 0) return 0
//
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
//   }
//   return sum / arr.length
// }
//
// const numbers1 = [1, 2, 3, 4, 5];
// console.log(calculateAverage(numbers1)); // 3
//
// const numbers2 = [10, 20, 30, 40, 50];
// console.log(calculateAverage(numbers2)); // 30
//
// const emptyArray = [];
// console.log(calculateAverage(emptyArray)); // 0

// const isPalindrome = (str) => {
//   return str.split('').reverse().join('') === str
// }
//
// console.log(isPalindrome('level')); // true
// console.log(isPalindrome('radar')); // true
// console.log(isPalindrome('hello')); // false

// const removeDuplicates = (arr) => {
//   return [...new Set(arr)]
// }
//
// const numbers1 = [1, 2, 3, 3, 4, 5, 5];
// console.log(removeDuplicates(numbers1));  // [1, 2, 3, 4, 5]
//
// const numbers2 = [10, 20, 30, 30, 40, 40, 50];
// console.log(removeDuplicates(numbers2));  // [10, 20, 30, 40, 50]
//
// const emptyArray = [];
// console.log(removeDuplicates(emptyArray));  // []

// function createCounter(value) {
//   const inc = () => value++;
//   const dec = () => value--;
//   const get = () => value;
//
//   return { inc, dec, get };
// }
//
// const { inc, dec, get } = createCounter(5);
// console.log(get()); // 5
// inc();
// inc();
// inc();
// dec();
// console.log(get()); // 7

// const calculateAge = (birthDay) => {
//   const date = new Date().getDate()
//   const month = new Date().getMonth()
//   const year = new Date().getFullYear()
//   const today = new Date(year, month, date)
//   return today.getFullYear() - birthDay.getFullYear()
// }
//
// const birthDate = new Date('1990-05-20');
// const age = calculateAge(birthDate);
//
// console.log(age);

// const getDateDifference = (first, second) => {
//   let x = new Date(first)
//   let y = new Date(second)
//   return Math.floor((x - y) / (1000 * 60 * 60 * 24))
// }
//
// const date1 = new Date('2027-06-01');
// const date2 = new Date('2027-06-10');
// const difference = getDateDifference(date1, date2);
// console.log(difference);

// const getTimeUntilDate = (date) => {
//   const now = new Date()
//   const day = now.getDay()
//   const hour = now.getHours()
//   const minute = now.getMinutes()
//   const second = now.getSeconds()
//
//   return {
//     days: date.getDay() - day,
//     hours: date.getHours() - hour,
//     minutes: date.getMinutes() - minute,
//     secons: date.getSeconds() - second
//   }
// }
//
// const targetDate = new Date('2027-12-31T23:59:59');
// const timeUntilTargetDate = getTimeUntilDate(targetDate);
// console.log(timeUntilTargetDate);
//  { days: 100, hours: 20, minutes: 45, seconds: 31 }

// const isWeekend = (date) => {
//   const now = new Date(date)
//
//   return now.getDay() === 6 || now.getDay() === 0;
// }
//
// const date1 = new Date('2027-07-10');  // Суббота
// const date2 = new Date('2027-07-12');  // Понедельник
//
// console.log(isWeekend(date1));  // true
// console.log(isWeekend(date2));  // false

// const isLeapYear = (year) => {
//   let years = new Date(year)
//   const diff = years % 4
//   return years - diff === year;
// }
//
// console.log(isLeapYear(2023)); // false
// console.log(isLeapYear(2024)); // true

// const getLastDayOfMonth = (year, month) => {
//   let date = new Date(year, month + 1, 0)
//   return date.getDate()
// }
//
// // июнь 2027
// console.log(getLastDayOfMonth(2027, 5)); // 30
//
// // февраль 2027
// console.log(getLastDayOfMonth(2027, 1)); // 28
//
// // январь 2027
// console.log(getLastDayOfMonth(2027, 0)); // 31

// class Circle {
//
//   radius
//
//   constructor(radius) {
//     this.radius = radius
//   }
//
//   getArea() {
//     return (Math.PI * this.radius * this.radius).toFixed(2)
//   }
// }
//
// const circle = new Circle(5);
// console.log(circle.getArea()); // "78.54"

// class Product {
//   name
//   price
//
//   constructor(name, price) {
//     this.name = name
//     this.price = price
//   }
//
//   priceWithDiscount(discount) {
//     return this.price - ((this.price * discount) / 100)
//   }
// }
//
// const product = new Product("Phone", 1000);
// console.log(product.priceWithDiscount(10)); // 900
// console.log(product.priceWithDiscount(20)); // 800

// class Person {
//   friends = []
//
//   addFriend(friend) {
//     this.friends.push(friend)
//   }
//
//   showFriends() {
//     console.log(this.friends.join(','));
//   }
// }
//
// const person = new Person();
// person.addFriend("Иван");
// person.addFriend("Сергей");
// person.addFriend("Игорь");
// person.showFriends(); // Иван, Сергей, Игорь

// class Animal {
//   name
//   favoriteFood
//
//   constructor(name, favoriteFood) {
//     this.name = name
//     this.favoriteFood = favoriteFood
//   }
//
//   makeSound() {
//   }
//
//   sayName() {
//     console.log(`My name is ${this.name}`);
//   }
//
//   sayInfo() {
//     console.log(`${this.name}\'s\ favorite food is ${this.favoriteFood}`);
//   }
// }
//
// class Dog extends Animal {
//   constructor(name, favoriteFood) {
//     super(name, favoriteFood);
//   }
//
//   makeSound() {
//     super.makeSound();
//     console.log('Gav!')
//   }
// }
//
// class Cat extends Animal {
//   constructor(name, favoriteFood) {
//     super(name, favoriteFood);
//   }
//
//   makeSound() {
//     super.makeSound();
//     console.log('Meow')
//   }
// }
//
// const dog = new Dog('Rex', 'Meat');
// const cat = new Cat('Barsik', 'Fish');
//
// cat.makeSound(); // Meow
// dog.makeSound(); // Gav!
//
// dog.sayName(); // My name is Rex
// cat.sayName(); // My name is Barsik
//
// dog.sayInfo(); // Rex's favorite food is Meat
// cat.sayInfo(); // Barsik's favorite food is Fish

// foo = {
//   a: 5,
//
//   function bar () {
//   console.log(this.a)
// },
//
//   baz = () => console.log(this.a)
// }
//
// foo.bar()
// foo.baz()

// const boxFactory = {
//   type: 'box',
//   count: 0,
//   produce() {
//     this.count++;
//     return 'Box №' + this.count;
//   }
// }
//
// const produceBox = (produceFn) => {
//   const boxName = produceFn();
//   console.log(boxName);
// }
//
// for (let i = 0; i < 25; i++) {
//   produceBox(boxFactory.produce.bind(boxFactory));
// }

// console.log('a');
// new Promise((resolve, reject) => {
//   console.log('b');
//   setTimeout(() => {
//     console.log('c');
//     resolve();
//   }, 0);
// })
//   .then(() => console.log('d'));
//
// console.log('e');
// setTimeout(() => console.log('f'), 0);
// console.log('g');

// const url = 'https://jsonplaceholder.typicode.com/todos'

// fetch(url)
//   .then(response => response.json())
//   .then(tasks => {
//     const ul = document.createElement("ul");
//     tasks.forEach(task => {
//       const li = document.createElement('li');
//       li.textContent = task.title;
//       ul.appendChild(li);
//     });
//     document.body.appendChild(ul)
//   })
//   .catch(error => console.error(error))

// function sumWithDelay(delay, a, b) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(a + b)
//       reject('Что-то пошло не так. Повторите попытку')
//     }, delay)
//   })
// }
//
// async function start() {
//   const result = await sumWithDelay(1000, 5, 5);
//   console.log(result);
// }
//
// start();

// const USERS = [
//   {id: '001', name: "Алексей", age: 25},
//   {id: '002', name: "Иван", age: 28},
//   {id: '003', name: "Егор", age: 30},
// ];
//
// function fetchUser(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const user = USERS.find(user => user.id === id)
//       if (user) {
//         resolve(user)
//       } else {
//         reject(new Error('User not found'))
//       }
//     }, 2500)
//   })
// }
//
//
// async function start() {
//   const result = await fetchUser('001');
//   console.log(result); // { id: '001', name: "Алексей", age: 25 }
// }
//
// start();

// const list = document.querySelector('#list')
// const filter = document.querySelector('#filter')
// let USERS = []
//
// filter.addEventListener('input', (event) => {
//   const value = event.target.value.toLowerCase()
//   const filteredUsers = USERS.filter((user) =>
//     user.name.toLowerCase().includes(value)
//   )
//   render(filteredUsers)
// })
//
// async function start() {
//   list.innerHTML = 'Loading...'
//   try {
//     const resp = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await resp.json()
//     setTimeout(() => {
//       USERS = data
//       render(data)
//     }, 2000)
//   } catch (err) {
//     list.style.color = 'red'
//     list.innerHTML = err.message
//   }
// }
//
// function render(users = []) {
//   if (users.length === 0) {
//     list.innerHTML = 'No matched users!'
//   } else {
//     list.innerHTML = users.map(toHTML).join('')
//   }
// }
//
// function toHTML(user) {
//   return `
//     <li class="list-group-item">${user.name}</li>
//   `
// }
//
// start()
