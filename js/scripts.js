$(document).ready(function() {
  $("#politics").submit(function(event){
    event.preventDefault();

    var environment = parseInt($("input#environment").val());
    var gun_control = parseInt($("input#gun_control").val());
    var abortion = parseInt($("input#abortion").val());
    var welfare = parseInt($("input#welfare").val());

    if ((environment + abortion) > (gun_control + welfare)) {
      $("#liberal").show();
    } else {
      $("#conservative").show();
    }
  });
});
