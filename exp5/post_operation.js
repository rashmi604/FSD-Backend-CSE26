const express = require('express');

const app = express();

// JSON data read karne ke liye
app.use(express.json());

// Existing student data
let students = [
    {
        id: 1,
        name: "Rahul",
        branch: "CSE"
    },
    {
        id: 2,
        name: "Aman",
        branch: "IT"
    }
];

// Home route
app.get('/', (req, res) => {
    res.send("Student API is running");
});

// GET Operation
// Sare students ko get karna
app.get('/students', (req, res) => {
    res.json(students);
});

// POST Operation
// Naya student add karna
app.post('/students', (req, res) => {
    students.push(newStudent);

    res.json({
        message: "Student added successfully",
        student: newStudent
    });
});

// Start Server
app.listen(3005, () => {
    console.log("Server running at http://localhost:3005");
});