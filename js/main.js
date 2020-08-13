const ethBtn = document.querySelector('.eth-btn');
const hbarBtn = document.querySelector('.hbar-btn');
const status = document.querySelector('.status');
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

const loginBtns = document.querySelectorAll('.nav-right_login a');
const loginBtnsArr = Array.prototype.slice.call(loginBtns);

loginBtnsArr.forEach(element => {
    element.addEventListener('mouseover', () => {
        for (let i = 0; i < loginBtnsArr.length; i++) {


            loginBtnsArr[i].style.borderBottom = 'none';
        }
        element.style.borderBottom = '0.3rem solid #6236FF';
    })

});
