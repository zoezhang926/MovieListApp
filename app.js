$(".btn").click(function(){
    var addMovie=$("input").eq(0).val();
    var addRating=$("input").eq(1).val();
    if(addMovie!=null & addMovie!="" & addRating!=null & addRating!=""){
        var text = "<tr><td>"+addMovie+"</td><td>"+addRating+"</td><td><button class='deleteButton'>Delete</button></td></tr>";
        $("table").append(text);
    }else{
        alert("You need fill both columns!")
    }
    $("div input").val("");
    $(".deleteButton").click(function(){
        $(this).parents("tr").remove();
    })   
})
$(".deleteButton").click(function(){
    $(this).parents("tr").remove();
})

   


