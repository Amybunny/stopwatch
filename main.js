const timer = document.getElementById('timer');
const start = document.getElementById('start');
// const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let startTime;
let timeoutId;
let elapsedTime = 0;

function countUp(){
  const d = new Date(Date.now() - startTime + elapsedTime);
  const m = String(d.getMinutes()).padStart(2,'0');
  const s = String(d.getSeconds()).padStart(2,'0');
  const ms = String(d.getMilliseconds()).padStart(3,'0');
  timer.textContent = `${m}:${s}.${ms}`;

  timeoutId = setTimeout(()=>{
    countUp();
  },10);
}

let isPlaying = false;
reset.classList.add('inactive');

start.addEventListener('click',()=>{
  if(isPlaying === false){
    startTime = Date.now();
    countUp();
    start.textContent = "Stop";
    isPlaying = true;
    reset.classList.add('inactive');
  }else if(isPlaying = true){
    clearTimeout(timeoutId);
    start.textContent = "Start";
    elapsedTime += Date.now() - startTime;
    isPlaying = false;
    reset.classList.remove('inactive');
  }
});

reset.addEventListener('click', ()=>{
  if(reset.classList.contains('inactive') === true){
    return;
  }
  timer.textContent = '00:00:000';
  elapsedTime = 0;
  reset.classList.add('inactive');
})
