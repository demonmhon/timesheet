import { Request, Response } from 'express';

import { ResourceNotfound, BadRequest } from '../../utils/custom-errors';
import service from '../../services/v1/projects.service';

export const getAll = async (req: Request, res: Response): Promise<any> => {
  const results = await service.getAll();
  return res.send({
    total: results.length,
    data: [...results],
  });
};

export const getById = async (req: Request, res: Response): Promise<any> => {
  const id = `${req.params.id}`;
  if (!id) {
    throw new BadRequest();
  }
  const result = await service.getById(id);
  if (!result) {
    throw new ResourceNotfound(`No project with given id: ${id}`);
  }
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

export default { getAll, getById };
