
//***************Optimized Soluton */
//Functional Programmng******************
const radius=[9,6,5,8]

const area=function(radius){
    return Math.PI*radius*radius;
}


const circum=function(radius){
    return 2*Math.PI*radius;
}

const dimeter=function(radius){
    return 2*radius;
}

const calculate=function(radius,logic){
    const output=[]
    for(let i=0;i<radius.length;i++)
    {
        output.push(logic(radius[i]))
    }
    return output
}

console.log(calculate(radius,area))  //console.log(radius.map(area))

console.log(calculate(radius,circum))

console.log(calculate(radius,dimeter))

