泛型
    泛型的Hello World
    function identity<T>(arg: T): T{
        return arg;
    }
    第一泛型后，有两种使用方式：
        1.传入所有的参数，包含参数类型参数：
            let output = identity<string>("myString");
            这里明确了指定了T时string类型，并作为一个参数传给函数，使用<>括号而不是()
        2.这种方法更普遍，利用类型推论
            let output = indentity("myString");
    使用泛型变量
        function loggingIdentity<T>(arg: T): T{
            console.log(arg.length);   //Error: T doesn't have .length
            return arg;
        }
        function loggingIdentity<T>(arg: T[]): T[]{
            console.log(arg.length);
            return arg;
        }
        可以这样理解loggingIdentity的类型：泛型函数loggingIdentity，接收类型参数时T和参数arg，它是个元素类型T的数组，并返回元素类型时T的数组。如果我们传入数字数组，将返回一个数字数组，因为此时T的类型时number。这可以让我们把泛型变量T当作类型的一部分使用，而不是整个泛型，增加了灵活性。
        也可以这样实现上面的例子：
        function loggingIdentity<T>(arg: Array<T>): Array<T>{
            console.log(arr.length);
            return arg;
        }
    泛型类型
        泛型函数的类型与非泛型函数的类型没有什么不同，只是有一个类型参数在最前面，像函数声明一样：
            function identity<T>(arg: T): T{
                return arg;
            }
            let myIdentity: <T>(arg: T) => T = identity;
        也可以使用不同泛型参数名，只要数量上和使用方式上能对应上久可以。
            function identity<T>(arg: T): T{
                return arg;
            }
            let myIdentity: <U>(arg: U) => U = identity;
        还可以使用带有标签名的对象字面量来定义泛型函数：
            function identity<T>(arg: T): T{
                return arg;
            }
            let myIdentity: { <T>(arg: T): T} = identity;
        这引导我们去写第一个泛型接口，把声明例子里的对象字面量拿来作为一个接口：
            interface GenericIdentityFn{
                <T>(arg: T): T;
            }
            function identity<T>(arg: T): T{
                return arg;
            }
            let myIdentity: GenericIdentityFn = identity;

泛型类
    泛型类看上去和泛型接口差不多，泛型类使用(<>)括起来泛型类型，跟在类名后面。
        class GenericNumber<T>{
            zeroValue: T;
            add: (x: T, y: T) =>;
        }
        let myGenericNumber = new GenericNumber<number>();
        myGenericNumber.zeroValue = 0;
        myGenericNumber.add = function(x, y){ return x + y };
    泛型约束：
        interface Lengthwise{
            length: number;
        }
        function loggingIdentity<T extends Lengthwise>(arg: T): T{
            console.log(arg.length);
            return arg;
        }
        现在这个类型被约束了，因此不在适合任意类型了：
        loggingIdentity(3) //Error: number doesn't have a .length property
        我们需要传入汾河约束类型的值，必须包含必须的属性
        loggingIdentity({ length: 10, value: 3 });
    在泛型约束种使用类型参数：
        function getProperty(obj: T, key: K){
            return obj[key];
        }
        let x = { a: 1, b: 2, c: 3, d: 4 };
        getProperty(x, "a"); //okay
        getProperty(x, "m"); //error: Argument of type 'm' isn't assignable to 'a'|'b'|'c'|'d'
