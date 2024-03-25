//Get the input values
const basicsalary=60000
const benefits=6000
function calculateNetSalary(){
    //calculate the payee i.e(Tax)
    let payee = Math.floor((basicsalary + benefits) *0.25);
    //calculate NHIFDeductions
     let NHIFDeductions=Math.floor(basicsalary * 0.02);
    //calculate NSSFDeductions
     let NSSFDeductions=Math.floor(basicsalary * 0.12)
    //calculate grosssalary
     let grosssalary=Math.floor(basicsalary + benefits)
    //calculate netsalary
     let netsalary=grosssalary - (payee+NHIFDeductions+NSSFDeductions);
     return{
       grosssalary,
       NHIFDeductions,
       payee,
       NSSFDeductions,
       netsalary,
     }
   }
//output the net salary
   let output = calculateNetSalary(basicsalary, benefits)
   console.log('grosssalary:', output.grosssalary)
   console.log('NHIFDeductions:', output.NHIFDeductions)
   console.log('payee:', output.payee)
   console.log('NSSFDeductions:', output.NSSFDeductions)
   console.log('netsalary:', output.netsalary)
   
