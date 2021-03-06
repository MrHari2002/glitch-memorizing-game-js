
var clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var mistakes = 0;

function startGame(){
    //initialize game variables
    mistakes = 0;
    randomizedPattern()
    progress = 0;
    gamePlaying = true;
    document.getElementById("png1").classList.add("hidden");
    document.getElementById("png2").classList.add("hidden");
    document.getElementById("png3").classList.add("hidden");
    document.getElementById("png4").classList.add("hidden");
    document.getElementById("png5").classList.add("hidden");
    document.getElementById("startbutton").classList.add("hidden");
    document.getElementById("stopbutton").classList.remove("hidden");
    playClueSequence()
}

function stopGame(){
    gamePlaying = false;
    document.getElementById("stopbutton").classList.add("hidden");
    document.getElementById("startbutton").classList.remove("hidden");
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
  showPicture(btn);
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
  removePicture(btn)
}

function showPicture(btn){
  document.getElementById("png"+btn).classList.remove("hidden")
  console.log("png"+btn)
}

function removePicture(btn){
  document.getElementById("png"+btn).classList.add("hidden")
  console.log("hide png"+btn)

}



// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 534.2
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}

function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  clueHoldTime-=30;
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won.");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
    if(pattern[guessCounter]!=btn){
      if(mistakes==3){
      loseGame()
      }
      else{
        mistakes+=1
        alert("Emm you got "+(3-mistakes)+" tries left")
      }
      
    }
    else{
      if(guessCounter==pattern.length-1){
        winGame()
      }
        if(guessCounter<progress){
          guessCounter++;
        }
        else{
          progress++;
          playClueSequence()
        }
    }
  // add game logic here
}

function randomizedPattern() {
  for(let i=0;i<pattern.length;i++){ // for each clue that is revealed so far
    pattern[i]=Math.floor((Math.random()*5+1))
  }
}



