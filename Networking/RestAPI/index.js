import express from 'express';

const app = express();

app.all('/', (req, res) => {
    console.log('Request > ', req);
    console.log('Response > ', res);
    res.send(`I'm up!`)
})

const PORT = 5111;
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
})