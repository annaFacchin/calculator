var n1 = "";
var n2 = "";
var operator = null;
var result = "";

function setValue(number){
    if(operator == null) {
        n1 = number;
        document.getElementById("first").innerText = n1;
        console.log(n1);
    } else {
        n2 = number;
        document.getElementById("second").innerText = n2;
        console.log(n2);
    }
}

function setOperator(sign){
    document.getElementById("operator").innerText = sign;
    operator = sign;
    console.log(operator);
}

function equals() {
    if (n1 != "" && n2 != ""){
        switch(operator){
            case '+':
                result = parseInt(n1) + parseInt(n2);
                break;
            case '-':
                result = parseInt(n1) - parseInt(n2);
                break;
            case '*':
                result = parseInt(n1) * parseInt(n2);
                break;
            case '/':
                if(n2 == "0"){
                    result = "error";
                }
                result = parseInt(n1) / parseInt(n2);
                break;
            }
    } else {
        result = "select two numbers and an operator";
    }
    document.getElementById("result").innerText = result;
    console.log(result);
}