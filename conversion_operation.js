console.log("--number to number--")
let score=22
let valueInNumber=Number(score)
console.log(typeof score);//number
console.log(typeof valueInNumber);//number

console.log("--String to number--")
let score2="22"
let valueInNumber2=Number(score2)
console.log(typeof score2);//String
console.log(typeof valueInNumber2);//number
console.log(valueInNumber2)//number

console.log("--number and String to number--")
let score3="22abc"
let valueInNumber3=Number(score3)
console.log(typeof score3);//String
console.log(typeof valueInNumber3);//number
console.log(valueInNumber3);//NaN

console.log("--boolean to number--")
let score4=true
let valueInNumber4=Number(score4)
console.log(typeof score4);//boolean
console.log(typeof valueInNumber4);//number
console.log(valueInNumber4);//0

console.log("--null to number--")
let score5=null
let valueInNumber5=Number(score5)
console.log(typeof score5);//Object
console.log(typeof valueInNumber5);//number
console.log(valueInNumber5);//0

console.log("--undefined to number--")
let score6=undefined
let valueInNumber6=Number(score6)
console.log(typeof score6);//Undefined
console.log(typeof valueInNumber6);//number
console.log(valueInNumber6);//NaN

let isValid=3
let isValidTrue=Boolean(isValid)
console.log(isValidTrue);
//1=>true, 0=>false, ""=>false,"shikha"=>true

let name=undefined
let convertToString=String(name)
console.log(typeof convertToString)

//***************Operations********************* */
console.log("--------------Operations---------------")
console.log(1+2);//3
console.log("1"+2);//12
console.log(1+"2");//12
console.log("1"+"2");//12
console.log(1+2+"2");//32
console.log("1"+2+2);//122

//-----------------comparisons----------
console.log("------------comparison-------------");
console.log(null==0);//false
console.log(null>0);//false
console.log(null>=0);//true bcoz while comaprison <,>,<=.>= JS converts null to number and now 0>=0 is true

console.log(undefined==0);//false
console.log(undefined>0);//false
console.log(undefined>=0);//false

//strict check ===
console.log("2"==2)//true
console.log("2"===2)//false bcoz === checks datatypes strictly