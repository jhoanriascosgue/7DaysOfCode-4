// Generar número aleatorio entre 0 y 10
const numeroAdivinar = Math.floor(Math.random() * 11);
let intentos = 3;

function adivinarNumero() {
    const guess = parseInt(document.getElementById('guessInput').value);
    intentos--;

    if (guess === numeroAdivinar) {
        document.getElementById('result').innerText = "¡Felicidades! Has adivinado el número.";
    } else if (intentos > 0) {
        document.getElementById('result').innerText = `Incorrecto. Te quedan ${intentos} intentos.`;
    } else {
        document.getElementById('result').innerText = `Lo siento, no has acertado. El número era ${numeroAdivinar}.`;
    }
}
