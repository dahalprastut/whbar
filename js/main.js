const ethBtn = document.querySelector('.eth-btn');
const hbarBtn = document.querySelector('.hbar-btn');
const status = document.querySelector('.stat');
const operation = document.querySelector('.operation');


ethBtn.addEventListener('click', () => {
    hbarBtn.classList.remove('active');
    ethBtn.classList.add('active');
    status.innerText = 'ETH';
    operation.innerText = 'Unwrap';
})

hbarBtn.addEventListener('click', () => {
    ethBtn.classList.remove('active');
    hbarBtn.classList.add('active');
    status.innerText = 'HBAR';
    operation.innerText = 'Wrap';


})



const error = document.querySelector('.error');
const textArea = document.querySelector('.text');
const ok = document.querySelector('.ok');

operation.addEventListener('click', () => {
    if (textArea.value == '') {
        error.style.display = 'block';
    }
})

ok.addEventListener('click', () => {
    if (textArea.value == '') {
        error.style.display = 'none';
    }
})




