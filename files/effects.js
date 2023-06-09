
function isVisible(el) { // Bounding rectangle is in view
    var rect = el.getBoundingClientRect();
    return (rect.top >= 0) && (rect.bottom <= window.innerHeight);
}

function changeBackgroundColorOnView(targetElementSelector, colorClass) {
    function switchColor() { // Perform color class addition
        document.querySelectorAll(targetElementSelector).forEach((el) => {
            if (isVisible(el)) el.classList.add(colorClass);
        })
    }

    // Configure elements to have their background transition
    document.querySelectorAll(targetElementSelector).forEach(el => el.classList.add('effect-change-background-color'));

    document.addEventListener('scroll', switchColor, {passive: true});
}

jQuery(document).ready(function () {
    // On load set our .workYears to change to the opposite color in the color scheme
    changeBackgroundColorOnView('.exprience .workYear', 'bg-dark-cyan');

    changeBackgroundColorOnView('.education .workYear', 'bg-red');
})