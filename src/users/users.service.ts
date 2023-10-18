import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'admin',
      password: 'admin123',
      role: 'admin'
    },
    {
      userId: 2,
      username: 'normal',
      password: 'normal123',
      role: 'normal'
    },
    {
        userId: 3,
        username: 'limit',
        password: 'limit123',
        role: 'limit'
      },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}