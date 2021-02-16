import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/products/:id', async (req, res) => {
    const product = data.products.find((p) => p._id == req.params.id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product not found' })
    }
});

app.get('/api/products', async (req, res) => {
    res.send(data.products)
});

app.get('/', async (req, res) => {
    res.send('Server is ready');
});

const port = process.env.PORT || 5000;

app.listen(5000, () => console.log(`Serve at http://127.0.0.1:${port}`));

