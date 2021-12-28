import handler from '../hello.page';

const json = jest.fn();

const res = {
  status: jest.fn(() => ({ json })),
};

describe('hello', () => {
  it('handler', () => {
    handler({}, res);
    expect(json.mock.calls[0][0].name).toEqual('John Doe');
  });
});
