const basicsalary=60000
const benefits=6000
function calculateNetSalary(){
    let payee = Math.floor((basicsalary + benefits) *0.25);
     let NHIFDeductions=Math.floor(basicsalary * 0.02);
     let NSSFDeductions=Math.floor(basicsalary * 0.12)
     let grosssalary=Math.floor(basicsalary + benefits)
     let netsalary=grosssalary - (payee+NHIFDeductions+NSSFDeductions);
     return{
       grosssalary,
       NHIFDeductions,
       payee,
       NSSFDeductions,
       netsalary,
     }
   }
   let output = calculateNetSalary(basicsalary, benefits)
   console.log('grosssalary:', output.grosssalary)
   console.log('NHIFDeductions:', output.NHIFDeductions)
   console.log('payee:', output.payee)
   console.log('NSSFDeductions:', output.NSSFDeductions)
   console.log('netsalary:', output.netsalary)
   