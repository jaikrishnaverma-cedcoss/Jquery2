$(document).ready(function(){
    
    $("div h1:first-child").css("background-color","green");
    $("body").css("background-color","red");
    $("form input").hide();
    $("form input").show();
    $("#click").click(function ()
    {
        $("#selected option[value='value4']").prop('selected', true);
    });
    $("#click5").click(function()
    {
        $("#form5 input[value='Car']").attr('checked', "true");
    });
    // commented due to collapse reason
    // $('.allContent').html($("body").html()); 
    $(".question7").on("click","li",function()
    {
        alert($(this).html());
    });

    $('#oneAnswer li').each(function (i) {

        var index = $(this).index();
        var text = $(this).text();
        var value = $(this).attr('value');
        console.log('Index is: ' + index + ' and text is ' + text + ' and Value ' + value);
    });



    $(".div8").on("click","#btn8",function()
    {
        // $("#ul7 li").each(function()
       
       
        $('#ul7 li').each(function(i){
            var myText = "";
           console.log($(this).text(i+""+$(this).text()));
    
        });
        $('#ul7').attr("id","");
       
        });
        $(".box9").on("click","#btn9",function()
        {
            let link=window.prompt("Enter The link");
            let Title=window.prompt("Enter The Title");
            if (link != null && Title != null ) {
                $("#anchor9").attr("href",link);
                $("#anchor9").text(Title);
            }
        })
   
})