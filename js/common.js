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