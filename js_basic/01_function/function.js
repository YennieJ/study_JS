function User(name, age) {
  //this={}

  this.name = name;
  this.age = age;
  this.sayName = function () {
    console.log(this.name);
  };

  //return this
}

const user1 = new User("yen", 29);
const user2 = new User("jin", 32);
const user3 = new User("leah", 32);
const user4 = new User("julie", 30);

user1.sayName();
console.log(user3.age);

//혼자 해보기
function fruits(name, price) {
  this.name = name;
  this.price = price;
  this.showPrice = function () {
    console.log(`가격은 ${price}입니다`);
  };
}

const fruit1 = new fruits("바나나", 100);
const fruit2 = new fruits("사과", 500);
const fruit3 = new fruits("키위", 1000);

fruit1.showPrice();
fruit2.showPrice();
fruit3.showPrice();
