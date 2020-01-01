# 模块
    从ECMAScript2015 开始，Javascript引入了子模块的概念。TypeScript也沿用了这个概念。

    模块再其自身的作用域里执行，而不是再全局作用域里；这意味着定义在一个模块里的变量，函数，类等等在模块外部是不可见的，除非你明确的使用export形式之一导出它们。相反，如果想使用其他模块导出的变量，函数，类，接口等的时候，必须要导入它们，可以使用import形式之一。

    模块是自声明的；两个模块之间的关系是通过在文件级别上使用imports和exports建立的。

    模块使用模块加载器去导入其他模块。在运行时，模块加载器的作用是在执行此模块代码前去查找并执行这个模块所有依赖。我们最熟知的JavaScript模块加载器是服务于Node.js的CommonJS和服务于Web应用的Require.js。

    TypeScript与ECMAScript2015一样，任何包含顶级import或者export的文件都被当成一个模块。相反地，如果一个文件不带有顶级的import或者export声明，那么它的内容被视为全局可见的(因此对模块也是可见的)

# 导出
### 导出声明
    任何声明(比如变量，函数，类，类型别名或接口)都能够通过添加export关键字来导出
        export interface StringValidator{
            isAcceptable(s: string): boolean;
        }
        export const numberRegexp = /^[0-9]+$/;
        export class ZipCodeValidator implements StringValidator{
            isAcceptable(s: string){
                return s.length === 5 && numberRegexp.test(s);
            }
        }
### 导出语句
    导出语句很便利，因为我们可能需要对导出的部分重命名，所以上面的例子也可以这样写：
        class ZipCodeValidator implements StringValidator{
            isAcceptable(s: string){
                return s.length === 5 && numberRegexp.test(s);
            }
        }
        export { ZipCodeValidator };
        export { ZipCodeValidator as mainValidator };
### 重新导出
    我们经常回去扩展其他模块，并且只导出那个模块的部分内容。重新导出新功能并不会在当前模块导入那个模块或定义一个新的全局变量。
        export class ParseIntBasedZipCodeValidator{
            isAcceptable(s: string){
                return s.length === 5 && parseInt(s).toString() === s;
            }
        }
        // 导出原先的验证器但做个重命名
        export { ZipCodeValidator as RegExpBasedZipCodeValidator } from './ZipCodeValidator';
    或者一个模块可以包裹多个模块，并把它们导出的内容联合在一起通过语法： export * from "module".
        export * from "./StringValidator"; //exports interface StringValidator
        export * from "./LettersOnlyValidator"; //exports class LettersOnlyValidator
        export * from "./ZipCodeValidator"; //exports class ZipCodeValidator
# 导入
    模块的导入操作和导出一样简单，可以使用以下import形式之一来导入其它模块长的导出内容
### 导入一个模块中的某个导出内容
        import { ZipCodeValidator } from "./ZipCodeValidator";
        let myValidator = new ZipCodeValidator();
    可以对导入内容重命名
        import { ZipCodeValidator as ZCV } from "./ZipCodeValidator";
        let myValidator = new ZCV();
    将整个模块导入到一个变量，并通过它来访问模块的导出部分
        import * as validator from "./ZipCodeValidator";
        let myValidator = new validator.ZipCodeValidator();
    具有副作用的导入模块
        尽管不推荐这么做，一些模块会设置一些全局状态供其他模块使用。这些模块可能没有任何的导出或用户根本就不关注它的导出。使用下面方法来导入这类模块：
            import "./my-module.js";
# 默认导出
    每个某块都可以有一个default导出。默认导出使用default关键字标记；并且一个某块最多只能有一个default
        declare let $: JQuery;
        export default $;

        import $ from "JQuery";
        $("button.continue").html("Next Step...");
    类和函数声明可以直接标记为默认导出。标记为默认导出的类和函数名字是可以省略的。
