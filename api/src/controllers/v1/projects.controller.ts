import { NextFunction, Request, Response } from 'express';

import { ResourceNotfound, BadRequest } from '../../utils/custom-errors';
import projectService from '../../services/v1/projects.service';

export const getAll = async (req: Request, res: Response): Promise<any> => {
  const results = await projectService.getAll();
  return res.send({
    total: results.length,
    data: [...results],
  });
};

export const getById = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const id = `${req.params.id}`;
  if (!id) {
    next(new BadRequest());
  }
  const result = await projectService.getById(id);
  if (result) {
    return res.send({
      data: result,
    });
  }
  next(new ResourceNotfound(`No project with given id: ${id}`));
};

export const createNewProject = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  const data = req.body;
  // validate data to have required fields and correct data types
  if (!data.title) {
    next(new BadRequest('Title is required'));
  }
  const result = await projectService.createNew(data);
  return res.send({
    data: result,
  });
};

// export const postUser = (req: Request, res: Response) => {
//   const { name, email } = req.body;
//   if (!name || !email) {
//     throw new BadRequest('Required fields missing');
//   }
//   if (typeof name !== 'string' || typeof email !== 'string') {
//     throw new BadRequest('Incorrect data type');
//   }
//   return res.send({
//     id: '999',
//     name,
//     email,
//     age: null,
//     gender: 'M',
//     active: false,
//   });
// };

export default { getAll, getById, createNewProject };
