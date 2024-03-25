const Mynumber=number(100);
console.log(Mynumber);
function number(n){

if(n>79){
    console.log("Your Grade: A") //print 'A' if marks are > 79
}
else if(n>=60 && n<=79){
    console.log("Your Grade: B") //print 'B' if marks are >=60 and <=79
}
else if(n>=50 && n<=59){
    console.log("Your Grade: C") //print 'C' if marks are >=50 and <=59
}
else if(n>=40 && n<=49){
    console.log("Your Grade: D")  //print 'D' if marks are >=40 and <=49
}
else{
    console.log("Your Grade: E")  //print 'E' if marks are below 39
}
return "marks:" + n
}
