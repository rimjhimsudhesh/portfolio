const express = require('express');
const app = express();
const greetings = ['Hello World!', 'Hola Mundo!', 'Namasthe Duniya!'];

app.use(express.static('public'));

app.get('/random-greeting', (req, res) => {
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    res.send(randomGreeting);
});

const port = 3000; // You can choose any available port number
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
