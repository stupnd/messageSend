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
    }
}
