const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=10) {
        header.classList.add('bg-dark');
    }
    else {
        header.classList.remove('bg-dark');
    }
}