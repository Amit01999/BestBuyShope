const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./routes');

const app = express();
app.use(
  cors({
    origin: 'https://best-buy-shope-krgy.vercel.app', // No trailing slash
    methods: 'GET, POST, PUT, DELETE, OPTIONS', // Add OPTIONS
    credentials: true,
    allowedHeaders: 'Content-Type, Authorization',
  })
);

// Explicitly handle OPTIONS requests (CORS preflight requests)
app.options('*', cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api', router);
//def route
app.get('/', (req, res) => {
  return res.json({
    success: true,
    message: 'Your BestBuyShop server is up and running....',
  });
});

const PORT = process.env.PORT || 8080;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log('connnect to DB');
    console.log('Server is running ' + PORT);
  });
});
