const input = document.getElementById('button');

function addingEventListener(addEventListener){
    if(input){
        input.addEventListener('click', addEventListener, true)
    }
}
