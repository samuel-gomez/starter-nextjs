import { rest } from 'msw';
import { mockedPosts } from '../__mocks__/mocks';

const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/posts', (_req, res, ctx) => {
    return res(ctx.json(mockedPosts));
  }),
];

export { handlers };
