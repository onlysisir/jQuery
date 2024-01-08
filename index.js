//Manipulating CSS
// $("h1").css("color","red")
// console.log($("h1").css("color"));

// $("h1").addClass("big-title margin-50")
// $("h1").removeClass("big-title margin-50")

// $("h1").text("Bye");
// $("button").html("<em>Hey bud</em>")

// console.log($("img").attr("src"));


// $("a").attr("href","https://www.yahoo.com")

// $("button").click(function(){
//     $("h1").css("color","purple")
// })

// $("input").keypress(function(event){
//     // console.log(event.key)
//     $("h1").text(event.key)
// })

// $("h1").on("click",function(){
//     $("h1").css("color","purple")
// })

$("button").click(function(){
    $("h1").animate({margin:"20px"});
})




