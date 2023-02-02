import { rest } from 'msw';
import { mockedPosts } from '../__mocks__/mocks';

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL;

const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/posts', (_req, res, ctx) => {
    return res(ctx.json(mockedPosts));
  }),
  rest.get(`${baseUrl}/api/hello`, (_req, res, ctx) => {
    return res(ctx.json({ name: 'John Doe' }));
  }),
];

export { handlers };
