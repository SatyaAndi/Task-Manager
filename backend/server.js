const express = require('express');
const cors = require('cors');
const sequelize = require('./database');
const Task = require('./models/Task');

const app = express();
app.use(cors());
app.use(express.json());

// Sinkronisasi database (membuat tabel jika belum ada)
sequelize.sync()
  .then(() => console.log('Database & tables created!'))
  .catch(err => console.error('Failed to sync database:', err));

// Endpoint untuk menambahkan tugas
app.post('/tasks', async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: 'Error creating task' });
  }
});

// Endpoint untuk mengambil daftar tugas
app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching tasks' });
  }
});

// Jalankan server
app.listen(5000, () => console.log('Server running on http://localhost:5000'));
