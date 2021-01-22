$(document).ready(function () {
  $("#entry").submit(function (e) {
    let inputNum = parseInt($("input#numeral").val());
    $('input[type="number"], textarea').val('');  // to clear form of entered value after submit
    // alert(numeral);

    e.preventDefault();
    let generatedIntegerArray = [];
    generatedIntegerArray = worker(inputNum);
    $("#story").show();
    $(".inputNumber").text(inputNum.toString());
    var k = -1;
    generatedIntegerArray.forEach(function (element) {
      k++;
      let num = "<li>For input " + k + " <strong>" + element + "</strong></li>";
      $("ul#answer").append(num);

    });

  });
});

let worker = function (inputInteger) {
  var generatedIntegerArray = [];
  var manipulatedIntegerArray = [];
  manipulatedIntegerArray.splice(0,manipulatedIntegerArray.length);
  generatedIntegerArray.splice(0,generatedIntegerArray.length);
  const replacementString = ["Beep!", "Boop!", "Won't you be my neighbor?"];
  const keyNumbers = [1, 2, 3];
  let manipulatedIntegers = [];
  const rExpresssion = /[1-3]/g;  //catch digit '1' or '2' or '3' or various permutation of three
  for (let i = 0; i <= inputInteger; i++) {
    generatedIntegerArray.push(i);
  }
  generatedIntegerArray.forEach(function (generatedInteger) {
    if (generatedInteger.toString().match(rExpresssion)) {
      // console.log("generatedInteger matches RE " + generatedInteger);
      if (generatedInteger.toString().match(/3/g)) {
        manipulatedIntegers.push(replacementString[2]);
      }
      else if (generatedInteger.toString().match(/2/g)) {
        manipulatedIntegers.push(replacementString[1]);
      }
      // else if (generatedInteger.toString().match(/1/g)) {
        else {
        manipulatedIntegers.push(replacementString[0]);
      }
    }
    else {
      manipulatedIntegers.push(generatedInteger);
    }
  });
// alert(manipulatedIntegers.join(", "));
return manipulatedIntegers;
}
