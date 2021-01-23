// This is the business (or back-end) logic:
let beepBoop = function (inputInteger, orderCB, subName) {
  let generatedIntegers = [];
  let manipulatedIntegers = [];
  generatedIntegers.splice(0, generatedIntegers.length);
  manipulatedIntegers.splice(0, manipulatedIntegers.length);
  const thirdMessage = (subName === "") ? "Won't you be my neighbor?" : "Won't you be my neighbor, " +subName +"?";
  const replacementString = ["Beep!", "Boop!", thirdMessage];
  const keyNumbers = [1, 2, 3];
  const rExpresssion = /[1-3]/g;  //catch digit '1' or '2' or '3' or various permutation of three
  for (let i = 0; i <= inputInteger; i++) {
    generatedIntegers.push(i);
  }
  generatedIntegers.forEach(function (generatedInteger) {
    if (generatedInteger.toString().match(rExpresssion)) {
      if (generatedInteger.toString().match(/3/g)) {
        manipulatedIntegers.push(replacementString[2]);
      }
      else if (generatedInteger.toString().match(/2/g)) {
        manipulatedIntegers.push(replacementString[1]);
      }
      else { // else if (generatedInteger.toString().match(/1/g)) {
        manipulatedIntegers.push(replacementString[0]);
      }
    }
    else {
      manipulatedIntegers.push(generatedInteger.toString());
    }
  });

  if (orderCB) {
    return manipulatedIntegers.reverse().slice();
  }
  else {
    return manipulatedIntegers;
  }
}


// Everything below this line is the user interface (or front-end) logic:
$(document).ready(function () {
  $("#entry").submit(function (e) {
    $("#story").hide();
    var cBClicked = false;
    let inputNum = parseInt($("input#numeral").val());
    $('input[type="number"], textarea').val('');  // to clear form of entered value after submit
    let subName = $("input#subName").val();
    $('input[type="text"], textarea').val('');  // to clear form of entered value after submit
    $("input:checkbox[name=order]:checked").each(function () {
      cBClicked = true;
      $("#cb").prop('checked', false); // to clear form of entered value after submit  
    });
    let finalIntegerArray = [];
    finalIntegerArray.splice(0, finalIntegerArray.length);
    finalIntegerArray = beepBoop(inputNum, cBClicked, subName);
    $("#story").show();
    $(".inputNumber").text(inputNum.toString());
    let k = -1;
    let step = 0;
    if (cBClicked === false) {
      k = 0;
      step = 1;
    }
    else {
      k = inputNum;
      step = -1;
    }
    $("ul#answer").empty();
    $("ul#question").empty();
    finalIntegerArray.forEach(function (element) {
      let textQuestion = "<li>Numeral " + k + "</li>";
      let textAnswer = "<li><strong>" + element + "</strong></li>";
      $("ul#question").append(textQuestion);
      $("ul#answer").append(textAnswer);
      k = k + step;
    });
    e.preventDefault();
  });
});