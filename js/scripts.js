var triangle = function(sideOne, sideTwo, sideThree){

  if (sideOne === sideTwo && sideTwo=== sideThree){
    return "equilateral";
  }

  else if (sideOne === sideTwo || sideTwo === sideThree || sideThree === sideOne){
    return "Isosceles"
  }

  else if (sideOne + sideTwo <= sideThree || sideThree + sideOne <= sideTwo || sideTwo + sideThree <=sideOne){
    return "not a triangle"
  }

  else if (sideOne !== sideTwo && sideTwo !== sideThree && sideOne !== sideThree){
    return "scalene";
  }

  else {
    console.log("something's wrong"); 
  }

};

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var sideOne = parseInt($("input#sideOne").val());
    var sideTwo = parseInt($("input#sideTwo").val());
    var sideThree = parseInt($("input#sideThree").val());
    var result = triangle(sideOne, sideTwo, sideThree);

    sideOne = parseInt($("input#sideOne").val(""));
    sideTwo = parseInt($("input#sideTwo").val(""));
    sideThree = parseInt($("input#sideThree").val(""));

    $("#result").text(result);
    event.preventDefault();
  });
});
