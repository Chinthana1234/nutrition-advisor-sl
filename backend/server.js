import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';

import connectDatabase from './config/database.js';
import {
  APP_NAME,
  NODE_ENV,
  PORT,
  CORS_OPTIONS,
  RATE_LIMIT_OPTIONS
} from './config/constants.js';
import logger from './utils/logger.js';
import apiRouter from './routes/index.js';
import notFoundHandler from './middleware/notFound.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();

app.set('trust proxy', 1);

app.use(helmet());
app.use(cors(CORS_OPTIONS));
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(rateLimit(RATE_LIMIT_OPTIONS));

const morganFormat = NODE_ENV === 'production' ? 'combined' : 'dev';
app.use(
  morgan(morganFormat, {
    stream: {
      write: message => logger.http(message.trim())
    }
  })
);

app.get('/health', (_req, res) => {
  res.json({
    success: true,
    service: APP_NAME,
    environment: NODE_ENV,
    timestamp: new Date().toISOString()
  });
});

app.use('/api/v1', apiRouter);

app.use(notFoundHandler);
app.use(errorHandler);

const startServer = async () => {
  await connectDatabase();

  app.listen(PORT, () => {
    logger.info(`${APP_NAME} running on port ${PORT} in ${NODE_ENV} mode`);
  });
};

startServer().catch(error => {
  logger.error('Failed to start server', error);
  process.exit(1);
});

