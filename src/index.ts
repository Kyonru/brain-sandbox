import express from 'express';

import MoviesApi from './api/MoviesApi';

// rest of the code remains same
const app = express();
const moviesApi = new MoviesApi();

const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/movies', (req: express.Request, res: express.Response) => {
  res.json(moviesApi.create(req.body));
});

app.get('/movies', (req: express.Request, res: express.Response) => {
  res.json(moviesApi.findMany());
});

app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
