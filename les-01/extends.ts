//********************* type继承*************************** */
type A = {a: string, b: number}
type B = {c: string, d?: string}
type C = {e: number}

type D = A & B & C
const m: D = {a: '111', b: 111, c: '1111', e: 111}

//********************* extends 接口继承*************************** */
interface A1 {
    name: string,
}
interface B1 {
    sex: string
}

interface C1 extends A1, B1 {
    age: number
}

const n: C1 = {
    age: 111,
    name: '1111',
    sex: '女'
}


//********************* 类型兼容性 *************************** */
// 子类型更加具体，父类型更加宽泛
interface Animal {
    age: number
}
interface Dog extends Animal {
    break: () => void;
}
let a: Animal; // 父类
let b: Dog; // 子类
a = b; // 子类可以赋值给父类
//b = a; // 父类不可以赋值给子类

type A2 = 1 | 2 | 3
type B2 = 1 | 2
let a2: A2;
let b2: B2;
// a2 = b2;
// b2 = a2; false

// 协变（父子关系构成的新类型依然有父子关系）
interface Animal {
    age: number
}
interface Dog extends Animal {
    break: () => void;
}

let eg1: Animal;
let eg2: Dog
eg1 = eg2;

let eg3: Array<Animal>;
let eg4: Array<Dog>
eg3 = eg4

// 逆变（父子关系构成新类型导致父子关系颠倒）
interface Animal {
    age: number
}
interface Dog extends Animal {
    break: () => void;
}

let eg5: Animal;
let eg6: Dog
eg5 = eg6;

type AninmalFn = (arg: Animal) => void
type DogFn = (arg: Dog) => void
let eg7: AninmalFn;
let eg8: DogFn
eg8 = eg7