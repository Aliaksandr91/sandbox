$(document).ready(function () {

  $('#bold span').click(function() {
    if ($(this).attr("class") == 'dodaj') {
        $('#napisTestowy').addClass('bold')
    }
    if ($(this).attr("class") == 'usun') {
        $('#napisTestowy').removeClass('bold')
    }

  })

  $('#borderBottom span').click(function() {
    if ($(this).attr("class") == 'dodaj') {
        $('#napisTestowy').addClass('borderBottom')
    }
    if ($(this).attr("class") == 'usun') {
        $('#napisTestowy').removeClass('borderBottom')
    }
  })

  $('#fontSize30 span').click(function() {

    if ($(this).attr("class") == 'dodaj') {
        $('#napisTestowy').addClass('fontSize30')
    }
    if ($(this).attr("class") == 'usun') {
        $('#napisTestowy').removeClass('fontSize30')
    }
  })

  $('#colorRed span').click(function() {

    if ($(this).attr("class") == 'dodaj') {
        $('#napisTestowy').addClass('colorRed')
    }
    if ($(this).attr("class") == 'usun') {
        $('#napisTestowy').removeClass('colorRed')
    }

  })


//   $("span").click(function(){

//     let dzialanie = $(this).attr("class");
//     let id = $(this).parent().attr("id");
    
//     if(dzialanie == "dodaj"){
//         $("#napisTestowy").addClass(id);
//     }
//     else if(dzialanie == "usun"){
//         $("#napisTestowy").removexClass(id);
//     }

// })

  });