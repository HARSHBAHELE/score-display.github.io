let ballCount = 0;
let currentOverScore = 0;
let currentScore = 0;
let currentScore1 = 0;
let currentOver = 0;
let totalScore = 0;
let wickets = 0;
let overScores = [];
let currentTeam = 1;
let teamScores = [[], []]; 
let currentOverWk = 0;
let target = document.querySelector("#target");
const ballsContainer = document.getElementById("balls-container");
let button1 = document.querySelector("#button-1");
let button2 = document.querySelector("#button-2");
let button3 = document.querySelector("#button-3");
let button4 = document.querySelector("#button-4");
let button5 = document.querySelector("#button-5");
let button6 = document.querySelector("#button-6");
let buttondot = document.querySelector("#button-dot");
let buttonwk = document.querySelector("#button-wicket");
let buttonwb = document.querySelector("#button-wide");
let buttonnoball = document.querySelector("#button-no");
let buttonwide = document.querySelector('#button-wide');
let scoreDisplay = document.querySelector("#current-score");
let buttoncontainer = document.querySelector('.buttons-container');
let newOverbtn = document.querySelector(".button-over");
let display = document.querySelector('.score-display');
let cumulativescore = document.querySelector('.cumulative-score')

let mess = document.querySelector(".current-score");


function btndis() {
button1.disabled = true;
button2.disabled = true;
button3.disabled = true;
button4.disabled = true;
button5.disabled = true;
button6.disabled = true;
buttondot.disabled = true;
buttonwk.disabled = true;
buttonwb.disabled = true;
buttonnoball.disabled = true;
}
function btneable() {
  button1.disabled = false;
  button2.disabled = false;
  button3.disabled = false;
  button4.disabled = false;
  button5.disabled = false;
  button6.disabled = false;
  buttondot.disabled = false;
  buttonwk.disabled = false;
  buttonwb.disabled = false;
  buttonnoball.disabled = false;
}

