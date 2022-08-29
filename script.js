let textword=document.querySelector(".word");
let hinttext=document.querySelector('.hint');
let timeEl=document.querySelector('.timeCounter');
let inputEl=document.querySelector('.input');
let btnEl=document.querySelector('.submit');
let btnAktualiser=document.querySelector('.aktualiser');
let correctWord,timer;


const inittime= maxtime =>{
  clearInterval(timer);
  timer=setInterval(() => {
    if(maxtime>0){
      maxtime--;
      return timeEl.innerHTML=maxtime;
    }
    clearInterval(timer);
    alert(`Zeit aus ${correctWord}  ist die richtige Antwort`);
    initGame();
  },1000) 
}

const initGame=()=>{
  inittime(30);
    let RandoObj=words[Math.floor(Math.random()*words.length)];
    let arryobj=RandoObj.word.split("");
    for(let i=arryobj.length - 1;i>0;i--){
        let j=Math.floor(Math.random()*(i+1));
            [arryobj[i],arryobj[j]]=[arryobj[j],arryobj[i]];
    }
      textword.innerHTML=arryobj.join(" ");
      hinttext.innerHTML=RandoObj.hint;
      correctWord=RandoObj.word.toLocaleLowerCase();
      inputEl.value="";
      inputEl.setAttribute("maxlength",correctWord.length);
    }
    initGame();
    
    const submitword=()=>{
      let userword= inputEl.value.toLocaleLowerCase();

      if(!userword) return alert("bitte gib das wort ein");

      if(userword!==correctWord) return alert(`leider ${userword} ist  nicht richtig`);
      alert(`super ${userword.toUpperCase()}  richtig`);
      initGame();
    }
    btnAktualiser.addEventListener("click",initGame);
    btnEl.addEventListener('click',submitword);
    