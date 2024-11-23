const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON payloads

// Webhook endpoint
app.post('/webhook', (req, res) => {
    const receivedData = req.body; // Capture data sent by forms.app
    console.log('Received Data:', receivedData);

    res.status(200).send('Webhook data received successfully');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
