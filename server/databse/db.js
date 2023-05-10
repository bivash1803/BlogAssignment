import {Connection,}  from "mongoose"

import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-begsqru-shard-00-00.7rdr3mx.mongodb.net:27017,ac-begsqru-shard-00-01.7rdr3mx.mongodb.net:27017,ac-begsqru-shard-00-02.7rdr3mx.mongodb.net:27017/?ssl=true&replicaSet=atlas-28mt7y-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;
// const URL =`mongodb://user:<Z7yRsTde0DuVg5fn>@ac-begsqru-shard-00-00.7rdr3mx.mongodb.net:27017,ac-begsqru-shard-00-01.7rdr3mx.mongodb.net:27017,ac-begsqru-shard-00-02.7rdr3mx.mongodb.net:27017/?ssl=true&replicaSet=atlas-28mt7y-shard-0&authSource=admin&retryWrites=true&w=majority`;