console.log('hello')

let audioA = document.getElementById('audio-A');
let audioS = document.getElementById('audio-S');
let audioD = document.getElementById('audio-D');
let audioF = document.getElementById('audio-F');
let audioG = document.getElementById('audio-G');
let audioH = document.getElementById('audio-H');
let audioJ = document.getElementById('audio-J');
let audioK = document.getElementById('audio-K');
let audioL = document.getElementById('audio-L');
//let keyA =  document.getElementById('key-A');

let playSound = (event) => {
  console.log(event.key)
  if (event.key == "a"){    
    audioA.currentTime = 0;
    audioA.play();
  }
  else if (event.key == "s"){    
    audioS.currentTime = 0;
    audioS.play();
  }
  else if (event.key == "d"){    
    audioD.currentTime = 0;
    audioD.play();
  }
  else if (event.key == "f"){    
    audioF.currentTime = 0;
    audioF.play();
  }
  else if (event.key == "g"){    
    audioS.currentTime = 0;
    audioS.play();
  }
  else if (event.key == "h"){    
    audioH.currentTime = 0;
    audioH.play();
  }
  else if (event.key == "j"){    
    audioJ.currentTime = 0;
    audioJ.play();
  }
  else if (event.key == "k"){    
    audioK.currentTime = 0;
    audioK.play();
  }
  else if (event.key == "l"){    
    audioL.currentTime = 0;
    audioL.play();
  }
  
}

//setTimeout(playSound, 10000)

//keyA.onclick = playSound

window.addEventListener('keydown', playSound);