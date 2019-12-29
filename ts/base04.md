函数：
    函数是Javascript应用程序的基础。它帮助我们实现抽象层，模拟类，信息隐藏和模块。
    在TypeScript里，虽然已经支持类，命名空间和模块，但函数仍然是主要的定义行为的地方。
函数类型
    为函数定义类型
        function add(x: number, y: number): number{
            return x + y;
        }
        let myAdd = function(x: number, y: number): number{ return x + y};
    书写完整的函数类型
        现在我们已经为函数指定了类型，下面写出函数的完整类型：
        let myAdd: (x: number, y: number) => number =
            function(x: number, y: number): number{ return x + y}
        函数类型包含两部分：参数类型和返回值类型。当写出完整的函数类型的时候，这两部分都是需要的。我们以参数列表的形式写出参数类型，为每个参数指定一个名字和类型。这个名字只是为了增加可读性。我们也可以这么书写：
        let myAdd: (baseValue: number, increment: number) => number =
            function(x: number, y: number): number{ return x + y; }
            只要参数类型是匹配的，那么久认为它是有效的函数类型，而不在乎参数名是否正确。
    推断类型
        let myAdd = function(x: number, y: number): number{ return x + y }
        let myAdd: (baseValue: number, increment: number) => number =
            function(x, y){ return x + y }
    可选参数和默认参数
        function buildName(firstName: string, lastName?: string){
            if(lastName)
                return firstName + " " + lastName;
            else
                return firstName;
        }
        let result1 = buildName("Bob");
        let result2 = buildName("Bob", "Adams", "Sr."); //error!
        let result3 = buildName("Bob", "Adams");

        可选参数必须跟在必须参数后面，如果上例我们想让firstName是可选的，那么久必须调整它们的位置，把firstName放在后面。
        在TypeScript里，我们也可以为参数提供一个默认值当作用户没有传入这个参数或传递值为undefined时。它们叫做有默认值初始化值的参数。
        function buildName(firstName: string, lastName = "Smith"){
            return firstName + " " + lastName;
        }
    剩余参数
        必要参数，默认参数和可选参数有个共同点：它们表示某一个参数。
        在Javascript里，可以使用arguments来访问所有参数的参数。
        在Typescript里，你可以把所有参数收集到一个变量里：
        function buildName(firstName: string, ...restOfName: string[]){
            return firstName + " " + restOfName.join(" ");
        }
        let employeeName = buildName("Joseph", "Samuel", "Lucas", "Mackinzie");

重载
    let suits = ["hearts", "spades", "clubs", "diamonds"];
    function pickCard(x: { suit: string; card: number;}[]): number;
    function pickCard(x: number): { suit: string; card: number; };
    function pickCard(x): any{
        if(typeof x == "object"){
            let pickedCard = Math.floor(Math.random()* x.length);
            return pickedCard;
        }
        else if(typeof x == 'number'){
            let pickedSuit = Math.floor(x /13);
            return { suit: suits[pickedSuit], card: x % 13};
        }
    }
    let myDeck = [{ suit: "diamonds", card: 2}, { suit: "spades", card: 10}, { suit: "hearts", card: 4}]
    let pickedCard1 = myDeck[pickCard(myDeck)];
