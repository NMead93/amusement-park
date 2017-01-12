$(document).ready(function() {
  $(".blanks form").submit(function (event) {
    event.preventDefault();
    $(".kiddy, .ferris, .coaster").css("background-color", "white");
    var height = $("#height").val();

    if (height >= 52) {
      $(".coaster").css("background-color", "yellow");
      $(".ferris").css("background-color", "yellow");
    } else if (height >= 36 && height < 52) {
      $(".ferris").css("background-color", "yellow");
    } else {
      $(".kiddy").css("background-color", "yellow");

    }
  })
})
