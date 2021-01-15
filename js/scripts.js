// business logic
function totalValue (num1,num2,num3,num4,num5,num6,num7,num8) {
  return parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5) + parseInt(num6) + parseInt(num7) + parseInt(num8)
}




// ui logic
$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();
    const question1 = $("#question1").val();
    const userName = $("input#nameOfPerson").val();
    const question2= $("#question2").val();
    const question3 = $("#question3").val();
    const question4 = $("#question4").val();
    const question5 = $("#question5").val();
    const question6 = $("#question6").val();
    const question7 = $("#question7").val();
    const question8 = $("#question8").val();
    let total = totalValue(question1,question2,question3,question4,question5,question6,question7,question8);
    console.log(total);

    
    // $("").text(question1);
    // $("").text(question2);
    // $("").text(question3);
    // $("").text(question4);
    // $(".").text(question5);
    // $(".").text(question6);
    // $(".").text(question7);
    // $(".").text(question8);
    

  //   // $("#story").show();
  });
});