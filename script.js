var color= "rojo";
console.log (color);
let nombre= 'juanca';
console.log (nombre);
const apellido= 'mclovin';
console.log (apellido);
function suma(num1,num2){
    var s= num1+num2;
    return s;
 }
 var num1=4;
 var num2=7;
 var s = suma(num1,num2);
 console.log(suma(num1,num2));

 function resta (num1,num2){
    var r= num1-num2;
    return r;
 }
 var num1=8;
 var num2=3;
 var r= resta (num1,num2);
 console.log (resta(num1,num2));

 function multiplicacion(num1,num2){
   var m= num1*num2;
   return m;
}
var num1=9;
var num2=9; 
var m=multiplicacion(num1,num2);
console.log (multiplicacion(num1,num2));

function division(num1,num2){
   var d= num1/num2;
   return d;
}
var num1=5;
var num2=7;
var d= division(num1,num2);
console.log (division(num1,num2));

let array=["40","50","60"];   
for(i=0;i<3;i++){
console.log(array[i]);
}
//#region 
var color= "rojo";
let nombre2= 'juanca';
const apellido2= `mclovin`;
var num1=4;
var num2=7;
var s = suma(num1,num2);
var num1=8;
var num2=3;
var r= resta (num1,num2);
var num1=9;
var num2=9;
var m=multiplicacion(num1,num2);
var num1=5;
var num2=7;
var d= division(num1,num2);
//#endregion
//#region 
console.log (color);
console.log (nombre);
console.log (apellido);
console.log(suma(num1,num2));
console.log (resta(num1,num2));
console.log (multiplicacion(num1,num2));
console.log(array[i]);
//#endregion
//#region 
function suma(num1,num2){
   var s= num1+num2;
   return s;
}
function resta (num1,num2){
   var r= num1-num2;
   return r;
}
function multiplicacion(num1,num2){
   var m= num1*num2;
   return m;
}
function division(num1,num2){
   var d= num1/num2;
   return d;
}
//#endregion