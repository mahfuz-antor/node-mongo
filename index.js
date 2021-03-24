const express = require('express');


const app = express();

// const rootCall = (req, res) => ('Thank you so much')


app.get('/', (req, res) => {
    res.send("Thank you for calling me.I know how to open node.");
})


app.listen(3200, () => console.log('Listening to port 3200'))