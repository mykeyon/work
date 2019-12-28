接口：
    TypeScript的核心原则之一是对所具有的结构进行类型检查。它有时被称作"鸭式辩型法"或"结构性子类型化"。在Typescript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义锲约。
        interface LabelledValue{
            label: string;
        }
        function printLabel(labelledObj: LabelledValue){
            console.log(labelledObject.label);
        }
        let myObj = { size: 10, label: "Size 10 object" };
        printLabel(myObj);
可选属性
    接口里的属性不全都是必要属性。
        interface SquareConfig{
            color?: string;
            width?: number;
        }
        function createSquare(config: SquareConfig):{color: string; area: number}{
            let newSquare = { color: "white", area: 100 };
            if(config.color){
                newSquare.color = config.color;
            }
            if(config.width){
                newSquare.area = config.width * config.width;
            }
            return newSquare;
        }
        let mySquare = createSquare({ color: "black" });
    带有可选属性的接口和普通接口差不多，只是在可选属性名字定义的后面加一个？符号。
    可选属性的好处是：
        1.可以对可能存在的属性进行预定义
        2.可以捕获引用了不存在的属性时的错误。
只读属性
    一些对象只能在对象刚刚创建的时候修改其值，可以在属性名前用readonly来指定只读属性：
        interface Point{
            readonly x: number;
            readonly y: number;
        }
    可以通过赋值一个对象字面量构造一个Point。赋值后，x和y再也不能被改变了。
        let p1: Point = { x: 10, y: 20 };
        p1.x = 5;  //error!
    TypeScript具有ReadonlyArray<T>类型，它与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改：
        let a: number[] = [1, 2, 3, 4];
        let ro: ReadonlyArray<number> = a;
        ro[0] = 12; //errror!
---------------注意： 即使把ReadonlyArray赋值给一个普通数组也是不可以的，但是可以用断言-------------
        a = ro as number[];

    readonly VS const
        最简单的判断改用readonly还是const的方法是看要把它作为变量还是作为一个属性。
        作为变量使用的话用const，若作为属性则使用readonly

额外的属性检查
    interface SquareCOnfig{
        color?: string;
        width?: number;
        [propName: string]: any;
    }
函数类型
    interface SearchFunc{
        (source: string, subString: string): boolean;
    }
    let mySearch: SearchFunc;
    mySearch = function(source: string, subString: string){
        let result = source.search(subString);
        return result > -1;
    }
    对于函数类型的类型检查来说，函数的参数名不需要与接口定义的名字相匹配，比如用下面的代码重写上面的例子：
    let mySearch: SearchFunc;
    mySearch = function(src: string, sub: string): boolean{
        let result = src.search(sub);
        return result > -1;
    }
    函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的。如果不想指定类型，Typescript的类型系统会推断出参数类型，因为函数直接赋值给了SearchFunc类型变量。函数的返回值类型是通过其返回值推断出来的(此例是false和true)。如果让这个函数返回数字或字符串，类型检测器会警告我们函数的返回值类型与SearchFunc接口中的定义不匹配。
    let mySearch: SearchFunc;
    mySearch = function(src, sub){
        let result = src.search(sub);
        return result > -1;
    }
可索引的类型
    interface StringArray{
        [index: number]: string;
    }
    let myArray: StringArray;
    myArray = ["Bob", "Fred"];
    let myStr: string = myArray[0];
    TypeScript支持两种索引标签：字符串和数字。可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类。

类类型
    实现接口
        与C#或Java里接口的基本作用一样，TypeScript也能够用它来明确的强制一个类去符合某种锲约。
        interface ClockIterface{
            currentTime: Date;
        }
        class Clock implements ClockIterface{
            currentTime: Date;
            constructor(h: number, m: number){ }
        }
        也可以再接口中描述一个方法，再类里实现它，如同下面的setTime方法一样
        interface ClockInterface{
            currentTime: Date;
            setTime(d: Date);
        }
        class Clock implements ClockInterface{
            currentTime: Date;
            setTime(d: Date){
                this.currentTime = d;
            }
            constructor(h: number, m: number){ }
        }
        接口描述了类的公共部分，而不是公共和私有两部分。它不会检查类是否具有某些私有成员。
        类静态部分与实例部分的区别：
    继承接口
        和类一样，接口也可以相互继承。
        interface Shape{
            color: string;
        }
        interface Square extends Shape{
            sideLength: number;
        }
        let square = <Square>{};
            square.color = "blue";
            square.sideLength = 10;
        一个接口可以继承多个接口，创建出多个接口的合成接口。
            interface Shape{
                color: string;
            }
            interface PenStroke{
                penWidth: number;
            }
            interface Square extends Shape, PenStroke{
                sideLength: number;
            }
            let square = <Square>{};
                square.color = "blue";
                square.sideLength = 10;
                square.penWidth = 5.0;
    混合类型
        interface Counter{
            (start: number): string;
            interval: number;
            reset(): void;
        }
        function getCounter(): Counter{
            let counter = <Counter>function(start: number){ };
            counter.interval = 123;
            counter.reset = function(){ };
            return counter;
        }
        let c = getCounter();
        c(10);
        c.reset();
        c.interval = 5.0;

    接口继承类
    
