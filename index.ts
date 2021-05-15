import dotenv from "dotenv";
import Server from "./src/server/server";
dotenv.config();



const server = new Server();

const conn = async () => {
    try {
     await server.start(Number(process.env.PORT)); 
    } catch (error) {
        console.log(error)
    }
 }
 
conn();