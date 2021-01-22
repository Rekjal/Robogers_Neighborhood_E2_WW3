$(document).ready(function () {  
  $("#entry").submit(function (e) {
    let inputNum = parseInt($("input#numeral").val());
    $('input[type="number"], textarea').val('');  // to clear form of entered value after submit
    // alert(numeral);
    
    e.preventDefault();
    let generatedIntegerArray = [];
    generatedIntegerArray = worker(inputNum);
    $("#story").show();
    generatedIntegerArray.forEach(function(element) {
      let num = "<li><strong>" + element + "</strong></li>";
      $("ul#answer").append(num);
    });
   
  });
});

let worker = function(inputInteger) {
  var generatedIntegerArray = [];
  for (let i = 0; i <= inputInteger; i++) {
     generatedIntegerArray.push(i);
  }
  return generatedIntegerArray;
}
