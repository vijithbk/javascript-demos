let timer = 0
let timerRef;

document.querySelector(".start").addEventListener("click", (e) => {
  console.log("clicked")
  let timerRef = setInterval(()=> {
    timer++;

    let hours = timer / 60;
    let minutes = timer / 60;
    let seconds = timer

    document.querySelector(".secondsValue").innerHTML = seconds
    console.log(seconds)
  }, 1000)
})

document.querySelector(".reset").addEventListener("click", (e) => {
  if(timerRef) {
    clearInterval(timerRef)
  }
})