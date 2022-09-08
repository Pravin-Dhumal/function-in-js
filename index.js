// func();
// sum();
//Function statement or  //Function Declration
// function func(){
//     console.log("Hello Javascript")
// }
// //Function expression 
// const sum=function(){
//     console.log("Addition of Numbers")
// }
// //Anonymous Function 
// function (){

// }
//Named Function Expression
// let add=function sum(){

//     console.log("Additing the numbers ....")
// }
// sum()
//Diffrence Between Parameter and Argument
// function subtraction(parameter1,parameter2)
// {
//     return parameter1-parameter2;
// }
// subtraction(argument1,argument2);
//First Class Function 
//Arrow Function

//Higher Order Function
const radius=[4,9,8,6]

const area =function(radius){
    const output=[]
    for(let i=0;i<radius.length;i++)
    {
        output.push(Math.PI*radius[i]*radius[i])
       
    } return output;
}

console.log(area(radius))

const  calcCircum=function (radius){
const output=[]
for(let i=0;i<radius.length;i++)
{
    output.push(2*Math.PI*radius[i])

}
return output;
};
console.log(calcCircum(radius))

const dimeter=function (radius){
    const output=[]
    for(let i=0;i<radius.length;i++)
    {
        output.push(2*radius[i])
    }
    return output;
}
console.log(dimeter(radius))