import { setupWorker } from 'msw';
import { handlers } from './server-handlers';

export const server = setupWorker(...handlers);
