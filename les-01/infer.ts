//************ infer *********************** */
// 获取param类型
type Paramtype<T> = T extends (arg: infer P) => any ? P : T;
type Returntype<T> = T extends (...arg: any[]) => infer P ? P : T;

type User = {
    name: string;
    age: number
}

type Func1<T> = (user: T) => void
type Func2<T> = () => T

type A1 = Paramtype<Func1<User>>
type A2 = Paramtype<string>

type A3 = Returntype<Func2<User>>
type A4 = Returntype<string>


//************ 转换 *********************** */
interface Action<T> {
    payload?: T;
    type: string;
}
interface Module {
    count: number;
    message: string;
    asyncMethod<T, U>(input: Promise<T>): Promise<Action<U>>;
    syncMethod<T, U>(action: Action<T>) : Action<U>;
}
// =>
type Result = {
    asyncMethod<T, U>(input: T): Action<U>;
    syncMethod<T, U>(action: T): Action<U>; 
}

type Funcname<T> = {[P in keyof T]: T[P] extends Function ? P : never}[keyof T]
type Connect = (module: Module) => {[T in Funcname<Module>]: Module[T]}