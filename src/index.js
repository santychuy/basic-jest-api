const config = require('./config');
const app = require('./app');

const {
  APP: { PORT },
} = config;

app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`));
