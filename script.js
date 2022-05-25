let heading = document.querySelectorAll('h1')
// console.log(heading.length)
let headingNumber = 0

var interval = setInterval(function () {
    let activeHeading = document.querySelector('.active')
    activeHeading.classList.remove('active')
    heading[headingNumber].classList.add('active')
    if(headingNumber < heading.length - 1) {
        headingNumber += 1;
    }
}, 500);