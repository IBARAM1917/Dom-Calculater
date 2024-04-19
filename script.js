const NewDisplay=document.getElementById("result")
function appendToDisplay(input){
    NewDisplay.value += input
}
function calculate(){
    try{
        NewDisplay.value=eval(NewDisplay.value)
    }
    catch(error){
        alert("Invalid")
    }
}
function clearDisplay(){
    NewDisplay.value=""
}
function del(){
    NewDisplay.value=NewDisplay.value.slice(0,1)
}