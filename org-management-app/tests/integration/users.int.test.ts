import request from 'supertest';
import { app } from '../../backend/src/server'; // Adjust the path as necessary

describe('User Management Integration Tests', () => {
  let userId: string;

  it('should create a new user', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({
        username: 'testuser',
        email: 'testuser@example.com',
        password: 'password123',
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    userId = response.body.id; // Store the user ID for later tests
  });

  it('should retrieve the created user', async () => {
    const response = await request(app).get(`/api/users/${userId}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', userId);
    expect(response.body).toHaveProperty('username', 'testuser');
  });

  it('should update the user', async () => {
    const response = await request(app)
      .put(`/api/users/${userId}`)
      .send({
        username: 'updateduser',
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('username', 'updateduser');
  });

  it('should delete the user', async () => {
    const response = await request(app).delete(`/api/users/${userId}`);

    expect(response.status).toBe(204);
  });

  it('should return 404 for the deleted user', async () => {
    const response = await request(app).get(`/api/users/${userId}`);

    expect(response.status).toBe(404);
  });
});