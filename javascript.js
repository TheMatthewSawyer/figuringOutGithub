document.getElementById("test").addEventListener("click", function(){
    document.getElementById("test").value = "CAGE";
    document.getElementById("text").innerHTML = "CAGE";
    document.getElementById("text").style.backgroundColor = "green";
    document.getElementById("image1").style.opacity = "0";
    var x = Math.floor(Math.random() * 899 + 100);
    var y = Math.floor(Math.random() * 899 + 100);
    var z = x.toString() + "/" + y.toString();
    document.getElementById("image1").src = "https://www.placecage.com/" + z
    document.getElementById("image1").style.opacity = "1";

});