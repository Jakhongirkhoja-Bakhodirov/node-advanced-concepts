const express = require('express');

const app = express();
const port = 3000;

app.get('/' , (req,res) => {

});


app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
})

//Notes do not recommend to use nodemon (auto restart server) while working with Cluster