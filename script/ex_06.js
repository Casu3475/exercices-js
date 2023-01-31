window.onload = (event) => {

    async function call_api(){
    fetched = await fetch("https://data.education.gouv.fr/api/v2/catalog/datasets/fr-en-annuaire-education/records?select=%2A&limit=25&offset=0")
    result = await fetched.json();
    // return result;
    context = document.querySelector('body > div > div > footer > div');
    result.records.forEach(element => {
        // console.log(element.record.fields.nom_commune, element.record.fields.nom_etablissement, element.record.fields.mail);
        context.innerHTML += `<p><strong>Nom de commune : </strong> ${element.record.fields.nom_commune} - <strong> Nom d'établissement : </strong> ${element.record.fields.nom_etablissement} - <strong>Mail : </strong>${element.record.fields.mail}</p>`
    });
    }
    call_api();
}
