import { Router } from 'express';

import { serve, spec, swaggerJSON } from '../../controllers/v1/docs.controller';
import projectController from '../../controllers/v1/projects.controller';

const routesV1 = (): Router => {
  const router = Router();
  router.use('/docs', serve, spec);
  router.route('/swagger.json').get(swaggerJSON);

  router.route('/projects')
    .get(projectController.getAll)
    .post(projectController.createNewProject);
  router.route('/projects/:id').get(projectController.getById);

  return router;
};

export default routesV1;
