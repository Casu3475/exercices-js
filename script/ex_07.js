window.onload = (event) => {
    canva = document.querySelector('body > div > div > footer > div:nth-child(1) > canvas');
    if (canva.getContext) {
    const ctx = canva.getContext('2d');
    
   ctx.fillStyle = 'white';
   ctx.linewidth=1;
   ctx.beginPath();
   ctx.moveTo(6,6);
   ctx.lineTo(14,10);
   ctx.lineTo(6,14);
   ctx.fill();
    }

    let myAudio = document.createElement("audio");
        myAudio.src = "./triangle.ogg";
        

    let play = canva.onclick = function ()
    {
        myAudio.play();
    }
 
    let pause = document.querySelector('body > div > div > footer > div:nth-child(2) > button:nth-child(1)').onclick = function ()
    {
        myAudio.pause();
        // myAudio.currentTime = 0;

    }

    let stop = document.querySelector('body > div > div > footer > div:nth-child(2) > button:nth-child(2)').onclick = function ()
    {
        myAudio.stop();
    }
 
    let mute = document.querySelector('body > div > div > footer > div:nth-child(2) > button:nth-child(3)').onclick = function ()
    {
        myAudio.mute();
    }

}
