import Projects from '../../models/projects.model';
import { Document } from 'mongoose';
import logger from '../../utils/logger';

export const getAll = async (): Promise<Document[]> => {
  logger.info('Getting projects with .getAll()');
  const result = await Projects.find({});
  return result;
};

export const getById = async (id: string): Promise<any> => {
  const result = await Projects.findOne({ _id: id });
  return result;
};

export const createNew = async (projectData: any): Promise<any> => {
  try {
    logger.info('Creating new project');
    const newItem = new Projects(projectData);
    const result = await newItem.save();
    return result;
  } catch (error) {
    logger.error(`Error on create project`);
    throw error;
  }
};

// const createNew = async (todoData) => {
//   try {
//     logger.info('Creating new todo');
//     const newItem = new Todos(todoData);
//     const result = await newItem.save();
//     return result;
//   } catch (error) {
//     logger.error(`Error on create todo`);
//     throw error;
//   }
// };

// const setItemStatus = async (id, status) => {
//   try {
//     logger.info(`Update todo status of ${id}`);
//     await Todos.findByIdAndUpdate({ _id: id }, { status });
//     if (['DONE', 'CREATED'].includes(status)) {
//       const item = await Todos.findOne({ _id: id });
//       const { subtasks } = item;

//       // Change all sub task to same as parent
//       const newSubtaskList = subtasks.map((item) => ({
//         ...item,
//         status: status,
//       }));

//       await Todos.findByIdAndUpdate(
//         { _id: id },
//         { subtasks: [...newSubtaskList] }
//       );
//     }
//     const result = await Todos.findOne({ _id: id });
//     return result;
//   } catch (error) {
//     logger.error(`Error on update to do status of ${id}`);
//     throw error;
//   }
// };

// const addNewSubTask = async (id, subtaskData) => {
//   try {
//     logger.info(`Creating new subtask to ${id}`);
//     const item = await Todos.findOne({ _id: id });
//     const { subtasks } = item;

//     await Todos.findByIdAndUpdate(
//       { _id: id },
//       { subtasks: [...subtasks, { ...subtaskData, status: 'CREATED' }] }
//     );
//     await Todos.findByIdAndUpdate({ _id: id }, { status: 'CREATED' });
//     const result = await Todos.findOne({ _id: id });

//     return result;
//   } catch (error) {
//     logger.error(`Error on create new subtask to ${id}`, error);
//     throw Error('Error on create new sub task');
//   }
// };

// const setSubTaskStatus = async (id, subTaskIndex, status) => {
//   try {
//     logger.info(`Updating new subtask of ${id}`);
//     const item = await Todos.findOne({ _id: id });
//     const { subtasks } = item;
//     const newSubtaskList = [...subtasks];
//     newSubtaskList[subTaskIndex].status = status;

//     // Check if all sub tasks done, set, parent, Todo as 'DONE'
//     const incompletedItems = newSubtaskList.filter(
//       (item) => item.status !== 'DONE'
//     );
//     if (!incompletedItems.length) {
//       logger.info(`All sub tasks of ${id} completed, set to DONE`);

//       await Todos.findByIdAndUpdate({ _id: id }, { status: 'DONE' });
//     } else {
//       await Todos.findByIdAndUpdate({ _id: id }, { status: 'CREATED' });
//       logger.info(
//         `Sub task of ${id}: ${subtasks.length - incompletedItems.length} / ${
//           subtasks.length
//         } DONE`
//       );
//     }

//     await Todos.findByIdAndUpdate(
//       { _id: id },
//       { subtasks: [...newSubtaskList] }
//     );

//     // Return, parent, Todo
//     const result = await Todos.findOne({ _id: id });

//     return result;
//   } catch (error) {
//     logger.error(`Error on updating subtask of ${id}`, error);
//     throw Error('Error on updating sub task');
//   }
// };

export default {
  getAll,
  getById,
  createNew,
};
