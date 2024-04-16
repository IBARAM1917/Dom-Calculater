const NewDisplay=document.getElementById("result")
function appendToDisplay(input){
    NewDisplay.value += input
}
function calculate(){
    try{
        NewDisplay.value=eval(NewDisplay.value)
    }
    catch(error){
        NewDisplay.value="Error"
    }
}
function clearDisplay(){
    NewDisplay.value=""
}