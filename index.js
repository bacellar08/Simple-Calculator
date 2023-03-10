function insert(num) {
    $("#result").append(num)
    
}

function clearDisplay() {
    $("#result").html('')
}

$(".backspace").click(function(){
    var result = $("#result").html()  
    $("#result").html(result.substring(0, result.length - 1))
})

// $(".backspace").click(function(){
//     var result = document.querySelector("#result").innerHTML    
//     document.querySelector("#result").innerHTML = result.substring(0, result.length - 1)
// })

// var backspace = document.querySelector(".backspace")
        
// backspace.addEventListener("click", () => {
    
//         var result = document.querySelector("#result").innerHTML    
//         document.querySelector("#result").innerHTML = result.substring(0, result.length - 1)
//     })


$(".btn-equal").click(function() {

    var result = $("#result").html()

    if(result) {
        $("#result").html(eval(result))
    }
})