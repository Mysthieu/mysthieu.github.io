var bouton1 = document.getElementById("bouton1");
var bouton2 = document.getElementById("bouton2");
var instruments = document.cookie.substring(11)
if (instruments == "1")
{
	bouton1.style.display = "block"
}
if (instruments == "2")
{
	bouton1.style.display = "block"
	bouton2.style.display = "block"
}