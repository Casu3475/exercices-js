window.onload = (event) => {
 
    async function call_bitcoinStorage(){
        fetched = await fetch ("https://api.coindesk.com/v1/bpi/currentprice.json")
        result = await fetched.json();
        let bitcoin = result.bpi.EUR.rate_float;
        localStorage.setItem("bitcoin", bitcoin);
    }
    call_bitcoinStorage();
    let previousBitcoin = Number(localStorage.getItem("bitcoin"));
 

    let actualBitcoin = "";
    async function call_actualBitcoin(){
        fetched = await fetch ("https://api.coindesk.com/v1/bpi/currentprice.json")
        result1 = await fetched.json();
        actualBitcoin = Number(result1.bpi.EUR.rate_float);
    }
    call_actualBitcoin();
 

    if(actualBitcoin>previousBitcoin){
        document.querySelector("body > div > div > footer > div > span").style.backgroundColor='green';
    }
    if (actualBitcoin==previousBitcoin){
        document.querySelector("body > div > div > footer > div > span").style.backgroundColor='orange';
    }
    if (actualBitcoin<previousBitcoin){
        document.querySelector("body > div > div > footer > div > span").style.backgroundColor='red';
    }
};

