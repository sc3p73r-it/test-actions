const request = require('supertest');
const app = require('./app'); // Import your Express app

describe('GET /', () => {
  it('should return Hello, Docker!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello, Docker!');
  });
});
