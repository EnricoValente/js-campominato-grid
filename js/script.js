


const playButton = document.querySelector('button');

playButton.addEventListener('click', function() {
   
    myBoard();
})
   
        
        
   
    
    



function myBoard() {

    for(let i = 1; i <= 100; i++) {
        const container = document.querySelector('.container');
        const square = document.createElement('div');
        square.classList.add('square');
        square.append(i);
        container.append(square);
        console.log('square', square, typeof square);

        square.addEventListener('click', function() {
            square.classList.toggle('clicked');
            console.log(this.innerHTML);
        })
    
    }
}