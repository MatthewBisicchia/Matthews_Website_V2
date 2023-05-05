import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());

app.use('/', express.static(path.join(__dirname, 'frontend/build')))

app.get('/*', (request, response) => {
    response.status(200).sendFile(path.join(__dirname + '/frontend/build/index.html'));
});

const PORT = process.env.port || 3000;

app.listen(PORT, () => {

    console.log('Listening . . .')
});
