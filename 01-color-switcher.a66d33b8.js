const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),bodyEl:document.querySelector("body")};t.startBtn.addEventListener("click",(()=>{e.start()})),t.stopBtn.addEventListener("click",(()=>{e.stop()})),t.stopBtn.disabled=!0;const e={intervalId:null,isActive:!1,start(){this.isActive||(t.startBtn.disabled=!0,t.stopBtn.disabled=!1,this.isActive=!0,this.intervalId=setInterval((()=>{t.bodyEl.style.backgroundColor=s(),console.log("changed color: ",s())}),1e3))},stop(){t.startBtn.removeEventListener("click",(()=>{e.start()})),clearInterval(this.intervalId),t.startBtn.disabled=!1,t.stopBtn.disabled=!0,t.bodyEl.style.backgroundColor=null,this.isActive=!1}};function s(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}
//# sourceMappingURL=01-color-switcher.a66d33b8.js.map
