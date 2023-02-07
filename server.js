const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
require("dotenv").config(); 

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client', 'build')));


// remove for dev
// app.use(cors({ 
//     origin: "frontend_URL", 
//     credentials: true 
// }));


app.listen(port, () => console.log(`App available on ${port}`));

app.get('/express_backend', async (req, res) => {
    res.send({express: 'Your express backend is connected to React'})
});

mongoose.connect(
    'mongodb+srv://admin:Dd48P2zMEKKiPiRj@cluster0.rmyafyl.mongodb.net/honestmanchester', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

//data schema
const entrySchema = new mongoose.Schema({
    university:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true        
    },
    date:{
        type: Date,
        required: true
    }
});

const Entry = mongoose.model("Entry", entrySchema);

// const testEntry = Entry({
//     university: "UoM",
//     content: "This is a test confession",
//     date: new Date()
// });

// testEntry.save().then(
//     () => console.log("One entry added"),
//     (err) => console.log(err))

app.get('/fetch_content', async (req, res) => {
    result = await Entry.find({}).lean(true);
    // console.log(result);
    res.send(result);
}); 

app.post('/submit_content', (req, res) => {
    // console.log(req.body);
    const { uniRadios, content } = req.body;
    const newEntry = Entry({
        university: uniRadios,
        content: content,
        date: new Date()
    })
    newEntry.save(function (err, entry) {
        if (err) return console.error(err);
        console.log("New entry saved to DB");
    })
});

app.use('*', function (request, response) {
    response.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
