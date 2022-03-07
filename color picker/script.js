let button = document.getElementById("click")
let color = document.getElementById("back")
const numbers = "0123456789"
const alphabet = "abcdef"

function getrandom() {
    var numRandon = numbers[Math.floor(Math.random() * numbers.length)];
    var alphabetRandom= alphabet[Math.floor(Math.random() * alphabet.length)];
    const store = [];
    store.push(numRandon)
    store.push(alphabetRandom)
    return store[Math.floor(Math.random() * store.length)]; //num+string
}

button.addEventListener('click' , ()=> {
    hex = "#"
    for(i=0; i<6; i++) {
        hex += getrandom()
    }
    document.body.style.backgroundColor = hex ;
    color.textContent = hex ;
}) 

