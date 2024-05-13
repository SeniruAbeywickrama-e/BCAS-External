const express = require('express');
const bodyParser = require('body-parser');
const leadRoutes = require('./routes/leadRoute');


const sequelize = require('./config/db');


const cors = require("cors");

const app = express();

const PORT = 3000;


app.use(cors());
app.use(express.json());


app.get('/api/test', (req, res) => {
    res.send('Server Work');
});

app.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});

/* Lead Route - http://localhost:3000/api/leads/get-bulk-leads */
app.use('/api/leads', leadRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

