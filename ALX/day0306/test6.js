$(document).ready(function () {

    $("#ukryj").click(function () {
        $("#blokTestowy").hide(1000)
    });
    $("#pokaz").click(function () {
        $("#blokTestowy").show(1000)
    });
    $("#sDown").click(function () {
        $("#blokTestowy").slideDown(1000)
    });
    $("#sUp").click(function () {
        $("#blokTestowy").slideUp(1000)
    });
    $("#fIn").click(function () {
        $("#blokTestowy").fadeIn(1000)
    });
    $("#fOut").click(function () {
        $("#blokTestowy").fadeOut(1000)
    });
    
  });