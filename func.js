// function register(){
//   console.log("User Logged in ")
// }
// register();

// function login(username){
//     console.log(`${username},logged in successfully`)
// }

// login("sharad")

// function log(username,password){
//     console.log(`${username},logged in successfully`)
//     console.log("password:=",password)
// }
// log("pratik","abc@123")

// function uppercase(str){
//     // console.log(str.toUppercase())
//     return str.toUpperCase();
// }
// let s=uppercase("nishant")
// console.log(s)

// function uppercase(str){
//     return 
//     str.toUpperCase()

// }
// let n= uppercase('Prasad');
// console.log(n)

// function area(width,height){
//     return width*height
// }
// let ar=area(5,8)
// console.log(ar)

// function area(width,height){
//     console.log(width*height)
// }
// area(5,9)

//not passing parameter
// function area(width,height){
//     let ar=width*height
//     return ar;
// }
// const s=area(6)
// console.log(s)

//default parameter
// function area(width,height=2){
//     let ar=width*height
//     return ar;
// }
// const s=area(6)
// console.log(s)
// ****************************************
// function calculateArea(width,height){
//     height= height===undefined?2:height;
//     const area=width*height;
//     return area;

// }
// let result=calculateArea(8)
// console.log(result)

//*********Variable Scope ********/
// function download(){
//     const filename="xyz.pdf"
// }

// download()

// console.log(filename)

//*************Global Scope ********//
// const filename="abc.pdf"
// function download(){
//     console.log(filename)
// }
// download()

//********Function Declration***********
// function func(){

// }

// //*********Functionn Epression */
// const login=function(){

// }

// //***********Anonmous Function */
// function(){

// }

//******IIFE:   Immeditely Invoked Function Expression*//***** */
// (function swap(){
//     console.log("Numbers are Swapped")
// }) ()

//**************Arrow Fuction********** */
// const login= ()=>{
//     console.log("User Logged in Successfully")
// }
// login();


//*********One Linear Function**************/
// const sum=(num1,num2)=>{num1+num2}
// const res=sum(899,101)
// console.log(res)

function formatText(text,formatcb){
return typeof formatcb==='function'?formatcb(text):text.toUpperCase()
}
const result=formatText("pavan",(text)=>text.charAt(0).toUpperCase()+text.slice(1))
console.log(result)