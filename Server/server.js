import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import 'express-async-errors';
import mongoSanitize from 'express-mongo-sanitize';
import path from 'path';
import ConnectDB from './config/db.js';
import errorHandler from './middlewares/error-handler.js';
import AdminRoutes from './routes/admin.js';
import AuthRoutes from './routes/auth.js';
import PublicRoutes from './routes/public.js';
import UserRoutes from './routes/user.js';

dotenv.config();

const app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors());

// Sanitize data
app.use(mongoSanitize());

//API Routes
app.use('/api/v1/auth', AuthRoutes);
app.use('/api/v1/public', PublicRoutes);
app.use('/api/v1/admin', AdminRoutes);
app.use('/api/v1/user', UserRoutes);

app.use('/api/v1/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});
app.use(errorHandler);

const __dirname = path.resolve();
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './client')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
  );
}

// app.all('*', async (req, res) => {
//   throw new NotFoundError();
// });

//Connect to DB
ConnectDB();

//Start Server on PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
