function menu(a,b){
    let add, sub, multiply, divide;
    add=a+b;
    sub=a-b;
    multiply=a*b;
    divide=a/b;
    console.log(`Addition: ${add} Subtration: ${sub} multiplication: ${multiply} divition: ${divide}`)

}
// calculator(100,5);

function calculator(callback){
    callback(100,5);
}
calculator(menu);8


