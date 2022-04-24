// process.env.UV_THREADPOOL_SIZE = 1;
const cluster = require('cluster');

console.log(cluster.isMaster);
// Is the file being executed in master mode ?
if(cluster.isMaster) {
    //Cause index.js to be executed *again* but in child mode
    cluster.fork();
    cluster.fork();
   cluster.fork();
   cluster.fork();  
} else {
    //I'm a child,I'm going to act like a server
    //and do nothing else
    const express = require('express');
    const app = express();
    const port = 3000;

    const doWork = (duration) => {
        const start = Date.now();
        while(Date.now() - start < duration) {
    
        }
    };
    
    process.on('uncaughtException' , (err) => {
        console.log(err);
    });

    app.get('/' , (req,res) => {
        doWork(5000);
        res.status(200).json({
            status:true,
            message:'simple api'
        });
    });
    
    app.get('/fast' , (req,res) => {
        res.status(200).json({
            status:true,
            message:'this is fast api'
        });
    });
    
    app.listen(port,() => {
        console.log(`Server is running on port ${port}`);
    });
}

//Notes do not recommend to use nodemon (auto restart server) while working with Cluster