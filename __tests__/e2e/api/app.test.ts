import request from 'supertest';
import app from '../../../src/app';


describe('Aplication Tests', () => {
  test('GET /random-url should return 404', done => {
    request(app).get('/random-url')
      .expect(404, done);
  });

});
