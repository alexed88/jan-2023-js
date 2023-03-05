//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id,name,surname,email,phone,){
  this.id=id
  this.name=name
  this.surname=surname
  this.email=email
  this.phone=phone

}
let User1=[]

let user1=new User(1,'vasya','hnatenko','1@gmail.com',556987658,)
user1=User1.push(user1)
let user2=new User(42,'anna', 'pylypko','2@gmail.com',888777999,)
user2=User1.push(user2)
let user3=new User(13,'ihor','dub','3@gmail.com',768978908,)
user3=User1.push(user3)
let user4=new User(4,'ivan','koval','4@gmail.com',765432109,)
user4=User1.push(user4)
let user5=new User(15,'kolya','pop','5@gmail.com',987654321,)
user5=User1.push(user5)
let user6=new User(6,'nina','lys','6@gmail.com',789456123,)
user6=User1.push(user6)
let user7=new User(71,'tanya','kol','7@gmail.com',768986545,)
user7=User1.push(user7)
let user8=new User(18,'vlad','honcar','8@gmail.com',753245790,)
user8=User1.push(user8)
let user9=new User(93,'yura','tur','9@gmail.com',999666554,)
user9=User1.push(user9)
let user10=new User(10,'fedir','sadko','10@gmail.com',876905439,)
user10=User1.push(user10)
console.log(User1)

// - Взяти масив з  let user2=new UserUser[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let users=User1.filter((User1)=>User1.id%2===0

)
console.log(users)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let users1=User1.sort((a, b)=>a.id-b.id)
console.log(users1)
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
  constructor(id,name,surname,email,phone,order) {
    this.id=id
    this.name=name
    this.surname=surname
    this.email=email
    this.phone=phone
    this.order=order

  }
}
let Client1=[]
let client1=new Client(1,'vasya','hnatenko','1@gmail.com',556987658,['morkva'])
client1= Client1.push(client1)
let client2=new Client(42,'anna', 'pylypko','2@gmail.com',888777999,['morkva','yabko'])
client2= Client1.push(client2)
let client3=new Client(13,'ihor','dub','3@gmail.com',768978908,['yabko'])
client3=Client1.push(client3)
let client4=new Client(4,'ivan','koval','4@gmail.com',765432109,['yabko','apelsyn','pomidor'])
client4=Client1.push(client4)
let client5=new Client(15,'kolya','pop','5@gmail.com',987654321,['yabko','apelsyn','pomidor','dynya','buryak'])
client5=Client1.push(client5)
let client6=new Client(6,'nina','lys','6@gmail.com',789456123,['pomidor'])
client6=Client1.push(client6)
let client7=new Client(71,'tanya','kol','7@gmail.com',768986545,['sik','malyna'])
client7=Client1.push(client7)
let client8=new Client(18,'vlad','honcar','8@gmail.com',753245790,['pomidor'])
client8=Client1.push(client8)
let client9=new Client(93,'yura','tur','9@gmail.com',999666554,['syr','sik','med'])
client9=Client1.push(client9)
let client10=new Client(10,'fedir','sadko','10@gmail.com',876905439,['apelsyn'])
client10=Client1.push(client10)
console.log(Client1)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
Client1.sort((a,b)=>a.order.length-b.order.length)
console.log(Client1)
//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model,mark,year,maxspeed,capacity)
{
  this.model = model;
  this.mark = mark;
  this.year = year;
  this.maxSpeed = maxspeed;
  this.capacity = capacity;

}
function drive() {
  console.log( `їдемо зі швидкістю ${this.maxSpeed} на годину`)
}
let car1=new Car('E 200 4MATIC Sport','Mercedes-Benz',2018,232,2,0)
console.log(car1)
drive()
function info(){
  for (const key in car1) {
    console.log(`${[key]}-${car1[key]}`)
  }
}
info()
function imaxSpeed (newSpeed){
  const speed=this.maxSpeed+=newSpeed
  if (speed<0){this.maxSpeed=0;}
  else {this.maxSpeed=speed;}

  console.log(newSpeed)
}
imaxSpeed(300)
function changeYear (newValue){
  this.year=newValue
  console.log(newValue)
}

changeYear(2021);

function addDriver (Driver){

  console.log(Driver)

}
function Driver (name,age) {
  this.name=name;
  this.age=age;


}

addDriver(new Driver('Anna',43))

//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car9{
  constructor (model,mark,year,maxspeed,capacity)
  {
    this.model = model;
    this.mark = mark;
    this.year = year;
    this.maxSpeed = maxspeed;
    this.capacity = capacity;

  }
  drive() {
    console.log( `їдемо зі швидкістю ${this.maxSpeed} на годину`)
  }}
let car11=new Car('E 200 4MATIC Sport','Mercedes-Benz',2018,232,2,0)
console.log(car1)
drive()
function info(){
  for (const key in car1) {
    console.log(`${[key]}-${car1[key]}`)
  }
}
info()
function imaxSpeed (newSpeed){
  const speed=this.maxSpeed+=newSpeed
  if (speed<0){this.maxSpeed=0;}
  else {this.maxSpeed=speed;}

  console.log(newSpeed)
}
imaxSpeed(300)
function changeYear (newValue){
  this.year=newValue
  console.log(newValue)
}

changeYear(2021);

function addDriver (Driver9){

  console.log(Driver9)

}
class  Driver9 {
  constructor(name,age) {
    this.name=name;
    this.age=age;
  }

}

addDriver(new Driver9('Anna',43))

//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//class Human{
 // constructor(name,age) {
    //this.name=name;
    //this.age=age;
  //}
//}
class Popelushka {
  constructor(name,age,footSize) {
    this.name=name;
    this.age=age;
    this.footSize=footSize
  }
}
class Prince{
  constructor(name, age, bootSize) {
    this.name=name;
    this.age=age;
    this.bootSize = bootSize
  }

  findPrincess(arr) {
    for (const item of arr) {
      if (item.footSize = this.bootSize) {
        return item
      }
    }
  }
}
const popeArr=[
  new Popelushka('Anna',18,34),
  new Popelushka('Nina',19,35),
  new Popelushka('Lana',20,36),
  new Popelushka('Ema',21,37),
  new Popelushka('Alma',22,38),
  new Popelushka('Etna',23,39),
  new Popelushka('Alina',24,40),
  new Popelushka('Ada',25,41),
  new Popelushka('Ira',26,42),
  new Popelushka('Inna',27,43),
]
const prince= new Prince('Richard',24,33)
console.log(prince.findPrincess(popeArr))
