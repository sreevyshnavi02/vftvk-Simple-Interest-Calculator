function compute()
{
    var principal = document.getElementById("principal").value;
    if(principal <= 0){
        alert("Enter a positive number");

        //to empty the input field - remove the invalid input entered
        document.getElementById("principal").value = "";

        //to set the cursor to the pricipal field
        document.getElementById("principal").focus();

        //to remove the output from a previous form submission
        document.getElementById("result").innerHTML = "";
    }
    else{
        // valid principal value
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal*years*rate/100;

        // to calculate the year based on the period entered and the current year
        var year = new Date().getFullYear()+parseInt(years);
        document.getElementById("result").innerHTML = "<br>If you deposit <span class='numbers'>" + principal + "</span>, <br>at an interest rate of <span class='numbers'>" + rate + "%</span>.<br>You will receive an amount of <span class='numbers'>" + interest + "</span>,<br>in the year <span class='numbers'>"+year+"</span>";
    }
}


function updateRate(){

    //to automatically update the value of interest chosen using the slider as the user slides on the input
    var rateval = document.getElementById("rate")
    var int_rate = rateval.value;
    document.getElementById("rate_val").innerText = int_rate;
}

