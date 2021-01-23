// This is the business (or back-end) logic:
let worker = function (inputInteger, orderCB) {
  let generatedIntegers = [];
  let manipulatedIntegers = [];
  generatedIntegers.splice(0, generatedIntegers.length);
  manipulatedIntegers.splice(0, manipulatedIntegers.length);
  // alert("size of real and man " + generatedIntegers.length + ":" + manipulatedIntegers.length);
  const replacementString = ["Beep!", "Boop!", "Won't you be my neighbor?"];
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
    alert("Inside orderCB yes loop");
    // alert("manipulated array is " + manipulatedIntegers.reverse());
    // let manipulatedIntegers2 = [];
    const manipulatedIntegers2 = manipulatedIntegers.reverse().slice()
    return manipulatedIntegers2;
  }
  else {
    // alert("inside orderCB no loop");
    return manipulatedIntegers;
  }
}


// Everything below this line is the user interface (or front-end) logic:
$(document).ready(function () {
  $("#entry").submit(function (e) {
    $("#story").hide();
    // $("#story").addClass("storyClass");
    var cBClicked = false;
    let inputNum = parseInt($("input#numeral").val());
    $('input[type="number"], textarea').val('');  // to clear form of entered value after submit
    $("input:checkbox[name=order]:checked").each(function () {
      cBClicked = true;
      $("#cb").prop('checked', false); // to clear form of entered value after submit  
    });
    let substituteName;
    // $("input:checkbox[name=substituteBox]:checked").each(function () {
    //   substituteName = $('#substituteName').val();
    //   alert("substituteName is " + substituteName);
    //   $('input[type="text"], textarea').val('');  // to clear form of entered value after submit  
    //   cBClicked = true;
    // });

    $("input:checkbox[name=substituteBox]:checked").each(function () {
      substituteName = $('#substituteName').val();
      $('input[type="text"], textarea').val('');  // to clear form of entered value after submit  
      cBClicked = true;
      alert("substituteName is " + substituteName);
    });


    let finalIntegerArray = [];
    finalIntegerArray.splice(0, finalIntegerArray.length);
    // alert("size of finalIntegerArray " + finalIntegerArray.length);    
    finalIntegerArray = worker(inputNum, cBClicked);
    // alert("finalIntegerArray array is " + finalIntegerArray);

    // $("#story").empty().show();
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
    finalIntegerArray.forEach(function (element) {

      let num = "<li>Numeral " + k + " <strong>" + element + "</strong></li>";
      $("ul#answer").append(num);
      k = k + step;
    });
    e.preventDefault();
  });
});