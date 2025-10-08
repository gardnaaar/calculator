const display = document.getElementById("display");

function appendToDisplay(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
       display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

document.addEventListener("keydown", (event)=>{
    const key = event.key;

    if(!isNaN(key) || key === "."){
        display.value += key;
    } else if(["+", "-", "*", "/"].includes(key)){
        display.value += key;
    } else if(key === "Enter"){
        try{
            display.value = eval(display.value);
        } catch{
            display.value = "Error";
        }
    } else if (key === "Backspace"){
        display.value = display.value.slice(0, -1);
    } else if(key.toLowerCase() === "c"){
        display.value = "";
    }
});