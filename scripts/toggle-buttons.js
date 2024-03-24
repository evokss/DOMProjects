function toggleButton(class_name) {
    const button = document.querySelector(class_name);

    if (!button.classList.contains('button-mode-on')) {
        turnOffPreviousButton();
        button.classList.add('button-mode-on');
    } else {
        button.classList.remove('button-mode-on');
    }
}

function turnOffPreviousButton() {
    const previousButton = document.querySelector('.button-mode-on');

    if (previousButton) {
        previousButton.classList.remove('button-mode-on');
    }
}