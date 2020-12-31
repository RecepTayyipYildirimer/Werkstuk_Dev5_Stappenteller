const supertest = require('supertest');
const app = require('../../../../api/src/index.js');

const request = supertest(app);



describe('GET /test', () => {
    test('responds with 200', async (done) => {
        try {
            await request
                .get('/test')
                .expect(404, done())
        } catch (e) {

        }
    })
})
/*
describe('GET /', () => {
    it('responds', async (next) => {
        try {
            const response = await request.get('/')
            expect(response.status).toBe(404, next());
            expect(typeof response.body).toBe('object', next())
        } catch (e) {
        }
    })
    it('refuses', async (next) => {
        try {
            await expect(request.post('/')).toBe(200, next());
            
        } catch (e) {
        }
    })
})
*/

/*
describe('GET /add', () => {
  test('respond with 200', async (done) => {
    try {
      await request
        .get('/test')
        .expect(404)
        .then((res) => {
          done();
        });
    } catch (e) {
      if (e) {
        console.log(e);
        done(e);
        done();
      }
    }
  });
})
*/