const userImput = parseInt(prompt('Inserisci un numero'));
console.log('userImput', userImput, typeof userImput);

const container = document.querySelector('.container');

for(let i = 1; i < userImput; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.append(i);
    container.append(square);

    console.log('square', square, typeof square);
}