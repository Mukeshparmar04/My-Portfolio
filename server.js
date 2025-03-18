const express = require('express');
const bodyParser = require('body-parser');
const { createObjectCsvWriter } = require('csv-writer');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './')));

const csvWriter = createObjectCsvWriter({
    path: 'data.csv',
    header: [
        { id: 'name', title: 'Name' },
        { id: 'phone', title: 'Phone' },
        { id: 'email', title: 'Email' },
        { id: 'subject', title: 'Subject' }
    ],
    append: true
});

app.post('/save-to-csv', (req, res) => {
    console.log("Request Body:", req.body)
    const record = req.body;
    csvWriter.writeRecords([record])
        .then(() => {
            console.log("CSV write successful");
            res.status(200).send('Success');
        })
        .catch((err) => {
            console.error('Error writing to CSV', err);
            res.status(500).send('Internal Server Error');
        });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});