require("dotenv").config();

// Import the necessary AWS SDK v3 packages
const { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } = require('@aws-sdk/client-s3');
const fs = require('fs');

// Create an S3 client instance (AWS SDK v3)
const s3Client = new S3Client({
    region: 'ap-south-1',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID, // recommended to set in .env
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, // recommended to set in .env
    },
});
// Create an S3 client instance (AWS SDK v3)

// Bucket name
const bucketName = 'aws-ap-south-1-008971631073-shipsar-demo-pipe';

// Function to upload a file
async function uploadFile(filePath, key) {
    try {
        const fileContent = fs.readFileSync(filePath);
        const params = {
            Bucket: bucketName,
            Key: key, // Name of the file in S3
            Body: fileContent,
        };

        const command = new PutObjectCommand(params);
        const result = await s3Client.send(command);
        console.log(`File uploaded successfully. Status Code: ${result.$metadata.httpStatusCode}`);
    } catch (error) {
        console.error('Error uploading file:', error);
    }
}

// Function to download a file
async function downloadFile(key, downloadPath) {
    try {
        const params = {
            Bucket: bucketName,
            Key: key,
        };

        const command = new GetObjectCommand(params);
        const data = await s3Client.send(command);
        const file = fs.createWriteStream(downloadPath);
        data.Body.pipe(file);

        file.on('finish', () => {
            console.log(`File downloaded successfully to ${downloadPath}`);
        });
    } catch (error) {
        console.error('Error downloading file:', error);
    }
}

// Function to delete a file
async function deleteFile(key) {
    try {
        const params = {
            Bucket: bucketName,
            Key: key,
        };

        const command = new DeleteObjectCommand(params);
        await s3Client.send(command);
        console.log(`File deleted successfully from S3: ${key}`);
    } catch (error) {
        console.error('Error deleting file:', error);
    }
}

// Usage examples
// uploadFile('hello.txt', 'hello.txt');
downloadFile('hello.txt', 'downloaded-hello.txt');
// deleteFile('uploaded-file.jpg');
