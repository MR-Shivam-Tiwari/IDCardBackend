const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const eventRouter = require('./routes/events');
const participant = require('./routes/participants');
require('dotenv').config();
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' })); // Adjust as per your requirement
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' })); // Adjust as per your requirement

// Multer setup with file size limit
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}
app.use('/uploads', express.static(uploadDir));

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB connected');
})
.catch(err => console.log(err));
app.use("/", (req,res) =>{
    res.send("Hello Shivam")
})

app.use('/api/events', eventRouter);
app.use('/api/participants', participant);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
