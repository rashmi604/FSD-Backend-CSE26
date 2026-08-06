let a,b,c
a = 5
b = 10 
r = a + b
console.log(r)


a = 10
b = "abc"
c = a+b
console.log(c)

//array
const arr1 [ ] // empty array
const arr2 = ['a','b','c'] //with elements
const arr3 = new Array('a','b','c')//using constructor
const arr4 = new Array('a',10,true,{name:'Rashmi'})//mixed array
const arr5 = new Array(s)//size of array
arr5.push(1) // to add an element
//arr2[0]//to access an element of array

const new_arr = [1,2,3,4,5]
console.log(new_arr)//prints all elements
console.log(new_arr[1])
new_arr.push(6)//to access element
new_arr.pop()
new_arr.unshift(10)//add element at beginning   
new_arr.shift()//delete element from beginning
new_arr.indexOf(4)//return index of an element
new_arr.includes(14)// check whether this no is there in our array or data
const arr6 = new_arr.slice(2,4)//to extract a part of an array out and 2 and 4 are index and ending index does not include // ans = [3,4] extracted part
const arr6 = new_arr.splice(2,5)//ending index includes and returns new array
const a1 = [1,2,3]
const a2 = ['a','b','c']
const a3 = a1.concat(a2)//add two array
console.log(c)
const r = [...a1,...a2,...a3 etc]//merge more than two arrays 



//objects - keyvalue pairs

const student = {
    name: "abc",
    email: "abc@gmail.com",
    rollno: 1234,
    batch: "CSE-26"
}
console.log(student)//access whole data
console.log(student.name)//to call individual element like name

//Function

function sum(a,b)
      {
        let r;
        r = a+b ;
        return r;
        //console.log("Hello")//it will not execute after return nothimg execute 
        }
    // instead of these three lines we canwrite return a+b
    let result = sum(2,3)
    console.log(result)