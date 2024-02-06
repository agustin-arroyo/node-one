const http = require('http');

http.createServer( ( request, response ) =>{
        
        // console.clear();
        // console.log( "request" );
        // console.log( request );

        // response.writeHead(200, {'Content-Type': 'application/json'});       
        
        // const persons = [];
        // let persona = {
        //         id: 1,
        //         nombre: 'Agus' 
        // }
        // persons.push(persona);
        
        // persona = {
        //         id: 2,
        //         nombre: 'Pk' 
        // }        
        // persons.push(persona);
        
        // response.write( JSON.stringify(persons));    
        // response.end();

        // response.setHeader('Content-Disposition', 'attachement; filename=lista.csv');
        // response.writeHead(200, {'Content-Type': 'application/csv'});       
        // response.write('id, name\n');
        // response.write('1, Agustin\n');
        // response.write('2, Pk\n');
        // response.write('3, Roger\n');
        // response.write('4, Mirka\n');        
        // response.end();


        response.write('Hola Mundo');
        response.end();
})
.listen( 8080 );

console.log('Listening on port 8080');
