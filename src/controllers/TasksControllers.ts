import { Request, Response } from "express";
import { InternalServerError } from "../response/InternalServerErrorResponse";
import * as Joi from "joi";
import { Tasks_Master } from "../entity/TasksMaster";


const tasksSchema = Joi.object({
          amountDone: Joi.number().allow('',null),
          resourceId: Joi.string().allow('',null),
          id: Joi.string().allow('',null),
          from: Joi.string().allow('',null),
          to: Joi.string().allow('',null),
          label: Joi.string().allow('',null),
          enableDragging: Joi.boolean().allow('',null),
          enableResize: Joi.boolean().allow('',null),
          userId: Joi.string().allow('',null),
          classes: Joi.string().allow('',null),
          OperationType: Joi.string().allow('',null),
});

export const createTasksMaster = async (req: Request, res: Response) => {
          const { error } = tasksSchema.validate(req.body);
        
          if (error) {
            return res.status(400).json({ error: error.details[0].message });
          }
          try {
            const taskMaster = new Tasks_Master();
            taskMaster.amountDone = req.body.amountDone;
            taskMaster.resourceId = req.body.resourceId;
            taskMaster.from = req.body.from;
            taskMaster.to = req.body.to;
            taskMaster.label = req.body.label;
            taskMaster.enableDragging = req.body.enableDragging;
            taskMaster.enableResize = req.body.enableResize;
            taskMaster.userId = req.body.userId;
            taskMaster.classes = req.body.classes;
            taskMaster.OperationType = req.body.OperationType;
            await taskMaster.save();
            return res.status(201).json(taskMaster);
          } catch (error) {
            return InternalServerError(res, error);
          }
        };

export const getAllTaskMaster = async (_: Request, res: Response) => {
          try {
                    const taskMaster = await Tasks_Master.find();
                    return res.json(taskMaster);
          } catch (error) {
                    return InternalServerError(res, error);
          }
};

export const TaskMasterById = async (req: Request, res: Response) => {
          try {
            const taskMaster = await Tasks_Master.findOne(req.params.id);
            if (!taskMaster) {
              return res.status(404).json({ error: 'taskMaster not found' });
            }
            return res.json(taskMaster);
          } catch (error) {
            return InternalServerError(res, error);
          }
        };

export const deleteTaskMaster = async (req: Request, res: Response) => {
          try {
                    const taskMaster = await Tasks_Master.findOne(req.params.id);
                    if (!taskMaster) {
                    return res.status(404).json({ error: 'taskMaster not found' });
                    }
                    await taskMaster.remove();
                    return res.status(204).end();
          } catch (error) {
                    return InternalServerError(res, error);
          }
};

export const updateBulkTaskMaster = async (req: Request, res: Response) => {

  if (req.body.taskMaster.length) {
    const taskData = req.body.taskMaster  
    console.log(taskData, "adding")

    let responseData: any = []


    for (let i = 0; i < taskData.length; i++) {
      const element = taskData[i];
      console.log(element);

      const { error } = tasksSchema.validate(element);

      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }

    }


    try {

      for (let i = 0; i < taskData.length; i++) {
        const element = taskData[i];
        let taskUpdateData: any;

        if (element.TaskId) {
          console.log("update");
          taskUpdateData = await updateDataTaskMaster(element)
        }

        else {
          taskUpdateData = await createDataTaskMaster(element)
          console.log("add");
        }
        responseData.push(taskUpdateData);

      }
      return res.status(201).json(responseData);
    } catch (error) {
      return InternalServerError(res, error);
    }
  }

};

const updateDataTaskMaster = async (data: any) => {
  const { error } = tasksSchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {
    const taskMaster = await Tasks_Master.findOne(data.TaskId);
    if (!taskMaster) {
      return { error: 'taskMaster not found' }
    }
    taskMaster.amountDone = data.amountDone;
    taskMaster.resourceId = data.resourceId;
    taskMaster.from = data.from;
    taskMaster.to = data.to;
    taskMaster.label = data.label;
    taskMaster.enableDragging = data.enableDragging;
    taskMaster.enableResize = data.enableResize;
    taskMaster.userId = data.userId;
    taskMaster.classes = data.classes;
    taskMaster.id = data.id;
    taskMaster.OperationType = data.OperationType;

    await taskMaster.save();
    return taskMaster
  } catch (error) {
    return error
  }
};

const createDataTaskMaster = async (data: any) => {
  const { error } = tasksSchema.validate(data);

  if (error) {
    return { error: error.details[0].message }
  }

  try {
    const taskMaster = new Tasks_Master();
    taskMaster.amountDone = data.amountDone;
    taskMaster.resourceId  = data.resourceId ;
    taskMaster.from = data.from;
    taskMaster.to = data.to;
    taskMaster.label = data.label;
    taskMaster.enableDragging = data.enableDragging;
    taskMaster.enableResize = data.enableResize;
    taskMaster.userId = data.userId;  
    taskMaster.classes = data.classes;
    taskMaster.id = data.id;
    taskMaster.OperationType = data.OperationType;
    await taskMaster.save();

    return taskMaster
  } catch (error) {
    console.log(error)
    return error
  }
};