window.onload = (event) => {
    const popupDisplay = document.querySelector("body > div > div > footer > div");

    popupDisplay.addEventListener("click", () => {  
    let text;
    let popup = prompt('What is your name ?');
    let person = confirm('Are you sure ' + popup + ' is your name ?');

    if (popup == null || popup == "") {
      text = "Please enter a name";
    } else {
      text = "Hello " + popup;
    }
    popupDisplay.innerHTML = text;
    let alertPopup = alert('Hello ' + popup);

  });
}