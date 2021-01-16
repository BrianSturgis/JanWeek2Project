// business logic
function totalValue (num1,num2,num3,num4,num5,num6,num7,num8) {
  return parseInt(num1) + parseInt(num2) + 
  parseInt(num3) + parseInt(num4) + 
  parseInt(num5) + parseInt(num6) + 
  parseInt(num7) + parseInt(num8)
}




// ui logic
$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();
    const userName = $("input#nameOfPerson").val();
    const question1 = $("#question1").val();
    const question2 = $("#question2").val();
    const question3 = $("#question3").val();
    const question4 = $("#question4").val();
    const question5 = $("#question5").val();
    const question6 = $("#question6").val();
    const question7 = $("#question7").val();
    const question8 = $("#question8").val();
    let total = totalValue(question1,question2,question3,question4,question5,question6,question7,question8);
    

    if (total >= 20){
      // $("#answer").show();
      // $("#Python").show();
      // $("#").hide();
    } else if (total >= 25) {
      // $("#").show();
      // $("#").hide();
      // $("#").hide();
    } else if (total >= 23) {
      // $("#").show();
      // $("#").hide();
      // $("#").hide();
    } else if (total >= 20) {
      // $("#").show();
      // $("#").hide();
      // $("#").hide();
    } else if (total >=17) {
      // $("#").show();
      // $("#").hide();
      // $("#").hide();
    } else if (total >=15) {
      // $("#").show();
      // $("#").hide();
      // $("#").hide();
    } else if (total >=12) {
      $(".language").text(" C# ");
      $(".output").fadeIn();
      $(".personName").text(userName);
    } else if (total >=9) {
      $(".language").text(" Ruby ");
      $(".output").fadeIn();
      $(".personName").text(userName);
      console.log(total);
    } else (alert("PLEASE ANSWER THE QUESTIONS TO COMPLETE THE TEST"));
  });
});