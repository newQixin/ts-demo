//*********** partial 属性可选******************* */
interface User {
    age: number;
    name: string;
    data: string;
}

// type User1 = Partial<User>
// 实现
type Partial1<T> = {
    [P in keyof T]?: T[P] 
}
type User1 = Partial1<User>

// 控制部分类型可选
type Partial2<T, K extends keyof T> = {
    [P in K]?: T[P]
}
type User2 = Partial2<User, 'age' | 'name' >


//*********** Readonly 只读******************* */
// type  User3 = Readonly<User>

type Readonly1<T> = {
    readonly [P in keyof T]: T[P]
}
type  User3 = Readonly1<User>


//*********** Pick 选择一组属性组成新的类型******************* */
// type User4 = Pick<User, 'name' | 'age'>

type Pick1<T, K extends keyof T> = {
    [P in K]: T[P]
}
type User4 = Pick1<User, 'name' | 'age'>


//*********** Record 构造一个type，key为联合类型中的每个子类型，类型为T ******************* */
/**
 * @example
 * type Eg1 = {
 *   a: { key1: string; };
 *   b: { key1: string; };
 * }
 * @desc 就是遍历第一个参数'a' | 'b'的每个子类型，然后将值设置为第二参数
 */
type Eg1 = Record<'a' | 'b', {key1: string}>