const name = 'Soultree',
  age = 23,
  gender = 'male';

const sayHi = (name: string, age: number, gender: string): string => {
  return `Hello ${name}, you are ${age}, you are ${gender}!`;
};

console.log(sayHi(name, age, gender));

export {};
