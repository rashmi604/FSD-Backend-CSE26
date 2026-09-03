// Structure of promise
let promise = new Promise((resolve,reject)=>{
    console.log("I am new promise");
});
resolve ("successfully executed"); // calling resolve execute code return data
resolve(123);
reject("(reject your request");  // calling this function will reject your request and genarate error msg
});



function GetData(dataId) // ek function hai GetData
{
    return new Promise((resolve,reject)=>{
        setTimeout()=>{ //settimeout is aync function used to dealy
            console.log("DataId",dataId);
            resolve("successful"); // sirf tabhi call hog jab data milega , nahi milega to error aa jayega
        },8000);
    });
}
let r=GetData(123); //function id 123 jiska data humfetch kar rhe hain
const GetPromise=()=>{
    return new Promise((resolve,reject)=>{ // agar data milega resolve call hoga ,nahi milega to reject call hoga
        console.log("i am a promise");
        //resolve("successful");
        reject("network error");
    });
};

let promise=GetPromise();
promise.then(()=>{
    console.log("promise is fulfilled");
});
promise.catch(()=>{
console.log("network is not working properly")
});







