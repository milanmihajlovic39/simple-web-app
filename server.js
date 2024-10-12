const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory (if you have any)
app.use(express.static('public'));

// Route for the homepage (now serving from docs folder)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'docs', 'index.html'), (err) => {
        if (err) {
            console.error('Error sending file:', err);
            res.status(err.status).end();
        }
    });
});

app.get('/api/message', (req, res) => {
    res.json({ message: "Hello from the API!" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
