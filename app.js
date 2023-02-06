let numberButtons = document.querySelectorAll(".number-button");
let operatorButtons = document.querySelectorAll(".operator-button");
let actionButtons = document.querySelectorAll(".action-button");
let output = document.querySelector("#result");

let operator = null
let pressedOperator = false
let initialvalue = 0

numberButtons.forEach(button =>{
    button.addEventListener('click', function(){
        if(output.textContent === '0' || pressedOperator === true){
            output.textContent = button.textContent
            pressedOperator = false
        }else{
            output.textContent += button.textContent
        }
    })
})

operatorButtons.forEach(button =>{
    button.addEventListener('click', function(){
        operator = button.textContent
        pressedOperator = true
        initialvalue = output.textContent
        console.log(initialvalue);
    })
})

actionButtons.forEach(button =>{
    button.addEventListener('click', function(){
        if(button.textContent === '='){
            if(operator == '+'){
                output.textContent = Number(initialvalue) + Number(output.textContent)
            }
            if(operator == '-'){
                output.textContent = Number(initialvalue) - Number(output.textContent)
            }
            if(operator == 'x'){
                output.textContent = Number(initialvalue) * Number(output.textContent)
            }
            if(operator == '/'){
                output.textContent = Number(initialvalue) / Number(output.textContent)
            }

            operator = null
        }

        if(button.textContent === 'BK'){
            output.textContent = output.textContent.slice(0, -1)
        }

        if(button.textContent === 'C'){
            output.textContent = 0
            operator = null
            pressedOperator = false
        }
    })
})

