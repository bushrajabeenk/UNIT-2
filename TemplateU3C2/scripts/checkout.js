

document.querySelector("#order-form").addEventListener("submit", function(e){

    e.preventDefault();

    setTimeout(function(){
        alert("Your order is accepted");
    })

    setTimeout(function(){
        alert("Your order is being cooked");
    }, 3000)

    setTimeout(function(){
        alert("Your order is ready");
    }, 8000)

    setTimeout(function(){
        alert("Order out for delivery");
    }, 10000)

    setTimeout(function(){
        alert("Order delivered");
    }, 12000)

})