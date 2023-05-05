import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());

// CORS setup:
app.use(function(request, response, next) {
    response.status(200);
    response.header("Access-Control-Allow-Origin", 'https://matthew-bisicchia.com');
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Enable Cross Origin Resource Sharing
app.use(cors({ origin: 'https://matthew-bisicchia.com', optionsSuccessStatus: 200 }));

app.use('/', express.static(path.join(__dirname, 'frontend/build')))

// Set as Landing Page:
app.get('/', (request, response) => {
    response.status(200).redirect('/site/home');
});

app.get('/site/*', (request, response) => {
    response.status(200).sendFile(path.join(__dirname + '/frontend/build/index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {

    console.log('Listening . . .')
});
