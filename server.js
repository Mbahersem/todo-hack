const app = require("./app");
const mongoose = require("mongoose");
const connectDB = require("./utils/connectDB");
const dotenv = require("dotenv");
dotenv.config({path: "./.env"});

connectDB();

port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server on port ${port}`);
});

process.on('SIGINT', async() => {
    await mongoose.disconnect();
    process.exit(0);
})