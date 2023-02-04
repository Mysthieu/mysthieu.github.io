alert("script1")
var pseudo = prompt("Entrez votre pseudo");
document.getElementById('pseudo').innerHTML = pseudo;
var instruments = "0"
document.cookie="pseudo="+pseudo+";path=/;";
alert("cookie:"+document.cookie)
