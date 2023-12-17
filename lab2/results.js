const urlParams = new URLSearchParams(window.location.search);
document.getElementById("name").innerHTML = urlParams.get("name");
document.getElementById("variant").innerHTML = urlParams.get("variant");
document.getElementById("group").innerHTML = urlParams.get("group");
document.getElementById("phone").innerHTML = urlParams.get("phone");
document.getElementById("idCard").innerHTML = urlParams.get("idCard");
