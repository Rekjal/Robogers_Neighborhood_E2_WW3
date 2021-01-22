$(document).ready(function () {  
  $("#entry").submit(function (e) {
    let inputNum = parseInt($("input#numeral").val());
    $('input[type="number"], textarea').val('');  // to clear form of entered value after submit
    // alert(numeral);
    $("#story").show();
    e.preventDefault();
    let generatedIntegerArray = [];
    generatedIntegerArray = worker(inputNum);
  });
});

let worker = function(inputInteger) {
  var generatedIntegerArray = [];
  for (let i = 0; i <= inputInteger; i++) {
     generatedIntegerArray.push(i);
  }
  return generatedIntegerArray;
}
