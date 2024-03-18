const menuBtn = document.getElementById('menuBtn');
const menuOpt = document.getElementById('menuOpt');

menuBtn.addEventListener('click', () => {
    if (menuOpt.classList.contains('disBlock')) {
        menuOpt.classList.remove('disBlock');
        menuOpt.classList.add('disNone');
        // menuBtn.classList.toggle('')
    } else {
        menuOpt.classList.add('disBlock');
        menuOpt.classList.remove('disNone');
    }
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 500) {
        menuOpt.classList.remove('disBlock')
        menuOpt.classList.remove('disNone')
    } else {
        menuOpt.classList.remove('disBlock')
        menuOpt.classList.remove('disNone')
    }
})