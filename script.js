function generateButtons(){
    let input = document.getElementById("userInput").value;
    const randomNumber = Math.floor(Math.random() * input + 1);
    const text = document.getElementById("winOrLose");
    for(let i = 1; i <= input; ++i) {
        const button = document.createElement('button');
        button.innerText = i;
        button.id = 'myButton';
        button.addEventListener('click', function(){
            if(i == randomNumber) {
                text.innerHTML = "You win!";
            }else {
                text.innerHTML = "You lose!";
            } 
        })
        document.body.appendChild(button); 
        
    }
    document.getElementById("Pressed").style.display = 'none';  
}

function restartButtons(id){
    window.location.reload();
}
