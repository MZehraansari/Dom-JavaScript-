// Question#1

function val1(x) {
   return function(y) {
      return x + y;
 };
}
let add = val1(12);
console.log(add(2));


// Question#2
let arr = [1,5,6,8,9,0];
   function arySearch(x) {
      if (x===arr){
         return true;
    };
}
arySearch(5)