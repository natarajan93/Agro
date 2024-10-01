var loading = document.querySelector(".loading");
window.addEventListener('load', () => {
    setTimeout(() => {
        loading.style.display = "none";
    }, 1500)


});

let count = document.getElementById('count');
let count1 = document.getElementById('count1');
let a = 0;

function handleCount(event) {
    let b = event.target.innerText;
    console.log(b);

    if (b === 'Add to Cart') {
        a++;
        count.innerText = a;
        count1.innerText = a;
        event.target.innerText = 'Remove';
        event.target.classList.remove('btn-success'); 
        event.target.classList.add('btn-danger'); 
    } else if (b === 'Remove') {
        a--;
        count.innerText = a;
        count1.innerText = a;
        event.target.innerText = 'Add to Cart'
        event.target.classList.remove('btn-danger'); 
        event.target.classList.add('btn-success'); 
    }
}