const server = require('./server');

const PORT = 3000;
const servStart = () => console.log(`Server start - http:localhost:${PORT}/api/`);
const servError = (err) => console.log(`Error server: ${err}`);

server.listen(process.env.PORT || PORT, (err) => err ? servError(err) : servStart());
