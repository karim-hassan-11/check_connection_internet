
let title = document.querySelector('.title');
let ul = document.querySelector('ul');
let relod = document.querySelector('.relod');

window.onload = function()
{
    if(window.navigator.onLine)
    {
        onLine();
    }else{
        offLine();
    }
}



window.addEventListener("online",function(){
    onLine();
})
window.addEventListener("offline",function(){
    offLine();
})

relod.onclick = function(){
    window.location.reload();
}

function onLine()
{
    title.innerHTML ='OnLine';
    title.style.color = 'green';
    ul.classList.add('hide');
    relod.classList.add('hide');

}

function offLine()
{
    title.innerHTML ='OffLine';
    title.style.color = '#666';
    ul.classList.remove('hide');
    relod.classList.remove('hide');
}