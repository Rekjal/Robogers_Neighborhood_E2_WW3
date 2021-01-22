$(document).ready(function () {
  $("#entry").submit(function (e) {
    let inputNum = parseInt($("input#numeral").val());
    $('input[type="number"], textarea').val('');  // to clear form of entered value after submit
    // alert(numeral);

    e.preventDefault();
    let generatedIntegerArray = [];
    generatedIntegerArray = worker(inputNum);
    $("#story").show();
    generatedIntegerArray.forEach(function (element) {
      let num = "<li><strong>" + element + "</strong></li>";
      $("ul#answer").append(num);
    });

  });
});

let worker = function (inputInteger) {
  var generatedIntegerArray = [];
  var manipulatedIntegerArray = [];
  const replacementString = ["Beep!", "Boop!", "Won't you be my neighbor?"];
  const keyNumbers = [1, 2, 3];
  let manipulatedIntegers = [];
  const rExpresssion = /[1-3]/g;  //catch digit '1' or '2' or '3' or various permutation of three
  for (let i = 0; i <= inputInteger; i++) {
    generatedIntegerArray.push(i);
  }
  generatedIntegerArray.forEach(function (generatedInteger) {
    if (generatedInteger.toString().match(rExpresssion)) {
      console.log("generatedInteger matches RE " + generatedInteger);
    }
  });
  return generatedIntegerArray;
}
