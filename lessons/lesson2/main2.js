//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let mas=[1, 2, false, 'oleg', true, 140, [23, 56], 'sasha', 'anna', 'vasya'];
console.log(mas [0]);
console.log(mas[1]);
console.log(mas[2]);
console.log(mas[3]);
console.log(mas[4]);
console.log(mas[5]);
console.log(mas[6]);
console.log(mas[7]);
console.log(mas[8]);
console.log(mas[9]);
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1= { title: 'The man', pageCount: 120, genre: 'detectiv',}
let book2= { title: 'If you tell', pageCount: 143, genre: 'deectiv',}
let book3= { title: 'Saved', pageCount: 189, genre:'historical',}
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4= { title: 'Cannot hurt me', pageCount:156, genre: 'memories', authors: [ name='Jon Meachen', age=27,]}
let book5= { title: 'Spare', pageCount:236, genre: 'memories', authors: [ name='Prince Harry', age=35,]}
let book6= { title: 'Hopeless', pageCount:321, genre: 'romance', authors: [ name='Colleen Hoover', age= 29,]}
//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let mas2=[ user1={name:'lena', age:45,'password':7854}, user2={name:'vasya', age:32,'password':9302},
  user3={name:'kolya',age:25,'password':7409}, user4={name:'anna',age:31,'password':2087}, user5={name:'ihor',age:23,'password':1298},
  user6={name:'nina',age:24,'password':7648}, user7={name:'tanya',age:21,'password':9993},user8={name:'borys',age:33,'password':6654},
  user9={name:'ivan',age:26,'password':3309}, user10={name:'anton',age:24,'password':5656,}]
console.log(user1.password)
console.log(user2.password)
console.log(user3.password)
console.log(user4.password)
console.log(user5.password)
console.log(user6.password)
console.log(user7.password)
console.log(user8.password)
console.log(user9.password)
console.log(user10.password)
//Логічні розгалуження:
//  - Є змінна х, якій ви надаєте довільне числове значення.
 // Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a=1
if (a!=0) {console.log(true);}else{console.log(false)}
a=0
if (a!=0) {console.log(true);}else{console.log(false)}
a=-3
if (a!=0) {console.log(true);}else{console.log(false)}
//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).
let time=47
  if (0<time&&time<=15){console.log('1 quarte')}
  if (15<time&&time<=30){console.log('2 quarte')}
  if (30<time&time<=45){console.log('3 quarte')}
  if (45<time&time<=59){console.log('4 quarte')}
//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day=23
if (0<day&&day<=10){console.log('1 decada')}
if (10<day&&day<=20){console.log('2 decada')}
if (20<day&&day<=30){console.log('3 decada')}
//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let c = '6';
switch (c){
  case'1':
    console.log('monday');
    break;
  case '2':
    console.log('tuersday');
    break;
  case'3':
    console.log('Wednesday');
    break;
  case'4':
    console.log('Thursday');
    break;
  case'5':
    console.log('Friday');
    break;
  case'6':
    console.log('Saturday');
    break;
  case'7':
    console.log('Sunday');
    break;
}
//- Користувач вводить або має два числа.
 // Потрібно знайти та вивести максимальне число з тих двох .
 // Також потрібно врахувати коли введені рівні числа.
let d,e
d=prompt('введіть число: ')
e=prompt('введіть друге число: ')
if (d>e&&d!=e){console.log(d +' більше')}
if (d<e&&d!=e){console.log(e +' більше')}
//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x=undefined;
x=x||'default'
console.log(x);
//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}
]
let monthDuration=7
if (monthDuration>5){console.log('Super')}

