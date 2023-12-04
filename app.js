import express from 'express';
import serverless from 'serverless-http';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });

export const handler = serverless(app)