$(document).ready(function(){
  event.preventDefault();
  $("form#politics").submit(function(event){
    var environment = parseInt("input#environment").val();
    var gun_control = parseInt("input#gun_control").val();
    var abortion = parseInt("input#abortion").val();
    var welfare = parseInt("input#welfare").val();

    if ((environment + abortion) > (gun_control + welfare)){
      $("#slant")
    }

  })
});
