var instruments = (parseInt(document.cookie.substring(12)) + 1).toString();
document.cookie="instruments=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
document.cookie="instruments="+instruments+";path=/"; 


