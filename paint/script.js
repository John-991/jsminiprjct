const canvas = document.querySelector('#canvas')
const context = canvas.getContext('2d');
const color = document.querySelector("#color");
const twoX = document.getElementById('x2')
const threeX = document.getElementById('x3')
const forX = document.getElementById('x4')
const fiveX = document.getElementById('x5')
const text = document.getElementById('text')

canvas.height = window.innerHeight
canvas.width = 1600

window.addEventListener("load", ()=> {
    let penDown = false ;
    function draw(e) {
        if (!penDown) return
        context.lineTo(e.clientX, e.clientY)
        twoX.addEventListener("click" , () => {context.lineWidth = 3;})
        threeX.addEventListener("click" , () => {context.lineWidth = 5;})
        forX.addEventListener("click" , () => {context.lineWidth = 6;})
        fiveX.addEventListener("click" , () => {context.lineWidth = 7;})
        context.stroke()
    }

   canvas.addEventListener('mousedown',()=>{penDown= true;})
   canvas.addEventListener('mouseup',()=>{context.beginPath(); penDown= false;})
   canvas.addEventListener('mousemove', draw)
})


//clean
let clearBtn = document.querySelector(".clear")
clearBtn.addEventListener("click", () => {
    context.clearRect(0, 0, canvas.width, canvas.height)
})


//save
let saveBtn = document.querySelector(".save")
saveBtn.addEventListener("click", () => {
    let data = canvas.toDataURL("imag/png")
    let a = document.createElement("a")
    a.href = data
    a.download = "sketch.png"
    a.click()
})



function changeColor(e) {
    const color = e.target.value;
    context.strokeStyle = color;
  }
color.addEventListener("input", changeColor);


//html colorpicker
