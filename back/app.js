const express = require('express');
const cors = require('cors');
const app = express();

//Server Configuration - calate se ingles paaaaaaaaaa

app.use(cors());
app.use(express.json());


//Routes

const productRoutes = require('./routes/productRoutes');
app.use('/products', productRoutes);


//Server Star

const PORT = 3000;
app.listen(PORT, ()=>{
  console.log(`server listening on port ${PORT}`);
});