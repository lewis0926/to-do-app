import { Request, Response } from 'express';
import ToDoModel from "../models/todo.model";
import logger from "../logger";
import { Types } from "mongoose";
import { InternalServerException } from "../error-handler";

class TodoController {
  private readonly toDoModel;

  constructor() {
    this.toDoModel = ToDoModel;
  }

  public getAllTodoTasks = async (req: Request, res: Response) => {
    try {
      logger.info("Getting all todo tasks");

      const tasks = await this.toDoModel.find({});
      logger.info(`Tasks: ${JSON.stringify(tasks)}`);

      res.send(tasks);
    } catch (err) {
      InternalServerException(`Error in getting todo tasks: ${err}`, res);
    }
  }

  public addTodoTask = async (req: Request, res: Response) => {
    try {
      logger.info(`Adding new task: ${JSON.stringify(req.body)}`);

      const newTask = new this.toDoModel(req.body);
      await newTask.save();

      res.send(newTask);
    } catch (err) {
      InternalServerException(`Error in adding new task: ${err}`, res);
    }
  }

  public deleteTodoTask = async (req: Request, res: Response) => {
    try {
      const taskId = req?.params?.id;
      if (!taskId) {
        throw new Error(`Valid task id is not provided: ${taskId}`);
      }

      logger.info(`Deleting task with id: ${taskId}`);
      await this.toDoModel.findByIdAndDelete(taskId);

      res.send("Deleted successfully");
    } catch (err) {
      InternalServerException(`Error in deleting task: ${err}`, res);
    }
  }

  public updateTodoTask = async (req: Request, res: Response) => {
    try {
      const taskId = req?.params?.id;
      if (!taskId) {
        throw new Error(`Valid task id is not provided: ${taskId}`);
      }

      logger.info(`Updating task with id: ${req?.params?.id}`);

      const updatedTask = req.body;

      await this.toDoModel.updateOne(
        { _id: new Types.ObjectId(taskId) },
        { $set: updatedTask }
      );

      logger.info(`Updated task: ${JSON.stringify(updatedTask)}`);
      res.send(updatedTask);
    } catch (err) {
      InternalServerException(`Error in updating task: ${err}`, res);
    }
  }
}

export default TodoController;

