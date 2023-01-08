const express = require('express');

// init app
const PORT = 4000;
const app = express();

app.get('/', (req,res) => res.send('<h1>Hello Smrt Mrkt BY d3j1x!</h1>'));

app.listen(PORT, () => console.log(`app is UP and RUNING .. on port: ${PORT}`));