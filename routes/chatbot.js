// backend/routes/chatbot.js
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { message } = req.body;

  let botResponse;

  if (message.toLowerCase().includes('hello')) {
    botResponse = 'Hello! I am WMS AI. How can I assist you today?';
  } else if (message.toLowerCase().includes('help')) {
    botResponse = 'Sure, I am here to help! What do you need assistance with?';
  } else if (message.toLowerCase().includes('thank you')) {
    botResponse = 'You’re welcome! If you have more questions, feel free to ask.';
  } else if (message.toLowerCase().includes('what is trashaway')) {
    botResponse = 'TrashAway is an intelligent waste management system designed to schedule pickups, track waste collection, and improve cleanliness.';
  } else if (message.toLowerCase().includes('how to schedule a pickup')) {
    botResponse = 'To schedule a pickup, log in to our TrashAway app, select "Request Pickup," enter your location, and confirm with payment.';
  } else if (message.toLowerCase().includes('how to track waste truck')) {
    botResponse = 'You can track waste collection trucks in real-time using our Google Maps integration on the TrashAway dashboard.';
  } else if (message.toLowerCase().includes('payment methods')) {
    botResponse = 'We accept online payments via Paystack, bank transfers, and mobile payments.';
  } else if (message.toLowerCase().includes('how to report missed pickup')) {
    botResponse = 'If your scheduled pickup was missed, please report it via the "Report Issue" section in the TrashAway app.';
  } else {
    botResponse = 'Please contact our helpline at 08085499803. I currently provide basic responses.';
  }
  res.json({ message: botResponse });
});


module.exports = router;


