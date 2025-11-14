const APP_NAME = 'Nutrition Advisor API';
const NODE_ENV = process.env.NODE_ENV || 'development';
const PORT = Number(process.env.PORT) || 5000;
const CLIENT_URLS = (process.env.CLIENT_URL || 'http://localhost:5173')
  .split(',')
  .map(url => url.trim());

const JWT_ACCESS_EXPIRES_IN = process.env.JWT_ACCESS_EXPIRES_IN || '15m';
const JWT_REFRESH_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN || '7d';

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.COOKIE_SECURE === 'true' || NODE_ENV === 'production',
  sameSite: process.env.COOKIE_SAME_SITE || (NODE_ENV === 'production' ? 'Strict' : 'Lax'),
  domain: process.env.COOKIE_DOMAIN || 'localhost'
};

const RATE_LIMIT_OPTIONS = {
  windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000,
  max: Number(process.env.RATE_LIMIT_MAX) || 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Too many requests from this IP, please try again later.'
};

const CORS_OPTIONS = {
  origin: CLIENT_URLS,
  credentials: true
};

const LOG_LEVEL = process.env.LOG_LEVEL || 'info';

export {
  APP_NAME,
  NODE_ENV,
  PORT,
  CLIENT_URLS,
  JWT_ACCESS_EXPIRES_IN,
  JWT_REFRESH_EXPIRES_IN,
  COOKIE_OPTIONS,
  RATE_LIMIT_OPTIONS,
  CORS_OPTIONS,
  LOG_LEVEL
};

