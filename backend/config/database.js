import mongoose from 'mongoose';
import logger from '../utils/logger.js';

const connectDatabase = async () => {
  const { MONGODB_URI } = process.env;

  if (!MONGODB_URI || MONGODB_URI.includes('<username>')) {
    logger.warn(
      'Skipping MongoDB connection. Provide a valid MONGODB_URI in .env to enable database features.'
    );
    return;
  }

  try {
    const connection = await mongoose.connect(MONGODB_URI, {
      maxPoolSize: 10,
      autoIndex: true
    });

    logger.info(
      `MongoDB connected: ${connection.connection.host}/${connection.connection.name}`
    );
  } catch (error) {
    logger.error('MongoDB connection failed', error);
    process.exit(1);
  }

  mongoose.connection.on('disconnected', () => {
    logger.warn('MongoDB connection lost. Attempting to reconnect...');
  });
};

export default connectDatabase;

