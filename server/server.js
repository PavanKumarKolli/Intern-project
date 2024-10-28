const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./Routes/productRoutes');
const userRoutes = require('./Routes/userRoutes');
const { errorHandler } = require('./middlewares/errorHandler');

dotenv.config(); 
connectDB(); 

const app = express();
app.use(express.json()); 


app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// Error Handling Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); 
});
