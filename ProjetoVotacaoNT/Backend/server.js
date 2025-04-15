const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const pollRoutes = require('./routes/pollRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/polls', pollRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
