alert(document.cookie.substring(11))
var instruments = toString(parseInt(document.cookie.substring(11))+1);
alert(instruments)
document.cookie="instruments=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.cookie="instruments="+instruments+";path=/";
alert(document.cookie)

