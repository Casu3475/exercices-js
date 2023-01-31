window.onload = (event) => {
    const counterDisplay = document.querySelector("body > div > div > footer > div");
    let counter = 0;   //je crée un compteur

    counterDisplay.addEventListener("click", () => {  //je crée un évènement, quand je clique sur ce que je pointe, le compteur tourne
    counter ++;
    counterDisplay.textContent = counter;
    });
}