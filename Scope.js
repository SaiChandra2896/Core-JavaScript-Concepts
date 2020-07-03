//Scope ans Lexical Environment(Scope)
//{
//I'm initializing a curly braces means I have created a lexical environment here There can be many lexical environments
//nested inside each othere
//}

var a = 1 //Here I have initialized a variable globally

{
    //this is local scope
    console.log(a)// 1 (since a is defined globally we can access inside the inner lexical scope).
}

console.log(b) // undefined (Since we used var inside local scope  b is accessed globally but prints undefined this is called HOISTING)
{
    var b = 2;
}

//Block Scope
//A block scope is the area within if, switch conditions or for and while loops. Generally speaking, whenever you see 
//{curly brackets}, it is a block. In ES6, const and let keywords allow developers to declare variables in the block scope, 
//which means those variables exist only within the corresponding block.

let c = 3
{
    console.log(c)//3 (Since c is defined globally.)
}

console.log(d);// error (Since the use of let keyword d is not Hoisted and not accesible in globally)
{
    //area b/w the braces is now a block scope for d;
    let d = 4;
}