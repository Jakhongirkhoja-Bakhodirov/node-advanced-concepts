const express = require('express');
const crypto = require('crypto');
const app = express();
const Worker = require('webworker-threads').Worker;
const port = 3000;

app.get('/' , (req,res) => {
    const worker = new Worker(function(){
        this.onmesssage = function(){
            let counter = 0;
            while(counter < 1e9) {
                counter++;
            }
            postMessage(counter);
        };
    });

    worker.onmessage = function(message){
        console.log(message.data);
        res.status(200).json({
            status:true,
            data
        });
    };

    worker.postMessage();
});


app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});