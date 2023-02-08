



//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
document.write('exersize 1')
  let text = ['hello', 'world', 'help','user', 'tree', 'war', 'peace',' money', 'man', 'woman',];
for (let i = 0; i < text.length; i++) {
  const textElement = text[i];
  document.write(`<div>
    <h1>${textElement}</h1>
  </div>`);

}
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
document.write('exersize 2')
let users=[{name:'vasya'},{name:'stas'},{name:'oleg'},{name:'taras'},{name:'olga'},{name:'misha'},{name: 'igor'},{name: 'anna'},
  {name: 'lena'},{name: 'nina'},]
for (let i = 0; i < users.length; i++) {
  const user = users[i];
  document.write(`<div><h1>${user.name}</h1></div>`);
}
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
document.write('exersize 3')
let text1=['bmw','audi','alfa romeo','lexus','mercedes','ferrari','bugatti','opel','aston martin','honda', 'suzuki','toyota','subaru',
'nissan','mazda', 'skoda', 'volkswagen', 'ford','tesla','jeep',]
let i=0;
while (i<text1.length){let t=text1[i];
document.write(`<h1>${t}</h1>`);
i++;}
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
document.write('exersize 4')
let users1=[{name:'vasya'},{name:'stas'},{name:'oleg'},{name:'taras'},{name:'olga'},{name:'misha'},{name: 'igor'},{name: 'anna'},
  {name: 'lena'},{name: 'nina'},{name: 'filon'},{name: 'max'},{name: 'lina'},{name: 'rikki'},{name: 'rossi'},{name:
'tetiana'},{name: 'marta'},{name: 'kirk'},{name: 'tobi'},{name: 'leo'},{name: 'melisa'},]

let o=0;
while (o<users1.length){let u=users1[o];
  document.write(`<h1>${u.name}</h1>`);
  o++;}

//- Використовуючи данні з масиву, за допомоги document.write та циклу
//побудувати структуру по шаблону
//Масив:
document.write('exersize 5')
  let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

//ШАБЛОН:
 // <ul>
  //  <li>ITEM OF ARRAY</li>
//    <!--
//        і тд інші об'єкти масиву
//         ...
//         ...
//         ...
 //   -->
 // </ul>

//замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

for (const listOfItem of listOfItems)
{
  document.write(`<ul>`);

    document.write(`<li>${listOfItem}</li>`);
    document.write(`</ul>`);



}

//Використовуючи данні з масиву, за допомоги document.write та циклу
//побудувати структуру по шаблону  Зробити адекватну стилізацію
//Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
document.write('exersize 6')
let products = [
  {
    title: 'milk',
    price: 22,
    image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
  },
  {
    title: 'juice',
    price: 27,
    image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
  },
  {
    title: 'tomato',
    price: 47,
    image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
  },
  {
    title: 'tea',
    price: 15,
    image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
  },
];

//ШАБЛОН
//<div class="product-card">
//  <h3 class="product-title">TITLE. Price - PRICE</h3>
//<img src="IMAGE" alt="" class="product-image">
//</div>
//Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

document.write(`<div class='main-div'>`);
  for (const product of products) {
    document.write(`<div class='card'>
     <h2> ${product.title}</h2>
     <p> ${product.price} Kč</p>
     <img src="${product.image}" alt="${product.image}">

    </div>`)}

document.write(`<div>`)
//є масив
let users3 = [
  {name: 'vasya', age: 31, status: false},
  {name: 'petya', age: 30, status: true},
  {name: 'kolya', age: 29, status: true},
  {name: 'olya', age: 28, status: false},
  {name: 'max', age: 30, status: true},
  {name: 'anya', age: 31, status: false},
  {name: 'oleg', age: 28, status: false},
  {name: 'andrey', age: 29, status: true},
  {name: 'masha', age: 30, status: true},
  {name: 'olya', age: 31, status: false},
  {name: 'max', age: 31, status: true}
];
//за допомоги циклу вивести:
//  - користувачів зі статусом true
//- користувачів зі статусом false
//- користувачів які старші за 30 років
console.log(true)
for (const user of users3) {
  if (user.status){
    console.log(user);
  }

};
console.log(false)
for (const user of users3) {
  if (!user.status) {
    console.log(user);
  }
};
console.log('>30')
for (const user of users3) {
  if (user. age>30) {
    console.log(user)
  }
}










