import '../css/common.css';

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  bodyEl: document.querySelector('body'),
};

refs.startBtn.addEventListener('click', () => { colorSwitcher.start(); });

refs.stopBtn.addEventListener('click', () => { colorSwitcher.stop(); });
refs.stopBtn.disabled = true;


const colorSwitcher = {

    intervalId: null,
    isActive: false,
    
    start() {
        if (this.isActive) {
            return;
        }
    refs.startBtn.disabled = true;    
    refs.stopBtn.disabled = false;
    this.isActive = true;
        
   this.intervalId = setInterval(() => {
       refs.bodyEl.style.backgroundColor = getRandomHexColor();
    console.log('changed color: ', getRandomHexColor());
}, 1000); 
    },

    stop() {
    
      refs.startBtn.removeEventListener('click', () => {colorSwitcher.start();});
        clearInterval(this.intervalId);
        refs.startBtn.disabled = false;
        refs.stopBtn.disabled = true;
        this.isActive = false;
    },      
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}







