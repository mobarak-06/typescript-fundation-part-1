let myString: string = "Hello World";
let myNumber: number = 49354;
let myBoolean: boolean = true;
let mySymbol: symbol = Symbol();
let myBigInt: bigint = 1000n;

const addTwo = (a: number, b: number) => {
  return a + b;
};

// console.log(addTwo(150, 50));

// array  and tuple an readonly modifier

// const olterStr: Array<string>  = ["Hello", "world 2"]

const arr: string[] = ["hello", "world"];
const numberStr: number[] = [10, 12, 24];

// tuple

const dhakaLarLong: readonly [number, number] = [1239402, 934894];

// optional, default,  rest  parameters(...args)

const concatName = (firstName: string, lastName?: string) => {
  if (!lastName) {
    return firstName;
  }
  return firstName + " " + lastName;
};

console.log(concatName("mobarak"));
console.log(concatName("mobarak", "hossain"));

const greetings = (fullName: string, greeting = "hello") => {
  console.log(greeting + " " + fullName);
};

greetings("mobarak");

const sum = (...numbers: number[]) => {
  return numbers.reduce((total, sum) => total + sum, 0);
};

sum(1, 2, 3, 4, 5, 6);

const logUserAction = (
  ...args: [name: string, age: number, isActive: boolean]
) => {
  const [name, age] = args;
  console.log(name + "is" + age);
};

logUserAction("mobarak", 100, false);

// object type, type alias and interface

// type alias

type Address = {
  streetName: string;
  holdingNumber: string
}



type User = {
  name: string;
  age: number;
  isActive: boolean;
  action: () => void;
  badges: string[];
};

// interface
interface IUser {
  name: string;
  age: number;
  isActive: boolean;
  action: () => void;
  badges: string[];
  address: Address
}

const user: IUser = {
  name: "mobarak",
  age: 100,
  isActive: true,
  action: () => console.log("hello"),
  badges: ["abc", "def"],
  address: {
    streetName: "jani na",
    holdingNumber: "123"
  }
};
