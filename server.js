const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
require("dotenv").config(); 


app.listen(port, () => console.log(`App available on http://localhost:${port}`));

app.get('/express_backend', async (req, res) => {
    res.send({express: 'Your express backend is connected to React'})
});

mongoose.connect(
    process.env.MONGODB_URI, 
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

const testEntry = Entry({
    university: "UoM",
    content: "This is a test confession",
    date: new Date()
});

testEntry.save().then(
    () => console.log("One entry added"),
    (err) => console.log(err))

app.get('/fetch_content', async (req, res) => {
    result = await Entry.find({}).lean(true);
    console.log(result);
    res.send(result);
    
    // , async (err, found) => {
    //     if (!err) {
    //         res.send(found);
    //     }
    //     console.log(err);
    //     res.send("Some error occured!")
    // }).catch(err => console.log("Error occured, " + err));
});