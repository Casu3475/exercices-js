window.onload = (event) => {

    // ----------------------------creation cookie + empty firstbox--------------------------------------
    let setCookie = document.querySelector('body > div > div > footer > div > a');
    let firstBox = document.querySelector('body > div > div > footer > div:nth-child(1)'); 

    setCookie.onclick = function(){
        document.cookie = "acceptsCookies=true; max-age=86400; path=/";
        // console.log(document.cookie);
        firstBox.innerHTML = "";
    }

    // --------------------------creation 2e box + suppression cookies----------------------------------
    let newDiv = document.createElement('div');
    newDiv.innerHTML = `<button id="delete">Delete cookie</button>`;
    firstBox.after(newDiv);
    let deleteCookie = document.getElementById("delete");

    deleteCookie.onclick = function(){
    document.cookie="acceptsCookies=true; max-age=0"; ;
    newDiv.remove();
    firstBox.innerHTML = `This website use cookies, click OK to accept it. <a href="#">OK</a>`;
}
}