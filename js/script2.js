alert("cookie:"+document.cookie)
alert(document.cookie.substring(12))
var instruments = (parseInt(document.cookie.substring(12)) + 1).toString();
alert(instruments)
document.cookie="instruments=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.cookie="instruments="+instruments+";path=/";
alert("cookie:"+document.cookie)


