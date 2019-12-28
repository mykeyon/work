# 类：
    传统的Javascript程序是使用函数和 基于原型的继承来创建可重用的组件。
    ES6开始，Javascript程序员能够使用基于类的面向对象的方式。
    class Greeter{
        greeting: string;
        constructor(message: string){
            this.greeting = message;
        }
        greet(){
            return "hello, " + this.greeting;
        }
    }
    let greeter = new Greeter("world");

# 继承
    在TypeScript里，我们可以使用常用的面向对象模式。基于类的程序设计中一种最基本的模式是允许使用继承来扩展现有的类。
    class Animal{
        move(distanceInMeters: number = 0){
            console.log(`Animal moved ${ distanceInMeters }m.`);
        }
    }
    class Dog extends Animal{
        bark(){
            console.log("Woof! Woof!")
        }
    }
    const dog = new Dog();
    dog.bark();
    dog.move(10);
    dog.bark();
    这个例子展示了最基本的继承： 类从基类种继承了属性和方法。这里Dog是一个派生类，它派生自Animal基类，通过extends关键字。派生类同城被称为子类，基类同城被称为超类。
    因为Dog继承了Animal的功能，因此我们可以创建一个Dog的实例，它能过够bark()和move().

    class Animal{
        name: string;
        constructor(theName: string){ this.name = theName; }
        move(distanceInMeters: number = 0){
            console.log(`${ this.name } moved ${ distanceInMeters }m.`)
        }
    }
    class Snake extends Animal{
        constructor(name: string){super(name)}
        move(distanceInMeters = 5){
            console.log("Slithering...");
            super.move(distanceInMeters);
        }
    }
    class Horse extends Animal{
        constructor(name: string){ super(name); }
        move(distanceInMeters = 45){
            console.log("Galloping...");
            super.move(distanceInMeters);
        }
    }
    let sam = new Snake("Sammy the Python");
    let tom: Animal = new Horse("Tommy the Palomino");
    sam.move();
    tom.move(34);
    派生类包含了一个构造函数，它必须调用super(),它会执行基类的构造函数。而且，在构造函数里访问this的属性之前，我们一定要调用super()。这个是TypeScript强制执行的一条重要规则。

# 共有，私有与受保护的修饰符
    默认为public(在TypeScript里，成员默认都是public)
        也可以明确的将一个成员标记为public，重写上面的Animal类：
        class Animal{
            public name: string;
            public constructor(theName: string){ this.name = theName }
            public move(distanceInMeters: number){
                console.log(`${this.name} move ${ distanceInMeters }m.`);
            }
        }
    理解private
        当成员被标记为private时，就不能在声明它的类外部访问，比如：
        class Animal{
            private name: string;
            constructor(theName: string){ this.name = theName; }
        }
        new Animal("Cat").name; //报错: 'name'时私有的
        TypeScript使用的是结构类型系统。当我们比较两种不同的类型时，并不在乎它们从何而来，如果所有成员的类型都是兼容的，我们就认为它们的类型是兼容的。
        然而，当我们比较带有private和protected成员的类型的时候，情况就不同了，如果其中一个类型里包含了一个private成员，那么只有当另外一个类型种也存在这样一个private成员，并且它们都是来自同一处声明时，才认为这两个类型时兼容的。对于protected成员也使用这个规则。
    理解protected
        protected修饰符与private修饰符的行为很相似，但有一点不同，protected成员在派生类种仍然可以访问。
    readonly修饰符
        可以使用readonly关键字将属性设置为只读的。只读属性必须在声明时或构造函数里被初始化。
        class Octopus{
            readonly name: string;
            readonly numberOfLegs: number = 0;
            constructor(theName: string){
                this.name = theName;
            }
        }
        let dad = new Octopus("Man width the 8 strog legs");
        dat.name = "Man with the 3-piece suit"; //error! name时只读的。
    参数属性
    存取器
        TypeScript支持通过getters/setters来截取对象成员的访问。它能帮我们有效的控制对象成员的访问
        下面的版本里，我们先检查用户密码是否正确，然后允许其修改员工信息。我们把fullName的直接访问改成了可以检查密码的set方法，也加了一个get方法。
        let passcode = "secret passcode";
        class Employee{
            private _fullName: string;
            get fullName(): string{
                return this._fullName;
            }
            set fullName(newName: string){
                if(passcode && passcode == "secret passcode"){
                    this._fullName = newName;
                }else{
                    console.log("Error: Unauthorized update of employee!")
                }
            }
        }
        let employee = new Employee();
        employee.fullName = "Bob Smith";
        if(employee.fullName){
            alert(employee.fullName);
        }
    静态属性
        到目前为止，我们只讨论了类的实例成员，那些仅当类被实例化的时候才会被初始化的属性。我们可以创建类的静态成员，这些属性存在于类本身上而不是类的实例上。在下面的例子里，我们使用static定义origin，因为它是所有网络都会用的属性。每个实例想要访问这个属性的时候，都要在origin前面加上类名。如同在实例属性上使用this.前缀来访问属性一样，这里我们使用Grid.来访问静态属性。
        class Grid{
            static origin = { x: 0, y: 0};
            calculateDistanceFromOrigin(point: { x: number; y: number }){
                let xDist = (point.x - Grid.origin.x);
                let yDist = (point.y - Grid.origin.y);
                return Math.sqrt(xDist * xDist + yDist * yDist)/this.scale;
            }
            constructor(public scale: number){}
        }
        let grid1 = new Grid(1.0); //1x scale
        let grid2 = new Grid(5.0); //5x scale
        console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10}));
        console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10}));
    抽象类
        抽象类作为其他派生类的基类使用。她们一般不会直接被实例化。不同于接口，抽象类可以包含成员的实现细节。 abstrict关键字是用于定义抽象类内部定义抽象方法。
        abstrict class Animal{
            abstrict makeSound(): void;
            move(): void{
                console.log("romaing the earch...")
            }
        }
        抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。抽象方法的语法于接口相似。两者都是定义方法签名但不包含方法体。然而，抽象方法包含abstrict关键字并且可以包含访问修饰符。
        abstrict class Department{
            constructor(public name: string){ }
            printName(): void{
                console.log('Department name: ' + this.name);
            }
            abstrict printMeeting(): void; //必须在派生类中实现
        }
        class AccountingDepartment extend Department{
            constructor(){
                super('Accounting and Auditing'); //在派生类的构造函数中必须调用super();
            }
            printMeeting(): void{
                console.log("The Accounting Department meets each monday at 10am");
            }
            generateReports(): void{
                console.log('Generating accounting reports...')
            }
        }
        let department: Department; //允许创建一个对抽象类的引用
        department = new Department(); //错误：不能创建一个抽象类的实例
        department = new AccountingDepartment(); //允许对一个抽象子类进行实例化和赋值
        department.printName();
        department.printMeeting();
        department.generateReports(); //错误，方法在声明的抽象类中不存在
#高级技巧
    构造函数
    把类当作接口使用
    
