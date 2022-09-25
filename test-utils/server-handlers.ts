import { rest } from 'msw';
import { baseUrl } from 'pages/_app.page';
import { mockedPosts } from '../__mocks__/mocks';

const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/posts', (_req, res, ctx) => {
    return res(ctx.json(mockedPosts));
  }),
  rest.get(`${baseUrl}/api/hello`, (_req, res, ctx) => {
    return res(ctx.json({ name: 'John Doe' }));
  }),
];

export { handlers };
