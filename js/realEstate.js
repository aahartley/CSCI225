document.getElementById('bt5').addEventListener('click',display);
document.getElementById('bt').addEventListener('click',calculate);
document.getElementById('bt3').addEventListener('click',home);
function home(){
    window.location=("index.html");
}
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
    var date = parseInt(document.getElementById('year').value);
    var month = document.getElementById('date').selectedIndex;
    var balance = loanAmount;

    var monthlyInterestRate = parseFloat(iRate/12);
    var mp1 = loanAmount*((monthlyInterestRate*(Math.pow((1.00+monthlyInterestRate),lTerm*12))));
    var mp2= Math.pow((1.00+monthlyInterestRate),(lTerm*12))-1;
    var monthlyPayment = mp1/mp2;
    var mp = monthlyPayment.toFixed(2);


    var interestPaidPerMonth = balance * monthlyInterestRate;
    var principalPaidPerMOnth = monthlyPayment-interestPaidPerMonth;
    
    var interestpayment =0;
    var principalpayment =0;

    var result="<p id=\"mp\">Monthy Payment is: "+mp+"</p><table>";

    for(var i=1; i<=lTerm; i++){
        if(i==1)
        result += "<tr>"+"<th>Date </th>"+" <th>Interest </th>"+"<th>Principal </th>"+" <th>Balance </th>"+"</tr>";

        result += "<tr>";

        
        for(var j=1; j<=12; j++){
            interestPaidPerMonth = balance * monthlyInterestRate;

            principalPaidPerMOnth = monthlyPayment-interestPaidPerMonth;


            balance = balance-principalPaidPerMOnth;
            var bb = balance.toFixed(2);

            interestpayment += interestPaidPerMonth;
            var ii = interestpayment.toFixed(2);

            principalpayment += monthlyPayment-interestPaidPerMonth;
            var pp = principalpayment.toFixed(2);


        }

        result += "<td>"+(month+1)+"/"+(date)+"-"+(month+1)+"/"+(date+1)+" </td> <td>$"+ii+"</td><td> $"+pp+" </td><td>$"+bb+"</td>";
        date++;

        var test = document.getElementById('test');
        test.innerHTML = result;
        interestpayment=0;
        principalpayment=0;
        result += "</tr>"

    }
    result = "</table>";


}
