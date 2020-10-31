document.getElementById('bt5').addEventListener('click',display);
document.getElementById('bt').addEventListener('click',calculate);
function display(){
    var a = document.getElementById("form").style.visibility="visible";
    var b = document.getElementById("test").style.visibility="hidden";

}
function calculate(){
    var a = document.getElementById("form").style.visibility="hidden";
    var b = document.getElementById("test").style.visibility="visible";
    var loanAmount = parseInt(document.getElementById('input1').value);
    var iRate = parseFloat(document.getElementById('input2').value);
    iRate = parseFloat(iRate / 100);
    var lTerm = parseInt(document.getElementById('input3').value);
    var date = document.getElementById('year').value;
    var month = document.getElementById('date').selectedIndex;
    var show = document.getElementById('results').value;
    var balance = loanAmount;

    var monthlyInterestRate = parseFloat(iRate/12);

    console.log("test"+monthlyInterestRate);

    var test4 = loanAmount*((monthlyInterestRate*(Math.pow((1.00+monthlyInterestRate),lTerm*12))));
    var test1= Math.pow((1.00+monthlyInterestRate),(lTerm*12))-1;
    var monthlyPayment = test4/test1;
    var mp = monthlyPayment.toFixed(2);


    var interestPaidPerMonth = balance * monthlyInterestRate;
    var principalPaidPerMOnth = monthlyPayment-interestPaidPerMonth;
    


 
    var interestpayment =0;
    var principalpayment =0;
    console.log(mp);

    var result="<p id=\"mp\">Monthy payment is: "+mp+"</p><table>";

    for(var i=1; i<=lTerm; i++){
        if(i==1)
        result += "<tr>"+"<th>date </th>"+" <th>interest </th>"+"<th>principal </th>"+" <th>balance </th>"+"</tr>";

        result += "<tr>";

        
        for(var j=1; j<=12; j++){
            interestPaidPerMonth = balance * monthlyInterestRate;

            principalPaidPerMOnth = monthlyPayment-interestPaidPerMonth;


            balance = balance-principalPaidPerMOnth;
            var bb = balance.toFixed(2);

            interestpayment += interestPaidPerMonth;
            var nn = interestpayment.toFixed(2);

            principalpayment += monthlyPayment-interestPaidPerMonth;
            var pp = principalpayment.toFixed(2);


        }

        result += "<td>"+(month+1)+"/"+(date)+"-"+(month+1)+"/"+(date)+" </td> <td>"+bb+"</td><td> "+nn+" </td><td>"+pp+"</td>";
        date++;

        var test = document.getElementById('test');
        test.innerHTML = result;
        console.log("year" +i);
        console.log(bb);
        console.log(pp);
        console.log(nn);
        interestpayment=0;
        principalpayment=0;
        result += "</tr>"

    }
    result = "</table>";





 
  
}
