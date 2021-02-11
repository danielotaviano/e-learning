import 'dotenv/config';
import express from 'express';
import { createConnection } from 'typeorm';
import { ormConfig } from '../database/ormconfig';

const app = express();
app.use(express.json());

createConnection(ormConfig).then(async () => {
  console.log('[DATABASE] - Database is up');

  app.use((await import('./routes/')).default);

  app.listen(process.env.PORT, () => console.log('[SERVER] - Server is running'));
});
