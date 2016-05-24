$(document).ready(
  function(){
    addMatrix(4,4,90);
    makeBlue();
  }
);


var addMatrix = function(numRows, nowCols, size){
  //Total size should be 90*4 = 360

  for(var i = 0; i < numRows; i++){
    $('#top_div').append("<div id = 'row" + i +"'></div>"); //creating new row
    //console.log("Created new row:" + i);
    
    for(var j = 0; j < nowCols; j++){ //creating 4 boxes
      $("#row" + i).append("<div class = 'box'></div>");
      //console.log("Created new box, j: " + j);
    }
  }
  $(".box").height(size);
  $(".box").width(size);
};

var makeBlue = function(){
  $(".box").mouseenter(function(){
    $(this).addClass("blue_box");
  });
};

var buttonClick = function(){
  $(".box").removeClass("blue_box");
  numOfSquares = prompt("How many squares do you want on the side?");
  console.log(numOfSquares);

  if (isNaN(numOfSquares)){
    console.log("Not a number! Idiot!");
  }
  else{
    //removing current matrix and readding top_div
    $("#top_div").remove();
    $("body").append("<div id='top_div'></div>");

    //creating new matrix
    addMatrix(numOfSquares,numOfSquares,Math.round(360/numOfSquares));
    makeBlue();
  }
};