// business logic














// ui logic
$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();
    const question1 = $("#question1").val();
    console.log(question1);
    const userName = $("input#nameOfPerson").val();
    console.log(userName);
    const question2= $("#question2").val();
    console.log(question2);
    const question3 = $("#question3").val();
    console.log(question3);
    const question4 = $("#question4").val();
    console.log(question4);
    const question5 = $("#question5").val();
    console.log(question5);
    const question6 = $("#question6").val();
    console.log(question6);
    const question7 = $("#question7").val();
    console.log(question7);
    const question7 = $("#question8").val();
    console.log(question8);

    $("").text(question1);
    $("").text(question2);
    $("").text(question3);
    $("").text(question4);
    $(".").text(question5);
    $(".").text(question6);
    $(".").text(question7);
    $(".").text(question8);
    

  //   // $("#story").show();
  // });
});