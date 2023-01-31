window.onload = (event) => {

document.querySelector('body > div > div > section > input').addEventListener('input', function(){
        if(this.value.length == 5) {
            let url = 'https://apicarto.ign.fr/api/codes-postaux/communes/75017';
            // return url;
            // console.log(url);
            

async function call_api(){
        fetched = await fetch(url);
        result = await fetched.json();
        context = document.querySelector('body > div > div > footer > div');

        console.log(result);
        result.forEach(element => {
            // console.log(element.nomCommune, element.libelleAcheminement);
            context.innerHTML += `<p><strong>Nom de commune : </strong> ${element.nomCommune} - <strong> Libellé d'acheminement : </strong> ${element.libelleAcheminement}</p>`
        });
        }
    
        call_api();
    }
})
}

