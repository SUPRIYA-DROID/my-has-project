const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/me', (req, res) => {
    res.json({ message: 'hello world' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});