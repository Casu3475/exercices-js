window.onload = (event) => {

    const chooseFile= document.querySelector('body > div > div > footer > div > form > input[type=file]:nth-child(1)');
    valider = document.querySelector('body > div > div > footer > div > form > input[type=submit]:nth-child(2)');
    valider.addEventListener("click", e =>{
        e.preventDefault();
        fetchFile(chooseFile.value);
    })

    function fetchFile(url){
        fetch(url)
        .then(res => res.blob())
        .then(file => {
            let tUrl = URL.createObjectURL(file);
            let Tag = document.createElement("a");
            Tag.href = tUrl;
            Tag.download = url.replace(/^.*[\\/]/, '');
            document.body.appendChild(Tag);
            Tag.click();
            Tag.remove();
            URL.revokeObjectURL(tUrl);

         }).catch(() => {
            alert("failed to download the file!")
         })
  
}

}