alert("cookie:"+document.cookie)
var bouton1 = document.getElementById("bouton1");
var bouton2 = document.getElementById("bouton2");
var instruments = document.cookie.substring(12)
alert(instruments)
if (instruments == "1")
{
	bouton1.style.display = "block"
	alert("condition1")
}
if (instruments == "2")
{
	bouton1.style.display = "block"
	bouton2.style.display = "block"
	alert("condition2")
}