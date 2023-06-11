$(document).ready(function () {
  let count = 0;

  $("img").mouseover(function () {
    count++;
    $("#licznik").html(count);
  });
  
});
