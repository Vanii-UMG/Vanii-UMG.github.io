// Inicialización de variables
let hr = 0, min = 0, sec = 0, ms = 0;
let startTimer;

const startButton = document.querySelector(".start"),
      stopButton = document.querySelector(".stop"),
      resetButton = document.querySelector(".reset");

// Función para formatear números con dos dígitos
function formatNumber(number) {
    return number < 10 ? "0" + number : number;
}

// Función para actualizar la visualización
function updateDisplay() {
    document.querySelector('.millisecond').innerHTML = formatNumber(ms);
    document.querySelector('.second').innerHTML = formatNumber(sec);
    document.querySelector('.minute').innerHTML = formatNumber(min);
    document.querySelector('.hours').innerHTML = formatNumber(hr);
}

startButton.addEventListener("click", start);

function start() {
    startButton.classList.add("active");
    startButton.classList.remove("stopActive");
    startTimer = setInterval(() => {
        ms++;
        if (ms === 100) {
            ms = 0;
            sec++;
            if (sec === 60) {
                sec = 0;
                min++;
                if (min === 60) {
                    min = 0;
                    hr++;
                }
            }
        }
        updateDisplay();
    }, 10);
}

stopButton.addEventListener("click", () => {
    startButton.classList.add("active");
    startButton.classList.remove("stopActive");
    if ( document.querySelector('.stop').innerHTML == 'Reaundar' ) {
        start()
        document.querySelector('.stop').innerHTML = 'Detener'
    } else {
        document.querySelector('.stop').innerHTML = 'Reaundar'
        clearInterval(startTimer);
        console.log('Estoy en el else')
    }
});

resetButton.addEventListener("click", () => {
    startButton.classList.remove("active");
    startButton.classList.remove("stopActive");
    clearInterval(startTimer);
    hr = min = sec = ms = 0;
    updateDisplay();
});
