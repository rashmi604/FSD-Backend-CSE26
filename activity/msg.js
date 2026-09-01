// function declaration
(function msg()
{
    console.log("My name is Rashmi")
})(); //ife(emmediate execution , dont need to call function)

//function calling
//msg();

function msg()
{
    console.log("My name is Rashmi")
};
setTimeout(msg,3000); //create dealy in execution of a task,it is a calback fn do asynchronous behaviour

console.log("one");
console.log("two");
setTimeout(() => {
    console.log("hello"),5000
});
console.log("three");
console.log("four");
// hello baad me print hoga pehle three four hppo jayenge as heelo takes 5 sec to run(asyn programming dont wait move to next)

//callback hells(nesting of callback functions)
//API get data if we search data wo hame dhundkar de dega
function getData(dataId)
{
    setTimeout(()=>{console.log("data("dataId,datatId)},3000
);
}
getData(1);//calling getData function
getData(2);
getData(3);
//data1 call hoga then 3sec ke delay ke baad data 2 then 3 sec ke baad data 3 teeno ka timer 3 sec teeno ka ek sath aayega data
//therefore we make another function
function getData(dataId,getNextData)
{
    setTimeout(()=> 
)
}




getData(1,()=>{
    getData(2,()=>{
        getData(3)
    )
    }
})


