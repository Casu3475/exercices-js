window.onload = (event) => {
function save_file(result)
{
    console.log(result);
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    blob = new Blob([JSON.stringify(result)], {type: "text/plain"}),
    url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = "data.txt";
    a.click();
    window.URL.revokeObjectURL(url);
}

button = document.querySelector("body > div > div > footer > div > button")
button.addEventListener("click", function() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((promise) => promise.json())
    .then((result) => {
        save_file(result);
    }) 
})
};







