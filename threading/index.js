
process.env.UV_THREADPOOL_SIZE = 5;

const crypto = require('crypto');
const start = Date.now();
const os = require('os');

crypto.pbkdf2('password' , 'any-salt' , 100000 , 512 , 'sha512' , () => {
    console.log('1: ' , Date.now() - start);    
});

crypto.pbkdf2('password' , 'any-salt' , 100000 , 512 , 'sha512' , () => {
    console.log('2: ' , Date.now() - start);    
});

crypto.pbkdf2('password' , 'any-salt' , 100000 , 512 , 'sha512' , () => {
    console.log('3: ' , Date.now() - start);    
});

crypto.pbkdf2('password' , 'any-salt' , 100000 , 512 , 'sha512' , () => {
    console.log('4: ' , Date.now() - start);    
});

crypto.pbkdf2('password' , 'any-salt' , 100000 , 512 , 'sha512' , () => {
    console.log('5: ' , Date.now() - start);    
});

// crypto.pbkdf2('password' , 'any-salt' , 100000 , 512 , 'sha512' , () => {
//     console.log('6: ' , Date.now() - start);    
// });

// console.log(os.cpus());

console.log(process.env.UV_THREADPOOL_SIZE);