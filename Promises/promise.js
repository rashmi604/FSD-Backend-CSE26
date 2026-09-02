//let promise = new Promise((resolve,reject)=>{
    //console.log("I am new promise");


//resolve ("successfully executed"); // calling resolve execute code return data

//reject("(reject your request");  // calling this function will reject your request and genarate error msg
//});

function GetData(dataId)
{
    return new Promise((resolve,reject)=>{
        setTimeout()=>{
            console.log("DataId",dataId);
            resolve("successful");
        },8000);
    });
}
let r=GetData(123);