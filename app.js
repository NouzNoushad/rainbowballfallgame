const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const gameRoute = require('./routes/ballFall');

const app = express();

//ejs engine
app.set('view engine', 'ejs');

//middlewares
app.use(expressLayouts);

if (process.env.NODE_ENV === 'production') {
    
    app.use(express.static('public'));
}

const PORT = process.env.PORT || 4000;

app.get('/', gameRoute);

app.listen(PORT, () => console.log(`Server running on port, http://localhost:${PORT}`));