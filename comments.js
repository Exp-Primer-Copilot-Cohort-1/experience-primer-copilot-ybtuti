// Create web server
// Use express framework
const express = require('express');
const app = express();
// Use body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use comments.js
const comments = require('./comments');

// GET /comments
app.get('/comments', (req, res) => {
  comments.getComments()
    .then((comments) => {
      res.json(comments);
    });
});

// POST /comments
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.addComment(comment)
    .then((comment) => {
      res.json(comment);
    });
});

// DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
  comments.deleteComment(req.params.id)
    .then((comment) => {
      res.json(comment);
    });
});

// Start web server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/');
});

// Path: comments.js
// Create comments array
let comments = [
  { id: 1, author: 'Author1', content: 'Content1' },
  { id: 2, author: 'Author2', content: 'Content2' },
  { id: 3, author: 'Author3', content: 'Content3' }
];

// Get all comments
const getComments = () => {
  return new Promise((resolve, reject) => {
    resolve(comments);
  });
};

// Add a comment
const addComment = (comment) => {
  return new Promise((resolve, reject) => {
    const newComment = {
      id: comments.length + 1,
