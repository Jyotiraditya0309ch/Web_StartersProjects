function Compute(){
    var p= document.getElementById("principal").value;
    var r=document.getElementById("rate").value;
    var t=document.getElementById("years").value;
    var interest= p*r*t/100;
    var amount=parseInt(p)+parseFloat(interest);
    var result=document.getElementById("result");
    result.innerHTML= amount+" at a rate of "+r+"% per annum";
}
