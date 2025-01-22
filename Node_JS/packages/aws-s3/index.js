const express = require('express');
const AWS = require('@aws-sdk/client-s3');
const multer = require('multer');
const multerS3 = require('multer-s3');
const path = require('path');

const app = express();

const bucketName = 'aws-ap-south-1-008971631073-shipsar-demo-pipe';

const s3 = new AWS.S3Client({
    region: "ap-south-1",
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID, // recommended to set in .env
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, // recommended to set in .env
    },
})


const upload = multer({
    storage: multerS3({
        s3,
        bucket: bucketName,
        acl: "public-read",
        metadData: (req, file, next) => {
            next(null, {
                fieldName: file.fieldName
            })
        },
        key: (req, file, next) => {
            next(null, Date.now().toString() + path.extname(file.originalname))
        }
    })
})

app.post("/upload_image", upload.single('image'), (req, res) => {
    try {

        if (!req.file) {
            return res.status(400).send("NO FILE UPLOADED!");
        }
        res.json({
            imageurl: req.file.location
        })
    } catch (error) {
        console.log({ error })
    }
})


// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
