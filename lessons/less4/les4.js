





'exersize 1'
//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function area(a,b) {
     let res1=a*b
     console.log(res1);
     return res1;
}
     area(32,54)
     area(345,456)

'exersize 2'
//- створити функцію яка обчислює та повертає площу кола з радіусом r
function areas(r) {
  let res2=3.1415*r*r;
  console.log(res2)
  return res2;
}
      areas(5)
      areas(6)

'exersize 3'
//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function areat(h,r1) {
  let res3 = 3.1415 * r1 * r1 * h;
  console.log(res3)
  return res3;
}
 areat(10,5)

'exersize 4'
//- створити функцію яка приймає масив та виводить кожен його елемент
let user=['vasya',67,true, [5,7]];
function arrea(arr) {
  for (let i = 0; i < arr.length; i++) {
    const arrElement = arr[i];
    console.log(arrElement)
  }
}

arrea(user)

'exersize 5'
//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
function par(t1) {
  document.write(
    `<p>${t1}</p>`
  );

}
par(`lorem ipsum`)

'exersize 6'
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function str(ul1){
  document.write(`<ul>`)
  document.write(`<li>${ul1}</li>
                  <li>${ul1}</li>
                  <li>${ul1}</li>`)
  document.write(`</ul>`)
}
str('lorem ipsum')

'exersize 7'
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function str1(ul2){
  document.write(`<ul>`)
  for (let i = 0; i < 3; i++) {
    const ul2Element = ul2[i];
    document.write(`<li>${ul2}</li>`)

  }
  document.write(`</ul>`)}
str1('lop')

'exersize 8'
//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let user4=['vasya',67,true, [5,7],false,'kolya'];
let user3=['sanya',7,false,'anna','nina',54];
function arrea1(arr) {
  document.write(`<ul>`);
  for (const arrElement of arr) {
    document.write(`<li>${arrElement}</li>`)}
    document.write(`</ul>`);
}
arrea1(user3)
arrea1(user4)

'exersize 9'
//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let user5=[{name:'vasya', age:27 ,id:true},{name:'anna',age:43,id:false}]

function rem(arr1){
  for (const arr1Element of arr1)
      document.write(`<div>${arr1Element.name} ${arr1Element.age} ${arr1Element.id}</div>`)


}
rem(user5)

'exersize 10'
//- створити функцію яка повертає найменьше число з масиву
let num=[1,2,3,4,5,6,7,8,9,10]
function num1(arr2){
  for (const arr2Element of arr2)
    if (arr2Element<='min'){
      console.log(arr2Element)
    }
}

num1(num)

'exersize 11'
//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let ar=[1,6,8,9]
function rule(arr){
  let sum=0
  for (const item of arr) {
    sum=sum+item
  }
  console.log(sum)
  return sum;
}
rule(ar)

'exersize 12'
//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
//Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


function swap(arr,index1,index2){
  let a1=arr[index1];
  let a2=arr[index2];
  arr[index1]=a2;
  arr[index2]=a1;
  return arr
}
console.log(swap([23,65,9,5],0,3))


  'exersize13'
//- Написати функцію обміну валюти exchange(sumUAH,ncurrcyeValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH,ncurrcyeValues,excur){
  for (const item of ncurrcyeValues) {
    if ( item.currency===excur){
    return sumUAH/item.value;}
  }

  }
  console.log(exchange(10000,
  [{currency:'usd', value:40},
               {currency:'eur', value: 42}],'eur'))



