const express = require("express");
const app = express();
const path = require('path');
const PORT = 3000;


/* ROUTERS */
const mainRouter = require('./routers/main');


/* MIDDLEWARES ROUTES */
app.use('/', mainRouter);


/* STATIC FILES */
app.use(express.static(path.join(__dirname, 'public')));


/* SERVER RUNNING */
app.listen(PORT, () => console.log(`Server listen in port ${PORT}\nhttp://localhost:${PORT}`));
