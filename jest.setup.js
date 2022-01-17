import 'whatwg-fetch';
import '@testing-library/jest-dom/extend-expect';
import { server } from './test-utils/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
