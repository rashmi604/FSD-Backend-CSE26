//Synchronous File Handling (CRUD)

const f=require("fs"); // module fs ,http etc
console.log("data1");
console.log("data2");

f.writeFileSync("rashmi.txt","hello to all, i am rashmi rajput");//create synchronous file with the name you gave and in that file write content you give to  it
//f.appendFileSync("rashmi.txt","\nupdated data");// to add data in existing file ,if file doesnt exist it will create new file not give error msg
f.unlikeSync("rashmi.txt");// to delete a file 
const data=f.readFileSync("rashmi.txt","utf-8");//
console.log(data);

console.log("data3");
console.log("data4");

