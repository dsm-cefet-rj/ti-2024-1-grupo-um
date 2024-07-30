import mongoose from "mongoose";

async function databaseConnect() {
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection;
}

export default databaseConnect;