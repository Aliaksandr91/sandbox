$(document).ready(function(){

    $("button").click(function(){

        $.ajax({
            type:"POST",
            dataType:"json",
            url: "test.php",
            data:{
                
                "imie" : $("#imie").val()

            },

            success: function(dane){
                console.log(dane);
            },
            beforeSend: function(){
                $("#preloader").css("display", "block");
            },
            complete: function(){
                $("#preloader").css("display", "none");
            },
            error: function(xhr){
                console.log("BLAD", xhr.responseText);
            }

        })

    });

})

