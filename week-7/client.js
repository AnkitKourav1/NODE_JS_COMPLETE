// client.js

const socket = io();

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();
  const messageInput = document.getElementById('m');
  const message = messageInput.value.trim();
  if (message) {
    socket.emit('chat message', message);
    messageInput.value = '';
  }
});

socket.on('chat message', function(msg) {
  const messagesList = document.getElementById('messages');
  const li = document.createElement('li');
  li.textContent = msg;
  messagesList.appendChild(li);
});
