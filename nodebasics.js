//to store data in file

// const fs = require('node:fs');//require keyword to use builtinfile

// try{
//     const content ='This is written synchronously.';
//     fs.writeFileSync('output.text', content, 'utf8');
//     console.log('File written sucessfully!');

// }   catch(err){
//     console.error(err);
// }

const http =required('https'); //load the http module
http.createServer((reqest, response) =>){
//tell the browser everything is ok
    response.writeHead(200, {   //200 is status code
        'content-type': 'text/plain'
   
}); 

response.write('Hello, world!\n');
//write theannounced text to the body of the page 
response.end();
}).listen(1338); // tell the server what port to be 0
