const API_KEY = "1234567890abcdef";

function runUserScript(userInput) {
    eval(userInput); // Dangerous: allows execution of arbitrary JS code
}

function displayMessage(req, res) {
    const userMessage = req.query.message;
    res.send(`<html><body><h1>${userMessage}</h1></body></html>`); // XSS vulnerability
}

const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    const userData = JSON.parse(req.body.data);
    console.log("Deserialized data:", userData);
    res.send("Data processed");
});

const { exec } = require("child_process");

app.get("/ping", (req, res) => {
    const ip = req.query.ip;
    exec(`ping -c 3 ${ip}`, (error, stdout, stderr) => {
        if (error) {
            return res.send(`Error: ${stderr}`);
        }
        res.send(`Output: ${stdout}`);
    });
});

app.listen(3000, () => console.log("Server running on port 3000"));
