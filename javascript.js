document.getElementById("test").addEventListener("click", function(){
    document.getElementById("test").value = "CAGE";
    document.getElementById("text").innerHTML = "CAGE";
    document.getElementById("text").style.backgroundColor = "green";
    document.getElementById("image").style.opacity = "1";
    for(var i = 0; i < 11; i++) {
        var x = Math.floor(Math.random() * Math.floor(999));
        var y = Math.floor(Math.random() * Math.floor(999));
        var z = x.toString() + "/" + y.toString();
        document.getElementById("image1").src = "https://www.placecage.com/" + z
        //document.getElementById("image1").src = "https://www.placecage.com/200/200"
        document.getElementById("image1").style.opacity = "1";

    }
});