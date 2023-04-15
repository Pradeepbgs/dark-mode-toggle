const inputEl = document.querySelector('.input');
const bodyEl = document.querySelector('body');

inputEl.checked = JSON.parse(localStorage.getItem('anything'));

function updatebody(){
    if(inputEl.checked){
        bodyEl.style.background = "black";
    }else{
        bodyEl.style.background = "white";
    }
}
updatebody();

inputEl.addEventListener('input', ()=>{
        updatebody();
       updateLocalStorage();
});

function updateLocalStorage(){
    localStorage.setItem('anything',JSON.stringify(inputEl.checked));
}