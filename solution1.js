const Mynumber=number(100);
console.log(Mynumber);
function number(n){

if(n>79){
    console.log("Your Grade: A")
}
else if(n>=60 && n<=79){
    console.log("Your Grade: B")
}
else if(n>=50 && n<=59){
    console.log("Your Grade: C")
}
else if(n>=40 && n<=49){
    console.log("Your Grade: D")
}
else{
    console.log("Your Grade: E")
}
return "marks:" + n
}