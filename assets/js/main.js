const copyId = document.querySelector("[data-footer]");


 addEventOnListener(logobarId, "mouseover", logoanimation)

let myname= {
    dname : "Azgar khan",
    mobile: 8801818147263
}


window.addEventListener('load', function(){
    localStorage.setItem("myinfo", JSON.stringify(myname));
    loadcopyright();
});

let newmyinfo = JSON.parse(localStorage.getItem('myinfo'));

const loadcopyright = function(){
    copyId.innerHTML = `&#169; Psd convert html by <a href="https://www.facebook.com/azgarbd?mibextid=ZbWKwL">${newmyinfo.dname}</a> |  WhatsApp Contac +${newmyinfo.mobile}`
}

