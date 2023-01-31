window.onload = (event) => {

try{
        localStorage.setItem("ex12_img", "https://www.coding-academy.fr/wp-content/uploads/2017/10/CODING_LOGO_CMJN.png");
        }

catch (error){
        alert("l'image n'est pas stockée dans le localstorage");
        }

let display = document.querySelector('body > div > div > footer > div');
const image = localStorage.getItem("ex12_img");
// console.log(image);
display.innerHTML = image;

}












