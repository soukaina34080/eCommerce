require('dotenv').config({ path: `./config/${process.env.NODE_ENV}.env` })

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

app.use(express.json());

const usersRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');


app.use('/api/users', usersRoute);
app.use('api/auth/register',authRoute);
app.use('/api/product', productRoute);
app.use('/api/product/:idProduit', productRoute);




app.get('/api', (_, res) => res.send("Hello from API v1"));
app.listen(process.env.PORT, () => console.log(`Back end is running on PORT ${process.env.PORT}`));

module.exports = app;
