let clicar = setInterval(function() {
    var mineSelectorList = document.querySelectorAll(".sc-fzqNqU.kikdAh");
    loop(mineSelectorList.length - 1)
}, 10000)

function loop(i){
    setTimeout(function(){
        var mineSelectorList = document.querySelectorAll(".sc-fzqNqU.kikdAh");
        if(mineSelectorList[i].offsetHeight > 0){
            mineSelectorList[i].click()
            setTimeout(function(){
                document.getElementById("mine-equipament").click()
            }, 1000)
        }
        i--
        if(i >= 0 ){
            loop(i)
        }  
    }, 2000)
}
