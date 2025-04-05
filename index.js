const express = require('express');
const app = express();

const PORT = 3000;

app.get('/abhi', (req, res) => {
    res.json({
        message: "welcome to my server",
        data: "bye"
    })
})

app.listen(PORT, () => {
    console.log(`server started at port: ${PORT}`);
})