// var fullName;

// let langSelector = function (area) {
//   let chosenTrack;
//   switch (area) {
//     case 'Front-End':
//       chosenTrack = "HTML/CSS/JavaScript";
//       break;
//     case 'Back-End':
//       chosenTrack = "C#/Ruby/Python";
//       break;
//     case 'Full-Stack':
//       chosenTrack = "HTML/CSS/JavaScript and C#/Ruby/Python";
//       break;
//     default:
//       chosenTrack = "HTML/CSS/JavaScript";
//       break;
//   }
//   return chosenTrack;
// }

$(document).ready(function () {  
  $("#entry").submit(function (e) {
    let numeral = parseInt($("input#numeral").val());
    alert(numeral);
    $("#story").show();
    e.preventDefault();
  });
});
