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
var words = str.split(" ");
var result="";
for(var i=0; i<words.length;i++){
var firstLetter=words[i].replace(words[i])
result +=" " +firstLetter
}
return result.slice(1);
}
console.log(letterCapitalize(""))


//Question 6
function simpleReverse(str) {
  var strArray=str.splt("")
  var revArray=strArray.reverse()
}
    return revArray.join("")


//Question 7
function findDiff(arr) {
var largest=Math.max(...arr);
var smallest =Math.min(...arr)
}
return findDiff([largest-smallest])

//Question 8
function timeConvert(num) {
var hours = parseInt(num/60);
var minutes = num % 60;
return hour + ":" + minutes}
console.log(timeConvert);


//Question 9
function findStr(str, long) {
  var splitArray =long.splt(str);
}
  return splitedArray.length -1


//Question 10
 function selfDividingNumbers (left, right){
    var solution = []
    for (var i=left; i<=right;i++){
      if (isSelfDividing(i)){
      solution.push(i);
      }
      return solution
    
  function isSelfDividing(num){
    var digits =num.toString().split("");
    for (vari=0; i<digits.length; i++){
      if (num%digits[i]!==0)
        return false
      }
    }
        return true
        console.log(selfDividingNumbers)
    
    
//Question 11
  function moveZeros(nums){
  var counter=0;
  var answer=[];
  for(var a=0; a<nums.length; a++){
      if(nums[a]===0) {counter++;}
      else {answer.push (nums[a]);
      }
    for (var b=counter; b>0; b--){
      answer.push(0)
    }
        return answer


  //Question 12
  function average(nums) {
    if (nums.length===0){
      return 0;
    }
    
    var total = 0
    for (var i=0;i<nums.length; i++){
      total += num[i];
    }
     return total/nums.length
  }
     console.log(average[])
