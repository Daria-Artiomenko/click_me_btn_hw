const button = document.getElementById('movingButton');
const body = document.body;

function getRandomPosition() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const maxX = viewportWidth - button.offsetWidth;
    const maxY = viewportHeight - button.offsetHeight;
    // const bodyRect = body.getBoundingClientRect();
    // const maxX = bodyRect.width - button.offsetWidth;
    // const maxY = bodyRect.height - button.offsetHeight;
    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);
    return { x, y };
}


function moveButton() {
    const { x, y } = getRandomPosition();
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

button.addEventListener('mouseover', () => {
    if (Math.random() < 0.5) {
    moveButton();
    }
});

button.addEventListener('click', () => {
    moveButton();
});