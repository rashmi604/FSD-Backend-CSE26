//Async-Await function
async function hello(){ // when we wrote async it will convert from normal function to asynchronous function
    console.log("hello!!");
}
//async - to make an asynchronous function
//await - jab tak promise resolve na ho tabtak baki sab rok do

function Api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weatherData, i found");
            resolve(200);
        },3000);
    });
}

//await Api(); error because it works only with async function.
async function getweatherData(){
    await Api();
    await Api(); // pehle data 1 aaye tabtak wait then dusra function
}
getweatherData();

// our promise chaining problem resolved here
