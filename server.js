const express = require('express');
const cors = require('cors');
const chatbotRoutes = require('./routes/chatbot');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: 'https://trash-away.vercel.app' }));
app.use(express.json()); 

// Routes
app.use('/api/chat', chatbotRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


