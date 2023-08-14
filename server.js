const express = require('express');
const app = express();
const tops = ['Black - top',
                     'Blue - top',
                     'Red - top',
                     'Navy - top',
                     'Gray - top',
                     'Brown - top',
                     'Green - top',
                     'Yellow - top',
                     'Purple - top',
                     'Orange - top'];

const bottoms = ['Black - bottom',
                        'White - bottom',
                        'Purple - bottom',
                        'Beige - bottom',
                        'Pink - bottom',
                        'Cream - bottom',
                        'Brown - bottom',
                        'Gray - bottom',
                        'Silver - bottom',
                        'Blue - bottom'];

app.use(express.static('public'));

app.get('/random-greeting', (req, res) => {
    const randomGreeting = tops[Math.floor(Math.random() * tops.length)];
    res.send(randomGreeting);
});

app.get('/random-bottom', (req, res) => {
    const randomGreeting = bottoms[Math.floor(Math.random() * bottoms.length)];
    res.send(randomGreeting);
});

const port = 3000; // You can choose any available port number
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
