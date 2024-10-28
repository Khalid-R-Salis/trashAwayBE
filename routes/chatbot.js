// backend/routes/chatbot.js
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { message } = req.body;

  let botResponse;

  if (message.toLowerCase().includes('hello')) {
    botResponse = 'Hello! I am Khalid AI How can I assist you today?';
  } else if (message.toLowerCase().includes('help')) {
    botResponse = 'Sure, I am here to help! What do you need assistance with?';
  } 
  else if (message.toLowerCase().includes('thank you')) {
    botResponse = 'You’re welcome! If you have more questions, feel free to ask.';
  } 
  else if (message.toLowerCase().includes('2+2')) {
    botResponse = 'adding 2 and 2 i.e 2+2 = 4, do you need break down?';
  } 
  else {
    botResponse = `You said: ${message}`;
  }

  res.json({ message: botResponse });
});


module.exports = router;


