//Question 1
function printInt(n) {
 for (var i = 1; i <= n; i++) {
 console.log(i);
 }
}
printInt(n);


//Question 2
function printIntRev(n) {
  for (var i = n; i >= 1; i--) {
    console.log(i);
  }
}
printIntRev();


// Question 3
function checkInput(x) {
  if (typeof x ==='string'){
    return 'string'
  }
  else if (typeof x==='number') {
  return 'number'
  }
  else if (typeof x ==='boolean'){
  return 'boolean'
  }
  else return '-1'  
}


//Question 4
function simpleEvenAdding(num){
var result=0
for(var x=1; x<=num; x++)
if (x % 2===0){
  result+=i;
return result
  }
}


//Question 5
function letterCapitalize(str){
var str = string.split(" ");
for(var i=0; i<str.length;i++)
var result=str[0].toUpperCase() + str[1].splice;
}
return result()


//Question 6
function simpleReverse(str) {
  for (var i = str.lenth; i>=0; i--) {
    return(i);
  }
}


//Question 7
function findDiff(arr) 
var largest=arr[a];Math.max(num)
var smallest = arr [b];Math.min(num)
return findDiff([arr a- arr b])


//Question 8
function timeConvert(num) {
var hours = num/60;
var minutes = num % 60;
console.log(hours +":"+ minutes);
}


//Question 9
function findStr(str, long) {
var length = str.length;
var answer = 0
for (var i=0; i<long.length-str.length;i++){
if (long.slice(i, i+str.length)===str){
  answer++;
}
}

//Question 10
 function selfDividingNumbers (left, right){
    var num = []
    var digits = num.toString().split("");
    for (var i=0; i<digits.length;i++){
      if (num %digits[i]===0){
              [num ++];
          }    
          }
    
//Question 11
  function moveZeros(nums){
  var counter=0;
  var answer=[];
  for(var i=0; i<nums.length; i++){
      if(nums[i]===0) {nums.splice(i);
      nums.push(0)
      return answer
          }
      }

  //Question 12
  function average(arr) {
  var total = 0;
  for (var i = 0; i <arr.length; i++) {
      total += arr[i];
  }
  return total /arr.length
}

