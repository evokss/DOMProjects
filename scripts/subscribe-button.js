function toggleButtonState(button, isSubscribed) {
  button.textContent = isSubscribed ? 'Subscribed' : 'Subscribe';
  button.classList.toggle('js-is-subscribed-button', isSubscribed);
}

const subscribeButton = document.querySelector('.js-subscribe-button');

subscribeButton.addEventListener('click', () => {
  const isSubscribed = subscribeButton.classList.contains('js-is-subscribed-button');
  toggleButtonState(subscribeButton, !isSubscribed);
});