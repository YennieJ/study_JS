//1. Object to JSON
//stringify(obj)

let json = JSON.stringify(["apple", "banana"]);
console.log(json);

const person = {
  name: "yennie",
  age: null,
  mbti: "isfj",
  Bday: new Date(),
  intro: () => {
    console.log(`Hello ${name}`);
  },
};

json = JSON.stringify(person);
console.log(json);

json = JSON.stringify(person, ["name"]);
console.log(json);

json = JSON.stringify(person, (key, value) => {
  console.log(`key:${key},value:${value}`);
  return value;
});

json = JSON.stringify(person, (key, value) => {
  console.log(`key:${key},value:${value}`);
  return key === "mbti" ? "infp" : value;
});

console.log(json);

//2. JSON to Object
//parse(json)

console.clear();

const obj = JSON.parse(json);
console.log(json);
