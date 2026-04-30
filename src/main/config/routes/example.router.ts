import { Router } from 'express';
import { ExampleController } from '@/presentation/controllers/example.controller';

const exampleRouter = Router();

exampleRouter
  .route('/:id')
  .get(ExampleController.example);

export { exampleRouter };
