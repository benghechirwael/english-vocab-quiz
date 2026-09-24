
const ecout= document.getElementById("listenButton");
const tenta= document.getElementById("tentatives");
const repinput= document.getElementById("repinput");
const result=document.getElementById("resultat");
const verifier=document.getElementById("verifier");
const suivant=document.getElementById("suivant");
const btnRejouer = document.getElementById("btnRejouer");
const words= [ "beautiful","house","computer","school","family","water","friend","apple","car","morning"];

let word= words[Math.floor(Math.random()*words.length)]
let tentatives=0;
let block =false;
tenta.textContent="tentatives :0";

ecout.addEventListener("click",function(){
    const speech= new SpeechSynthesisUtterance(word);
    speech.lang= "en-US";
    speechSynthesis.speak(speech);

});


verifier.addEventListener("click",function(){
    
    if (block) return;
const useranswerd=repinput.value.trim().toLowerCase();
if(useranswerd===word )
    
    {
        result.textContent="✅ Correct !";
        result.style.color= "green";
        block=true;
        suivant.style.display = "block";
    }else{
        tentatives++;
        tenta.textContent= "tentative:"+ tentatives;
        result.textContent=" faux, essaie a nouveau";
        result.style.color="red";
       
    }
     if(tentatives>=3){
            result.textContent="Désolé, tu as perdu ! Le mot était : " + word;
            result.style.color= "red";
            repinput.value="";
            tenta.textContent="Tentatives : 0";
            tentatives=0;
            block=true;
             btnRejouer.style.display = "block";
        }


});

function nouveauTour() {
    word = words[Math.floor(Math.random() * words.length)];
    result.textContent = "";
    tentatives = 0;
    repinput.value = "";
    tenta.textContent = "Tentatives : 0";
    result.style.color = "";
    block = false;
    suivant.style.display = "none";
    btnRejouer.style.display = "none";
}
suivant.addEventListener("click", nouveauTour);
btnRejouer.addEventListener("click", nouveauTour);