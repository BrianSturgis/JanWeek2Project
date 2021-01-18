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
    if (total >= 30){
      $("form#questions").fadeOut();
      $(".language").text(" Unreal ");
      $(".output").fadeIn();
      $(".UnrealAnswer").fadeIn();
      $(".personName").text(userName);
    } else if (total >= 25) {
      $("form#questions").fadeOut();
      $(".language").text(" Go ");
      $(".output").fadeIn();
      $(".goAnswer").fadeIn();
      $(".personName").text(userName);
    } else if (total >= 23) {
      $("form#questions").fadeOut();
      $(".language").text(" Javascript ");
      $(".output").fadeIn();
      $(".javascriptAnswer").fadeIn();
      $(".personName").text(userName);
    } else if (total >= 20) {
      $("form#questions").fadeOut();
      $(".language").text(" Swift ");
      $(".output").fadeIn();
      $(".swiftAnswer").fadeIn();
      $(".personName").text(userName);
    } else if (total >=17) {
      $("form#questions").fadeOut();
      $(".language").text(" Rust ");
      $(".output").fadeIn();
      $(".rustAnswer").fadeIn();
      $(".personName").text(userName);
    } else if (total >=15) {
      $("form#questions").fadeOut();
      $(".language").text(" Python ");
      $(".output").fadeIn();
      $(".pythonAnswer").fadeIn();
      $(".personName").text(userName);
    } else if (total >=12) {
      $("form#questions").fadeOut();
      $(".language").text(" Ruby ");
      $(".output").fadeIn();
      $(".rubyAnswer").fadeIn();
      $(".personName").text(userName);
    } else if (total >=9) {
      $("form#questions").fadeOut();
      $(".language").fadeIn(" C# ");
      $(".output").fadeIn();
      $(".cSharpAnswer").fadeIn();
      $(".personName").fadeIn(userName);
    } else (alert("PLEASE ANSWER THE QUESTIONS TO COMPLETE THE TEST YOU HAVE TO SHOW SOME INTEREST"));
  });
});