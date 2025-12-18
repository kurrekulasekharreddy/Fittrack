import request from 'supertest';
import app from '../app.js';

// This test file uses a lightweight pattern - in real use, you'd export the express app separately.
// For demo purposes only.
test('root route responds', async () => {
  const res = await request('http://localhost:4000').get('/');
  expect(res.statusCode).toBe(200);
});
