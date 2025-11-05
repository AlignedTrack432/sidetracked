// Create the indicator element first
const indicator = document.createElement('div');
indicator.className = 'scroll-indicator';
indicator.textContent = '0%';
document.body.appendChild(indicator);

// Now the rest of your code
function updateScrollIndicator() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
            
    const scrollPercentage = Math.round((scrollTop / (documentHeight - windowHeight)) * 100);
            
    indicator.textContent = scrollPercentage + '%';
            
    if (scrollPercentage === 0) {
        indicator.classList.add('at-top');
    } else {
        indicator.classList.remove('at-top');
    }

    if (scrollPercentage === 100) {
        indicator.classList.add('at-bottom');
    } else {
        indicator.classList.remove('at-bottom');
    }
}

let ticking = false;

function onScroll() {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateScrollIndicator();
            ticking = false;
        });
        ticking = true;
    }
}

window.addEventListener('scroll', onScroll);
updateScrollIndicator();