# https://www.tslang.cn/docs/handbook/basic-types.html
一、基础类型
    布尔值
        let isDone: boolean = false;
    数字
        和JavaScript一样，TypeScript里的所有数字都是浮点数。除了支持十进制和十六进制，还支持二进制和八进制
        let decLiteral: number = 6; // literal常量 decimalism十进制
        let hexLiteral: number = 0xf00d; //hex 十六进制
        let binaryLiteral: number = 0b1010 //binary二进制
    字符串(可以使用模板字符串)
        let name: string = 'bob';
        name = "smith";
    数组(有两种方式可以定义数组)
        第一种：可以再元素类型后面接上[], 表示由此类型元素组成的一个数组：
            let list: number[] = [1, 2, 3];
        第二种：使用数组泛型，Array<元素类型>
            let list: Array<number> = [1, 2, 3];
    元组Tuple
        元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
        let x:[string, number];
        x = ['hello', 10]
    枚举
        enum类型是对JavaScript标准数据类型的一个补充。
            enum Color {Red, Green, Blue}
            let c: Color = Color.Green;
        默认情况，从0开始为元素编号。也可以手动的指定成员的数值。
            enum Color{ Red = 1, Green, Blue }
            let c: Color = Color.Green;
    Any
        let notSure: any = 4;
        notSure = "maybe a string instead";
        noSure = false;
        当只知道一部分数据的类型时，any类型也是有用的。
            let list: any[] = [1, true, "free"];
            list[100] = 100;
    Void
        某种程度上来说，void类型像时与any类型相反，它表示没有任何类型。当一个函数没有返回值时，通常会见到其返回值类型是void：
            function warnUser(): void{
                console.log("This is my warning message");
            }
        声明一个void类型的变量没什么作用，因为只能赋值undefined和null
    Null和Undefined
        默认情况下null和undefined是所有类型的子类型。
        然而，当指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。也许在某处像传入一个string或null或undefined，可以使用联合类型string | null | undefined.

----------   注意：尽量使用--strictNullChecks   ----------
    Never
        never类型表示是那些永不存在值的类型。例如，never类型是那些总是会抛出异常或者根本就不会有返回值的函数表达式或箭头函数的返回值类型；变量也可能是never类型，当她们被永不为真的类型保护所约束时。
        never类型是任何类型的子类，也可以赋值给任何类型；然而，没有类型是never的子类或者可以赋值给never类型(除了never本身之外)。即使any也不可以赋值给never。
        下面是一些返回never类型的函数：
            //返回never的函数必须存放在无法达到的终点
            function error(message: string): never{
                throw new Error(message);
            }
            //推断返回值类型为never
            function fail(){
                return error("Something failed");
            }
            //返回never的函数必须存在无法达到的终点
            function infiniteLoop(): never{
                while(true){

                }
            }
    Object
        object表示非原始类型，也就是除了number, string, boolean, symbol, null或undefined之外的类型。
        使用object类型，就可以更好的表示像Object.create这样的API
            declare function create(o: object | null): void;
            create({ prop: 0 });
            create(null);
    类型断言(类型断言有两种形式)
        其一："尖括号"语法：
            let someValue: any = "this is a string";
            let strLength: number = (<string>someValue).length;
        另一种：as语法：
            let someValue: any = "this is a string";
            let strLength: number = (someValue as string).length;
------------ 注意： 在TypeScript里使用JSX时，只有as语法断言时被允许的 --------------------

变量声明：
    块级作用域的特点：
        1.不能在生明前读写。(在统一作用域下，直到声明之前的作用域都属于 暂时性死区)
        2.不能在同一作用域下重复声明一个变量。
        
