import { Request, Response } from 'express';

import { ResourceNotfound, BadRequest } from '../../utils/custom-errors';
import service from '../../services/v1/projects.service';

export const getAll = async (req: Request, res: Response) => {
  const result = await service.getAll();
  return res.send({
    total: result.length,
    data: [...result],
  });
};

// export const getById = (req: Request, res: Response) => {
//   const id = req.params.id;
//   if (!id) {
//     throw new BadRequest();
//   }
//   const matchUser = users.filter((u) => u.id == id);
//   if (matchUser.length) {
//     return res.send(matchUser[0]);
//   }
//   throw new ResourceNotfound(`No user with given id: ${id}`);
// };

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

export default { getAll };
