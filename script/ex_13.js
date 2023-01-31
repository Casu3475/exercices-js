window.onload = (event) => {

    try{
            localStorage.setItem("ex12_img", "https://www.coding-academy.fr/wp-content/uploads/2017/10/CODING_LOGO_CMJN.png");
            }
    
    catch (error){
            alert("l'image n'est pas stockée dans le localstorage");
            }
    
    let display = document.querySelector('body > div > div > footer > div');
    const image = localStorage.getItem("ex12_img");
    const img = new Image();
    img.src = image;
    display.appendChild(img);
    img.style.width = "100%";
    img.style.height = "100%";
    // document.body.appendChild(img)


    display.onmouseenter = function() 
    {
        myInterval = setInterval(function(){img.style.transform += "scale(0.95)"},1000);
        // img.style.width = "95%";
        // img.style.height = "95%";
    };

    
    display.onmouseleave = function()
    {
        clearInterval(myInterval);
        setTimeout(function(){img.style.transform = "scale(1)"},0);

    };


    display.onclick = function()
    {
       localStorage.removeItem("ex12_img");

    };

}










