const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection configuration
const db = mysql.createConnection({
    host: 'localhost', // Your MySQL host, usually localhost
    user: 'root', // Replace with your MySQL username
    password: '', // Replace with your MySQL password
    database: 'reviewsdb' // The database you created
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('MySQL connection error:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// POST route to add a review
app.post('/reviews', (req, res) => {
    const { name, review } = req.body;
    const query = 'INSERT INTO reviews (name, review) VALUES (?, ?)';

    db.query(query, [name, review], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to add review' });
        }
        res.status(201).json({ id: results.insertId, name, review });
    });
});

// DELETE route to delete a review
app.delete('/reviews/:id', (req, res) => {
    const reviewId = req.params.id;
    const query = 'DELETE FROM reviews WHERE id = ?';

    db.query(query, [reviewId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to delete review' });
        }
        res.status(200).json({ message: 'Review deleted successfully' });
    });
});

// GET route to fetch all reviews
app.get('/reviews', (req, res) => {
    const query = 'SELECT * FROM reviews ORDER BY created_at DESC';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to fetch reviews' });
        }
        res.json(results);
    });
});

// Start the server
const PORT = 5000; // Port for the backend
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
