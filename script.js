function addMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();

    if (message !== '') {
        const messagesContainer = document.getElementById('messages');
        const newMessage = document.createElement('div');
        newMessage.className = 'message';
        newMessage.textContent = '❤ ' + message; // Adding heart emoji
        messagesContainer.appendChild(newMessage);

        // Clear the input
        messageInput.value = '';

        // Create a floating heart
        createFloatingHeart();
    }
}

function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    document.body.appendChild(heart);

    // Set a random position for the heart
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    heart.style.left = `${randomX}px`;
    heart.style.top = `${randomY}px`;

    // Remove the heart element after the animation completes
    heart.addEventListener('animationend', () => {
        document.body.removeChild(heart);
    });
}