function oneee11() {
    button1.addEventListener('click',()=> {
           if (wickets < 10 && ballCount < 6) {
           const ballsContainer = document.getElementById("balls-container");
             const ball = document.createElement("div");
             ball.classList.add("ball");
             ball.innerText = 1;
             ballsContainer.appendChild(ball);
             ballCount++;
             currentScore+=1;
             totalScore+=1
             currentOverScore+=1;
             console.log(`runs in this over ${currentOverScore}`);
             wickets +=0;
             scoreDisplay.innerHTML=`Current Score: ${currentScore} Runs and ${wickets} wickets`
           if(ballCount===6) {
            btndis()
              newOverbtn.classList.remove('hide')
              currentOver+=1;
              const overScoreElement = document.createElement("div");
              overScoreElement.innerText=`Team ${currentTeam}, Over ${currentOver}: ${currentOverScore} runs, wickets ${currentOverWk}`
              cumulativescore.appendChild(overScoreElement);
              overScoreElement.innerHTML=`Team ${currentTeam}, Over ${currentOver}: ${currentOverScore} runs, wickets ${currentOverWk}`
              ballCount=0
              currentOverScore=0;
              console.log(currentOver)
          }
          newOverbtn.addEventListener('click',()=> {
            currentOverWk=0
            newOverbtn.classList.add('hide')
            btneable();
            ball.classList.remove('ball');
            ball.remove();
            endening();
            });
         }
         winner();
       })
       button2.addEventListener('click',()=> {
        if (wickets < 10 && ballCount < 6) {
        const ballsContainer = document.getElementById("balls-container");
          const ball = document.createElement("div");
          ball.classList.add("ball");
          ball.innerText = 2;
          ballsContainer.appendChild(ball);
          ballCount++;
          currentScore+=2;
          totalScore+=2
          currentOverScore+=2;
          wickets +=0;
          scoreDisplay.innerHTML=`Current Score: ${currentScore} Runs and ${wickets} wickets`
          
        if(ballCount===6) {
         btndis()
           newOverbtn.classList.remove('hide')
           currentOver+=1;
           const overScoreElement = document.createElement("div");
           overScoreElement.innerText=`Team ${currentTeam}, Over ${currentOver}: ${currentOverScore} runs, wickets ${currentOverWk}`
           cumulativescore.appendChild(overScoreElement);
           overScoreElement.innerHTML=`Team ${currentTeam}, Over ${currentOver}: ${currentOverScore} runs, wickets ${currentOverWk}`
           ballCount=0
           currentOverScore=0;
       }
       newOverbtn.addEventListener('click',()=> {
        currentOverWk=0;
         newOverbtn.classList.add('hide')
         btneable();
         ball.classList.remove('ball');
         ball.remove();
         endening();
         });
      }
      winner();
    })
    button3.addEventListener('click',()=> {
      if (wickets < 10 && ballCount < 6) {
      const ballsContainer = document.getElementById("balls-container");
        const ball = document.createElement("div");
        ball.classList.add("ball");
        ball.innerText = 3;
        ballsContainer.appendChild(ball);
        ballCount++;
        currentScore+=3;
        totalScore+=3
        currentOverScore+=3;
        wickets +=0;
        scoreDisplay.innerHTML=`Current Score: ${currentScore} Runs and ${wickets} wickets`
        
      if(ballCount===6) {
       btndis()
         newOverbtn.classList.remove('hide')
         currentOver+=1;
         const overScoreElement = document.createElement("div");
         overScoreElement.innerText=`Team ${currentTeam}, Over ${currentOver}: ${currentOverScore} runs, wickets ${currentOverWk}`
         cumulativescore.appendChild(overScoreElement);
         overScoreElement.innerHTML=`Team ${currentTeam}, Over ${currentOver}: ${currentOverScore} runs, wickets ${currentOverWk}`
         ballCount=0
         currentOverScore=0;
         
     }
     newOverbtn.addEventListener('click',()=> {
      currentOverWk=0
       newOverbtn.classList.add('hide')
       btneable();
       ball.classList.remove('ball');
       ball.remove();
       endening()
       });
    }
    winner();
  })
  button4.addEventListener('click',()=> {
    if (wickets < 10 && ballCount < 6) {
    const ballsContainer = document.getElementById("balls-container");
      const ball = document.createElement("div");
      ball.classList.add("ball");
      ball.innerText = 4;
      ballsContainer.appendChild(ball);
      ballCount++;
      currentScore+=4;
      totalScore+=4
      currentOverScore+=4;
      wickets +=0;
      scoreDisplay.innerHTML=`Current Score: ${currentScore} Runs and ${wickets} wickets`
      
    if(ballCount===6) {
     btndis()
       newOverbtn.classList.remove('hide')
       currentOver+=1;
       const overScoreElement = document.createElement("div");
       overScoreElement.innerText=`Team ${currentTeam}, Over ${currentOver}: ${currentOverScore} runs, wickets ${currentOverWk}`
       cumulativescore.appendChild(overScoreElement);
       overScoreElement.innerHTML=`Team ${currentTeam}, Over ${currentOver}: ${currentOverScore} runs, wickets ${currentOverWk}`
       ballCount=0
       currentOverScore=0;
   }
   newOverbtn.addEventListener('click',()=> {
    currentOverWk=0
     newOverbtn.classList.add('hide')
     btneable();
     ball.classList.remove('ball');
     ball.remove();
     endening()
     });
  }
  winner();
})
button5.addEventListener('click',()=> {
  if (wickets < 10 && ballCount < 6) {
  const ballsContainer = document.getElementById("balls-container");
    const ball = document.createElement("div");
    ball.classList.add("ball");
    ball.innerText = 5;
    ballsContainer.appendChild(ball);
    ballCount++;
    currentScore+=5;
    totalScore+=5
    currentOverScore+=5;
    wickets +=0;
    scoreDisplay.innerHTML=`Current Score: ${currentScore} Runs and ${wickets} wickets`
    
  if(ballCount===6) {
   btndis()
     newOverbtn.classList.remove('hide')
     currentOver+=1;
     const overScoreElement = document.createElement("div");
     overScoreElement.innerText=`Team ${currentTeam}, Over ${currentOver}: ${currentOverScore} runs, wickets ${currentOverWk}`
     cumulativescore.appendChild(overScoreElement);
     overScoreElement.innerHTML=`Team ${currentTeam}, Over ${currentOver}: ${currentOverScore} runs, wickets ${currentOverWk}`
     ballCount=0
     currentOverScore=0;
 }
 newOverbtn.addEventListener('click',()=> {
  currentOverWk=0
   newOverbtn.classList.add('hide')
   btneable();
   ball.classList.remove('ball');
   ball.remove();
   endening();
   });
}
winner();
})
button6.addEventListener('click',()=> {
  if (wickets < 10 && ballCount < 6) {
    const ballsContainer = document.getElementById("balls-container");
    const ball = document.createElement("div");
    ball.classList.add("ball");
    ball.innerText = 6;
    ballsContainer.appendChild(ball);
    ballCount++;
    currentScore+=6;
    totalScore+=6
    currentOverScore+=6;
    wickets +=0;
    scoreDisplay.innerHTML=`Current Score: ${currentScore} Runs and ${wickets} wickets`
    
  if(ballCount===6) {
   btndis()
     newOverbtn.classList.remove('hide')
     currentOver+=1;
     const overScoreElement = document.createElement("div");
     overScoreElement.innerText=`Team ${currentTeam}, Over ${currentOver}: ${currentOverScore} runs, wickets ${currentOverWk}`
     cumulativescore.appendChild(overScoreElement);
     overScoreElement.innerHTML=`Team ${currentTeam}, Over ${currentOver}: ${currentOverScore} runs, wickets ${currentOverWk}`
     ballCount=0
     currentOverScore=0;
  }
 newOverbtn.addEventListener('click',()=> {
  currentOverWk=0
   newOverbtn.classList.add('hide')
   btneable();
   ball.classList.remove('ball');
   ball.remove();
   endening();
   });
}
winner();
})
buttondot.addEventListener('click',()=> {
  if (wickets < 10 && ballCount < 6) {
  const ballsContainer = document.getElementById("balls-container");
    const ball = document.createElement("div");
    ball.classList.add("ball");
    ball.innerText = '.';
    ballsContainer.appendChild(ball);
    ballCount++;
    totalScore++;
    currentScore+=0;
    currentOverScore+=0;
    wickets +=0;
    scoreDisplay.innerHTML=`Current Score: ${currentScore} Runs and ${wickets} wickets`
    
  if(ballCount===6) {
   btndis()
     newOverbtn.classList.remove('hide')
     currentOver+=1;
     const overScoreElement = document.createElement("div");
     overScoreElement.innerText=`Team ${currentTeam}, Over ${currentOver}: ${currentOverScore} runs, wickets ${currentOverWk}`
     cumulativescore.appendChild(overScoreElement);
     overScoreElement.innerHTML=`Team ${currentTeam}, Over ${currentOver}: ${currentOverScore} runs, wickets ${currentOverWk}`
     ballCount=0
     currentOverScore=0;
 }
 newOverbtn.addEventListener('click',()=> {
  currentOverWk=0
   newOverbtn.classList.add('hide')
   btneable();
   ball.classList.remove('ball');
   ball.remove();
   endening();
   });
}
winner();
})
buttonwk.addEventListener('click',()=> {
  if (wickets < 10 && ballCount < 6) {
    const ballsContainer = document.getElementById("balls-container");
    const ball = document.createElement("div");
    ball.classList.add("ball");
    ball.innerText = 'WK';
    ballsContainer.appendChild(ball);
    ballCount++;
    currentScore+=0;
    totalScore+=0
    currentOverScore+=0;
    wickets +=1;
    currentOverWk+=1;
    scoreDisplay.innerHTML=`Current Score: ${currentScore} Runs and ${wickets} wickets`
    endening();
    if(ballCount===6) {
    btndis()
     newOverbtn.classList.remove('hide')
     currentOver+=1;
     const overScoreElement = document.createElement("div");
     overScoreElement.innerText=`Team ${currentTeam}, Over ${currentOver}: ${currentOverScore} runs, wickets ${currentOverWk}`
     cumulativescore.appendChild(overScoreElement);
     overScoreElement.innerHTML=`Team ${currentTeam}, Over ${currentOver}: ${currentOverScore} runs, wickets ${currentOverWk}`
     ballCount=0
     currentOverScore=0;
 }
 newOverbtn.addEventListener('click',()=> {
  currentOverWk=0;
   newOverbtn.classList.add('hide')
   btneable();
   ball.classList.remove('ball');
   ball.remove();
   endening();
   });
}
winner();
})
buttonwide.addEventListener('click',()=> {
  if (wickets < 10 && ballCount < 6) {
    const ballsContainer = document.getElementById("balls-container");
    const ball = document.createElement("div");
    ball.classList.add("ball");
    ball.innerText = 'WB';
    ballsContainer.appendChild(ball);
    ballCount+=0;
    currentScore+=1;
    totalScore+=1;
    currentOverScore+=1;
    wickets +=0;
    scoreDisplay.innerHTML=`Current Score: ${currentScore} Runs and ${wickets} wickets`
  newOverbtn.addEventListener('click',()=> {
    currentOverWk=0;
     newOverbtn.classList.add('hide')
     btneable();
     ball.classList.remove('ball');
     ball.remove();
     endening();
     });
}
winner();
})
buttonnoball.addEventListener('click',()=> {
  if (wickets < 10 && ballCount < 6) {
  const ballsContainer = document.getElementById("balls-container");
    const ball = document.createElement("div");
    ball.classList.add("ball");
    ball.innerText = 'NB';
    ballsContainer.appendChild(ball);
    ballCount+=0
    currentScore+=1;
    currentOverScore+=1;
    totalScore+=1
    wickets +=0;
    scoreDisplay.innerHTML=`Current Score: ${currentScore} Runs and ${wickets} wickets`;
    newOverbtn.addEventListener('click',()=> {
      currentOverWk=0;
       newOverbtn.classList.add('hide')
       btneable();
       ball.classList.remove('ball');
       ball.remove();
       endening();
       });
  }
  
})
display.innerHTML="";
}
oneee11();
let team1 = 0;
let endening =()=> {
  if(currentOver===6 || wickets===10 && currentTeam===1) {
    btndis();
    target.innerHTML=`Team 2 need ${currentScore-team1+1} in 6 overs to win this match`
    scoreDisplay.innerHTML=`Team 1 total score is ${totalScore} in ${currentOver} overs`;
    team1 = totalScore;
    wickets= 0;
    ballCount=0;
    currentOver=0;
    currentScore=0;
    currentOverWk=0;
    newOverbtn.classList.remove('hide')
    newOverbtn.innerHTML="Next inning";
    cumulativescore.innerText="";
    currentTeam = 2;
    display.innerText=`Team ${currentTeam} starts their innings`; 
  } else {
    newOverbtn.innerHTML="New Over";
  }
}
endening();
function winner() {
  if( currentTeam === 2 && currentScore>team1 && wickets!==10) {
    target.innerHTML="";
    cumulativescore.innerHTML=""
    let margin = parseInt(10-wickets);
    scoreDisplay.innerText=`Match complete! Team 2 wins by ${margin} wickets!`;
    display.innerHTML="";
    btndis();
  }
  if( team1>=currentScore && wickets===10 ) {
    target.innerHTML=""
    cumulativescore.innerHTML="";
    let margin = parseInt(team1-currentScore);
    display.innerText="";
    scoreDisplay.innerText=`Match complete! Team 1 wins by ${margin} runs!`;
    btndis()  
  }
  if( team1===currentScore && wickets===10 ) {
    target.innerHTML=""
    cumulativescore.innerHTML="";
    display.innerText="";
    scoreDisplay.innerText=`Match tied !!`;
    btndis()  
  }
}
winner();   