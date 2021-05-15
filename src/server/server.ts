import express from "express";
import cors from "cors";


export default class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(cors({ origin: true, credentials: true }));
  }

  async start(port: number, callback?: any) {
    this.app.listen(port, callback);
    console.log(`Servidor en puerto ${port}`)
    this.startRoutes();
  }

  startRoutes() {
   
  }
}