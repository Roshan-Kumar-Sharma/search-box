document.getElementById('value').addEventListener('input', (value) => {
    // console.log(value.value);
    let input = document.getElementById('value').value;
    let collec = document.getElementsByClassName('grid-items');
    if(input){
        console.log(`[${input}]`);
        // console.log(collec);
        Array.from(collec).forEach((item) => {
            // console.log(item.innerText);
            if(item.innerText.indexOf(input) == -1){
                if(!item.classList.contains('hide'))
                    item.classList.toggle('hide');
                // item.style.display = none;
            }
            else{
                if(item.classList.contains('hide'))
                    item.classList.toggle('hide');
                // item.style.display = block;
            }
        })

    }
    else{
        Array.from(collec).forEach((item) => {
            item.classList.remove('hide');
            // item.style.display = block;
        })
    }
    // console.log(document.getElementById('value').value);
})
