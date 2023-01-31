window.onload = (event) => {

    const btn1 = document.querySelector("body > div > div > footer > div > button:nth-child(1)");
    const btn2 = document.querySelector("body > div > div > footer > div > button:nth-child(2)");
    const btn3 = document.querySelector("body > div > div > footer > div > select");

    btn1.addEventListener('click', (e) => {
        txt = document.querySelector("body");
        style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
        currentSize = parseFloat(style);
        txt.style.fontSize = (currentSize + 1) + 'px';
        });

    btn2.addEventListener('click', (e) => {
        txt = document.querySelector("body");
        style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
        currentSize = parseFloat(style);
        txt.style.fontSize = (currentSize - 1) + 'px';
        });

    btn3.addEventListener('change', (e) => {
        background = document.querySelector("body");              
        background.style.backgroundColor = e.target.value;
        body.style.backgroundColor = e.target.value;
        });
    






}



