document.addEventListener('DOMContentLoaded', () => {
    const addToCartButton = document.getElementById('add-to-cart');
    const confirmationMessage = document.getElementById('confirmation-message');

    if (addToCartButton) {
        addToCartButton.addEventListener('click', () => {
            confirmationMessage.style.display = 'block';
            setTimeout(() => {
                confirmationMessage.style.display = 'none';
            }, 2000);
        });
    }
});
