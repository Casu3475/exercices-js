window.onload = (event) => {

    const last42 = document.querySelector("body > div > div > footer > div");

    const input = document.addEventListener('keydown', (e) => {

    if (last42.innerText.length <= 42) {
    let write = (`${e.key}`);
    last42.innerText += write;
    } else {}

});
}




