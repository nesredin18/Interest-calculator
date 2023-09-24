function compute()
{
    var p = parseFloat(document.getElementById("principal").value);
    var r= parseFloat(document.getElementById("rate_val").value);
    var y= document.getElementById("years").value;
    var i=p * y * r / 100;
    var a=p+i;
    var result = document.getElementById("result");
    var year = new Date().getFullYear() + parseInt(y);
    if(isNaN(p) || p<=0){
        alert("please enter valid principal");
        p.focus()
    }
    else {
    result.innerHTML = "If you deposit $" + p+ ",\<br\>at an interest rate of " + r + "%\<br\>You will receive an amount of $" + a + ",\<br\>in the year " + year + "\<br\>";
}

    
}

function updateRate(){
    var rateval=document.getElementById("rate").value;
    document.getElementById("rate_val").value=rateval;


}
        