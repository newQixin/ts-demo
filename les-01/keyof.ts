// interface Eg1 {
//     name: string;
//     readonly age: number;
// }
// // T1的类型实则是name | age
// type T1 = keyof Eg1

// class Eg2 {
//     private name: string;
//     public readonly age: number;
//     protected home: string;
// }
// // T2实则被约束为 age
// // 而name和home不是公有属性，所以不能被keyof获取到
// type T2 = keyof Eg2
// const data1: T1 = 'age' || 'name'
// const data2: T2 = 'age'


//*****************  1.迭代对象类型    ************************************** */
// fasle
// function props(obj: object, key: string) {
//     return obj[key]
// }
// true
function props<T extends object, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}
type Todo = {
    id: number;
    text: string;
    done: boolean
}

const todo = {
    id: 1,
    text: "Learn TypeScript keyof",
    done: false
  }

const id = props(todo, 'id');
console.log(id);
// 报错
// const date = props(todo, 'dat3')



//*****************  2.迭代对象数值类型    ************************************** */
enum Currency  {
    CNY = 6,
    EUR = 8,
    USD =  10 
}

const CurrencuNum = {
    [Currency.CNY]: '人名币',
    [Currency.EUR]: '欧元',
    [Currency.USD]: '美元'
}

console.log(CurrencuNum[Currency.CNY])

function getCurrencyNum<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}
console.log(getCurrencyNum(CurrencuNum, Currency.CNY))


//*****************  2.keyof vs typeof    ************************************** */
const Colors = {
    red: 'red',
    blue: 'blue'
}

type Color = keyof typeof Colors
let color1: Color = 'red' // true
let color2: Color = 'yellow' // false
