import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import logger from "./logger";
import initializeToDoRouters from "./routes/todo.routes";
import cors from 'cors';

const initializeApp = async (): Promise<void> => {
  dotenv.config();

  try {
    await mongoose.connect(process.env.MONGO_CONNECTION_STRING || 'mongodb://localhost:27017/todo')
  } catch (err) {
    logger.error(`Error in connecting to MongoDB: ${err}`);
    throw err;
  }

  logger.info('Connected to MongoDB successfully');

  const app = express();
  app.use(express.json());
  app.use(cors());
  const host = process.env.HOST || 'localhost';
  const port = process.env.PORT || 8000;

  app.use('/todo', initializeToDoRouters());

  app.listen(port, () => {
    logger.info(`Server is running on ${host}:${port}`);
  });
}

initializeApp();
