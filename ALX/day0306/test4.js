$(document).ready(function () {
  
    $("input").keyup(function () {
        let text = $("input").val();
        $("#klon").html(text)
    });
    
  });