document.getElementById("toggleButton").addEventListener("click", function () {
    var searchContainer = document.getElementById("searchContainer");
    searchContainer.classList.toggle("expanded");
});


// navbar scrol behaviour
document.addEventListener('DOMContentLoaded', function () {
    const navWrapper = document.querySelector('.navbar-nav-wrapper');
    let isDown = false;
    let startX;
    let scrollLeft;

    navWrapper.addEventListener('mousedown', (e) => {
        isDown = true;
        navWrapper.classList.add('active');
        startX = e.pageX - navWrapper.offsetLeft;
        scrollLeft = navWrapper.scrollLeft;
    });

    navWrapper.addEventListener('mouseleave', () => {
        isDown = false;
        navWrapper.classList.remove('active');
    });

    navWrapper.addEventListener('mouseup', () => {
        isDown = false;
        navWrapper.classList.remove('active');
    });

    navWrapper.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - navWrapper.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        navWrapper.scrollLeft = scrollLeft - walk;
    });

    // Touch events for mobile
    navWrapper.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - navWrapper.offsetLeft;
        scrollLeft = navWrapper.scrollLeft;
    });

    navWrapper.addEventListener('touchend', () => {
        isDown = false;
    });

    navWrapper.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - navWrapper.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        navWrapper.scrollLeft = scrollLeft - walk;
    });
});