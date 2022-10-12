//BASIC FUNCTION DECLARATION
// function myFunction (){
//   let num1 = 12;
//   let num2 = 15;
//   let result = num1 + num2;
//   alert(result);
// };

//myFunction();

//BASIC FUNCTION DECLARATION w/ parameters
// function myFunction (num1, num2){
//   let result = num1 + num2;
//   alert(result2);
// };

//BASIC FUNCTION DECLARATION w/ parameters and return
// function myFunction2 (num1, num2){
//   let result2 = num1 + num2;
//   return (result2);
// }

// alert(myFunction2 (28,15));






// const myFunction = function() {
//   let num1 = document.getElementById("input1").value;
//   let num2 = document.getElementById("input2").value;
//   //let result = Number(num1) + Number (num2);
//   let result = Number(num1) * (9/5) + 32;
//   let result_final = parsefloat(result).toFixed(2);
//   return result;
// };

// const clearField = function() {
//   document.getElementById("input1").value = "";
//   document.getElementById("input2").value = "";

// };


const myFunction = function(){
  let num1 = document.getElementById("cel").value;
  let result  = Number(num1)  * Number(9/5) + Number(32); //parse
 return result;
};

//additional
let result_final = parseFloat(result).toFixed(2);

//another (onkeyup)
Celcius <input type="text" id="cel" name="cel" onkeydown="document.getElementById('fah').value = (myFunction());">

const ClearFields = function () {

  document.getElementById("cel").value = "";
  document.getElementById("fah").value = "";
};  
