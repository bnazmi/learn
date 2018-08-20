document.getElementById("name").addEventListener('keyup',()=>{
    document.getElementById("welcome").textContent="Hello "+document.getElementById("name").value;
})