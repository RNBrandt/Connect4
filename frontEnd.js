$(document).ready(function(){
  $(".column").hover(function(e) {
    $('.hover').remove()
    var columnId = $(this).attr('id');
    var column = $('#' + columnId).children();
    if (turnCounter % 2 === 0) {
      // var p1hover = p1Icon
      $(p1Icon).addClass('hover');
      console.log(p1Icon)
      $(column[0]).html(p1Icon)
    } else
      var p2hover = p2Icon
      $(p2hover).addClass('hover');
      $(column[0]).html(p2hover)
    })
  })

  $(".column").on("click", function(e){
    // console.log(e)
    $('.hover').remove()
    var columnId = $(this).attr('id');

    var column = $('#' + columnId).children();

    var lastEmpty = ifFull(column);

    if (lastEmpty != undefined) appendToken(lastEmpty);
  });
  tokenChooser();
});

turnCounter = 0

function findEmpty(column){
  for(i=0; i< column.length; i++) {
    if ($(column[i]).attr('class') === "square full") {
      return column[i-1]
    }
  }
  return $(column).last()
}

function appendToken(lastEmpty){
  if (turnCounter % 2 === 0)
    $(lastEmpty).append(p1Icon);
  else
    $(lastEmpty).append(p2Icon);
    $(lastEmpty).addClass('full');
    turnCounter += 1
}

function ifFull(column){
  if($(column[1]).attr("class")=== "square full")
    alert("Column already full");
  else
    return findEmpty(column)
}

function tokenChooser (){
  $(".dropdown-content a img").click(function(e){
    e.preventDefault();
    p1Icon = "<img class='token' src = " + $(this).attr('src') + " >" ;
    $("#button_left").hide();
  })
}

$(".dropdown-content-2 a img").click(function(e){
  e.preventDefault();
  p2Icon = "<img class='token' src = " + $(this).attr('src') + " >" ;
  $("#button_right").hide();
})
