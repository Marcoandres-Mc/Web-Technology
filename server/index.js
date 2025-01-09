import {connectBd} from './db.js'
import app from './app.js'
import dotenv from 'dotenv';

dotenv.config();

connectBd();
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});