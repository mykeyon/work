# 迭代器和生成器
    for...of  vs  for...in
        for...of和for...in均可迭代一个列表；但是用于迭代的值却不同，
            for...in迭代的是对象的键 的列表
            for...of则迭代的是对象的键对应的值
                let list = [4, 5, 6];
                for(let i in list){
                    console.log(i); //0 1 2
                }
                for(let i of list){
                    console.log(i); //4 5 6
                }
        另一个区别是for...in可以操作任何对象；它提供了查看对象属性的一种方法。但是for...of关注迭代对象的值。内置对象Map和Set已经实现了Symbol.iterator方法，我们可以访问它们保存的值。
            let pets = new Set(["Cat", "Dog", "Hamster"]);
            pets["species"] = "mammals";
            for(let pet in pets){
                console.log(pet);  //"species"
            }
            for(let pet of pets){
                console.log(pet); //"Cat", "Dog", "Hamster"
            }
