import express from 'express'
import todosRoutes from './routes/todos'
import bodyParser from 'body-parser';
bodyParser
const app = express();
app.use(bodyParser.json());
app.use(todosRoutes);
app.listen(3000)