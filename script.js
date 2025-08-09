document.addEventListener('DOMContentLoaded', function() {
    const bubbleButton = document.getElementById('bubbleButton');

    bubbleButton.addEventListener('click', function() {
        this.classList.toggle('clicked');
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 1000);
    });
});