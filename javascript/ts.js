/**
 * 
 * https://juejin.cn/post/6844903749501059085
// type和interface的区别

都可以申明函数和对象的类型

可以相互extends

## type可以

type 可以声明基本类型别名，联合类型，元组等类型
type 语句中还可以使用 typeof 获取实例的 类型进行赋值

## interface可以合并
interface User {
  name: string
  age: number
}

interface User {
  sex: string
}

/*
User 接口为 {
  name: string
  age: number
  sex: string 
}

用interface描述**数据结构**，用type描述**类型关系**


*/

/**

interface User {
  name: String;
  age: Number;
}

interface SetUser {
  (name: string, age: number): void;
}

type User {
  name: String;
  age: Number;
}

type SetUser = (name: string, age: number)=> void;

interface Name {
  naem: String;
}

interface User extends Name {
  age: Number
}

type Name {
  name: String
}

type User = Name & { age: Number;}

type Sex {
  sex: String;
}

interface Sex {
  sex: String
}

interface User extends Sex {
  age: String
}

type User = Sex & { age: Number }


type age = Number;

type B = typeof 1;


type StringOrNumber = string | number;  
type Text = string | { text: string };  
type NameLookup = Dictionary<string, Person>;  
type Callback<T> = (data: T) => void;  
type Pair<T> = [T, T];  
type Coordinates = Pair<number>;  
type Tree<T> = T | { left: Tree<T>, right: Tree<T> };

 */
