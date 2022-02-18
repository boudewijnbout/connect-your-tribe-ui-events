// Define Elements
const buttons = document.querySelectorAll('a');
let mousedownTimer;

// Loop trough all buttons
buttons.forEach(button => {

    // Add single click event listener
    button.addEventListener('click', function() {
        button.classList.add('color-green');  
    });

    // Add double click event listener
    button.addEventListener('dblclick', function() { 
        button.classList.add('color-purple');
    });

    // Add keydown event listener
    button.addEventListener('keydown', function(e) {
        if (e.code == 'KeyZ') {
            button.classList.add('color-lightpurple');
        }
     });

    // Add mousedown event listener
     button.addEventListener('mousedown', function() {
         mousedownTimer = setTimeout(() => {
            button.classList.add('color-green')
     }, 1500);
    });
})