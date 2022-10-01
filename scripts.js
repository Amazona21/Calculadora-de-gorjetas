function calculaterTip(event){
   event.preventDefault();
    let bill = document.getElementById('bill'). value;
    let servicequal = document.getElementById('servicequal'). value;
    let number = document.getElementById('people'). value;

    if(bill ==''| servicequal == 0){
        alert("por favor, preencha os valores")
        return;
    }
    if(number== ""| number <=1) {
       number =1;
       document.getElementById('each').style.display="none"
    } else{
        document.getElementById('each').style.display="block"
    }
    let total = (bill * servicequal) / number;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display="block";
}
document.getElementById('totalTip').style.display="none";
document.getElementById('each').style.display="nome";

document.getElementById('tipsForm').addEventListener('submit', calculaterTip);