/*
    Uso de metodo http: Como por exemplo, quando e utilizado o GET e o POST

    Rotas Descritivas: No caso do exemplo seria o uso de [get] /tshirt que e utilizado para obter a informacao sobre camisetas
    e no de [post] /tshirt/:id

    Representacoes de recursos: Os recursos são manipulados através das URIs. Por exemplo, /tshirt é o recurso para camisetas, 
    e /tshirt/:id é um recurso específico de uma camiseta identificada por um ID.

    Uso de Códigos de Status HTTP: Os códigos de status HTTP são utilizados para indicar o resultado de uma operação. 
    Por exemplo, 200 para OK, 418 para I'm a teapot, etc.

    Uso de Respostas JSON: As respostas são retornadas no formato JSON, o que é comum em APIs RESTful.

    Uso de Parâmetros na URL e no Corpo da Requisição: O código faz uso de parâmetros na URL (como id em /tshirt/:id) e 
    também do corpo da requisição (como logo no corpo de uma requisição POST).
*/

/* 
Padrões de Design de URI:

    As URIs são significativas e descritivas. Por exemplo, /tshirt é usado para obter informações sobre camisetas e /tshirt/:id é usado para criar uma nova camiseta ou atualizar uma existente.

Métodos HTTP Adequados:

    Os métodos HTTP GET e POST são usados adequadamente para recuperação e criação/atualização de recursos, respectivamente.

Representações de Recursos:

    As respostas da API são representações de recursos no formato JSON.

Sem Estado (Stateless):

    A API não mantém o estado da sessão do cliente no servidor entre solicitações. Cada solicitação do cliente contém todas as informações necessárias para ser processada pelo servidor.

Cache:

    O node-cache e usao para a memoria em cache

HATEOAS:

    O código não inclui links para recursos relacionados nas respostas da API.
*/

// Require the Express framework and create an Express application
const express = require('express'); // Import the Express framework
const NodeCache = require('node-cache')
const app = express(); // Create an instance of the Express application
const PORT = 8080; // Define the port number for the server to listen on

const cache = new NodeCache();

// Middleware to parse incoming JSON requests
app.use(express.json()); // Use the built-in middleware to parse JSON data in request bodies

// Start the server and listen for incoming requests on the defined port
app.listen(
    PORT,
    () => console.log(`The site is being hosted in http://localhost:${PORT}`)
);

// Middleware to check cache before processing requests
app.use((req, res, next) => {
    const key = req.originalUrl || req.url;
    const cachedResponse = cache.get(key);
    if (cachedResponse) {
        return res.send(cachedResponse);
    }
    next();
});

// Define a route handler for GET requests to '/tshirt'
app.get('/tshirt', (req, res) => { // Handler for GET requests to '/tshirt'
    // Send a JSON response with a tshirt object containing 'shirt' and 'large' properties
    res.status(200).send({
        tshirt: 'shirt',
        size: 'large'
    });
    cache.set(req.originalUrl || req.url, express.responseData, 10); // cache for 10 seconds
    res.status(200).send(responseData);
}); // Accessible at localhost:8080/tshirt

// Define a route handler for POST requests to '/tshirt/:id'
app.post('/tshirt/:id', (req, res) => { // Handler for POST requests to '/tshirt/:id'
    // Extract the 'id' parameter from the request URL
    const { id } = req.params;
    // Extract the 'logo' property from the request body
    const { logo } = req.body;

    // Check if the 'logo' property exists in the request body
    if (!logo) {
        // If 'logo' is missing, send a 418 status with an error message
        res.status(418).send({ message: 'We need a logo!' });
    }
    
    const responseData = {
        tshirt: `tshirt with your ${logo} and ID of ${id}`,
    };

    cache.set(req.originalUrl || req.url, responseData, 10); // Cache for 10 seconds
    res.send(responseData);
});

// Define a route handler for PUT requests to '/tshirt/:id'
app.put('/tshirt/:id', (req, res) => { // Handler for PUT requests to '/tshirt/:id'
    // Extract the 'id' parameter from the request URL
    const { id } = req.params;
    // Extract the 'logo' property from the request body
    const { logo } = req.body;

    // Check if the 'logo' property exists in the request body
    if (!logo) {
        // If 'logo' is missing, send a 418 status with an error message
        res.status(418).send({ message: 'We need a logo!' });
    }
    
    const responseData = {
        tshirt: `Updated tshirt with your ${logo} and ID of ${id}`,
    };

    cache.set(req.originalUrl || req.url, responseData, 10); // Cache for 10 seconds
    res.send(responseData);
});

// Define a route handler for DELETE requests to '/tshirt/:id'
app.delete('/tshirt/:id', (req, res) => { // Handler for DELETE requests to '/tshirt/:id'
    // Extract the 'id' parameter from the request URL
    const { id } = req.params;

    const responseData = {
        message: `Tshirt with ID ${id} has been deleted`,
    };

    cache.del(req.originalUrl || req.url); // Remove from cache
    res.send(responseData);
});
