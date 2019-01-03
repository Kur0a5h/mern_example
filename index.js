const express = require('express')
const cors = require('cors');
const PORT = process.env.PORT || 9000;
const {resolve} = require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(resolve(__dirname,'client','dist')));

require('./routes')(app);

app.listen(PORT, ()=> {
    console.log('server running @ localhost:' + PORT);
}).on('error', (err)=>{
    console.log('Server listen error, do you already have a server running on PORT' + PORT);
});