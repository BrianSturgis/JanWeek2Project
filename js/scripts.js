// business logic






// ui logic
(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const question1 = $("").val();
    const question2 = $("").val();
    const question3= $("").val();
    const question4 = $("").val();
    const question5 = $("").val();
    const question6 = $("").val();
    const question7 = $("").val();
    const question8 = $("").val();

    $("").text(question1);
    $(".").text(question2);
    $(".").text(question3);
    $(".").text(question4);
    $(".").text(question5);
    $(".").text(question6);

    $("#story").show();
  });
});