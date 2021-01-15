// business logic














// ui logic
$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();
    const question1 = $("#question1").val();
    console.log(question1);
    const userName = $("").val();
    // const question3= $("").val();
    // const question4 = $("").val();
    // const question5 = $("").val();
    // const question6 = $("").val();
    // const question7 = $("").val();
    // const question8 = $("").val();

    // $("").text(question1);
    // $("").text(question2);
    // $("").text(question3);
    // $("").text(question4);
    // $(".").text(question5);
    // $(".").text(question6);

    // $("#story").show();
  });
});